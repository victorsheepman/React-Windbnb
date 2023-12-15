import { ReactNode, createContext, useMemo, useState } from 'react'
import { GuestQtyType, LocationEnum, Stay } from '../schemas';
import data from '../../data'
interface WindbnbContextType {
    locationContext:LocationEnum,
    isShowContext:boolean,
    stayList:Array<Stay>,
    guestContext:GuestQtyType,
    total:number,
    handlerState: (stateLocation?: LocationEnum, stateQty?:GuestQtyType) => void,
    setIsShowContext: React.Dispatch<React.SetStateAction<boolean>>
    
}

type LocationPartial = Pick<Stay, 'city'| 'country'>


const defaultValue: WindbnbContextType = {
  locationContext: LocationEnum.HELSINKI,
  isShowContext:false,
  stayList:[],
  guestContext:{
    adults:0,
    children:0
  },
  total:0,
  setIsShowContext:()=>false,
  handlerState: () => {},
}

export const WindbnbContext = createContext<WindbnbContextType>(defaultValue)

export const WindbnbContextProvider = ({ children }:{children:ReactNode}) => {
  const [isShowContext, setIsShowContext] = useState<boolean>(false)  
  const [total, setTotal] = useState<number>(0)
  const [locationContext, setLocationContext] = useState<LocationEnum>(LocationEnum.HELSINKI);
  const [guestContext, setGuestContext] = useState<GuestQtyType>({
    adults:0,
    children:0
   })
   
    const handlerState = (stateLocation?:LocationEnum, stateQty?:GuestQtyType)=>{
      if (stateLocation) {
        setLocationContext(stateLocation)
       
      }
      if (stateQty) {
        setGuestContext(stateQty)
      } 
      setIsShowContext(false)
    }
    const sumGuest = (guest:GuestQtyType)=>{
      const {adults, children} = guest
      return adults + children
    }
    const locationParser = (locationString: LocationEnum):LocationPartial=> {
      const parts = locationString.split(', ');
  
      if (parts.length === 2) {
          const data: LocationPartial = {
              city: parts[0],
              country: parts[1]
          };
          return data;
      } else {
          throw new Error("Formato de cadena incorrecto");
      }
    }


    const stayList:Array<Stay> = useMemo(() => {
      const location = locationParser(locationContext)
      const totalGuest = sumGuest(guestContext)
      setTotal(totalGuest)

      const dataLocationFiltered = data.filter(i=> i.city.includes(location.city))  
    
      if (totalGuest > 0) {
        
        const dataGuestFiltered = dataLocationFiltered.filter(i=>i.maxGuests >= totalGuest)
        return dataGuestFiltered
      }
      return dataLocationFiltered
    }, [locationContext, guestContext])
    return (
      <WindbnbContext.Provider value={{ locationContext, stayList, isShowContext,guestContext,total, setIsShowContext, handlerState}}>
        {children}
      </WindbnbContext.Provider>
    );
};