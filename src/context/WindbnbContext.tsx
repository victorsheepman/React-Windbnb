import { ReactNode, createContext, useMemo, useState } from 'react'
import { LocationEnum, Stay } from '../schemas';
import data from '../../data'
interface WindbnbContextType {
    locationContext:LocationEnum,
    isShowContext:boolean,
    stayList:Array<Stay>,
    handlerState: (stateLocation?: LocationEnum) => void,
    setIsShowContext: React.Dispatch<React.SetStateAction<boolean>>
    
}

type LocationPartial = Pick<Stay, 'city'| 'country'>


const defaultValue: WindbnbContextType = {
  locationContext: LocationEnum.HELSINKI,
  isShowContext:false,
  stayList:[],
  setIsShowContext:()=>false,
  handlerState: () => {},
}

export const WindbnbContext = createContext<WindbnbContextType>(defaultValue)

export const WindbnbContextProvider = ({ children }:{children:ReactNode}) => {
  const [isShowContext, setIsShowContext] = useState<boolean>(false)  
  const [locationContext, setLocationContext] = useState<LocationEnum>(LocationEnum.HELSINKI);

    const handlerState = (stateLocation?:LocationEnum)=>{
      if (stateLocation) {
        setLocationContext(stateLocation)
        setIsShowContext(false)
      }
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
      const dataLocationFiltered = data.filter(i=> i.city.includes(location.city))  
     
      return dataLocationFiltered
    }, [locationContext])
    return (
      <WindbnbContext.Provider value={{ locationContext, stayList, isShowContext, setIsShowContext, handlerState}}>
        {children}
      </WindbnbContext.Provider>
    );
};