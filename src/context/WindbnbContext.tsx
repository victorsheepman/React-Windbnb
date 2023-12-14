import { ReactNode, createContext, useEffect, useMemo, useState } from 'react'
import { LocationEnum, Stay } from '../schemas';
import data from '../../data'
interface WindbnbContextType {
    locationContext:LocationEnum,
    handlerState: (stateLocation?: LocationEnum) => void
    stayList:Array<Stay>
}

type LocationPartial = Pick<Stay, 'city'| 'country'>


const defaultValue: WindbnbContextType = {
  locationContext: LocationEnum.HELSINKI,
  handlerState: () => {},
  stayList:[] // Puedes proporcionar una función vacía o la lógica que necesites.
}

export const WindbnbContext = createContext<WindbnbContextType>(defaultValue)

export const WindbnbContextProvider = ({ children }:{children:ReactNode}) => {
    const [locationContext, setLocationContext] = useState<LocationEnum>(LocationEnum.HELSINKI);

    const handlerState = (stateLocation?:LocationEnum)=>{
      if (stateLocation) {
        setLocationContext(stateLocation)
      }
    }
    //
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
  
    useEffect(() => {
      console.log(locationContext);
      
    }, [locationContext])
    
    // pre contrato 
      /* 
        - location nunca esta vacio 
        - gues puede ser cero
      */
    // post contrato

    /*
        - stayList no puede ser un array vacio
    */

    const stayList:Array<Stay> = useMemo(() => {
      const location = locationParser(locationContext)
      const dataLocationFiltered = data.filter(i=> i.city.includes(location.city))  
      return dataLocationFiltered
    }, [locationContext])
    return (
      <WindbnbContext.Provider value={{ locationContext, handlerState, stayList }}>
        {children}
      </WindbnbContext.Provider>
    );
};