
import { Header } from './containers/Header'
import { MainStay } from './containers/MainStay'
import { WindbnbContextProvider } from './context/WindbnbContext'

export const Windbnb = () => {
  return (
    <WindbnbContextProvider>
      <Header />
      <MainStay />
    </WindbnbContextProvider>
  )
}
