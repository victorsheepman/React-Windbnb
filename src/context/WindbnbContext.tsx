import { ReactNode, createContext, useEffect, useState } from 'react'
import { LocationEnum } from '../schemas';
interface WindbnbContextType {
    locationContext:LocationEnum,
    handlerState: (stateLocation?: LocationEnum) => void
}

const defaultValue: WindbnbContextType = {
  locationContext: LocationEnum.HELSINKI,
  handlerState: () => {}, // Puedes proporcionar una función vacía o la lógica que necesites.
}

export const WindbnbContext = createContext<WindbnbContextType>(defaultValue)

export const WindbnbContextProvider = ({ children }:{children:ReactNode}) => {
    const [locationContext, setLocationContext] = useState<LocationEnum>(LocationEnum.HELSINKI);

    const handlerState = (stateLocation?:LocationEnum)=>{
      if (stateLocation) {
        setLocationContext(stateLocation)
      }
    }
    useEffect(() => {
      console.log(locationContext);
      
    }, [locationContext])
    
    return (
      <WindbnbContext.Provider value={{ locationContext, handlerState }}>
        {children}
      </WindbnbContext.Provider>
    );
};