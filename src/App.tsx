import { useState } from 'react'
import './App.css'
import { LoginPage } from './Components/Login/LoginPage'
import { LandingPage } from './Components/Landing/LandingPage'

function App() {
  return (
    <div className="app">
      <LoginPage />
      <LandingPage />
    </div>
  )
}

export default App
