import React from 'react'
import { Header } from './containers/Header'
import { MainStay } from './containers/MainStay'
import { WindbnbContextProvider } from './context/WindbnbContext'
//import data from '../data'
export const Windbnb = () => {
  return (
    <WindbnbContextProvider>
      <Header />
      <MainStay />
    </WindbnbContextProvider>
  )
}
