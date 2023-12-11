import { ReactNode, createContext, useState } from 'react'
import { LocationEnum } from '../schemas';
interface WindbnbContextType {
    locationContext:LocationEnum,
    setLocationContext: React.Dispatch<React.SetStateAction<LocationEnum>>
}
export const WindbnbContext = createContext<WindbnbContextType | undefined>(undefined)


export const WindbnbContextProvider = ({ children }:{children:ReactNode}) => {
    const [locationContext, setLocationContext] = useState<LocationEnum>(LocationEnum.HELSINKI);
  
    
   
    return (
      <WindbnbContext.Provider value={{ locationContext, setLocationContext }}>
        {children}
      </WindbnbContext.Provider>
    );
};