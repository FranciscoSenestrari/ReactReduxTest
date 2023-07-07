import React from 'react'
import Navigation from './navigation/Navigation'
import { AppContextProvider } from './context/AppContext'
const App = () => {
  return (
    <AppContextProvider>
      <Navigation />
    </AppContextProvider>
  )
}

export default App