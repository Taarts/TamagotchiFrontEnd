import React from 'react'
import { Link } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'
import { Landing } from './pages/Landing'
import { PetDetails } from './pages/PetsPage'

export type PetType = {
  id: number
  name: string
  birthday: string
  hungerLevel: number
  happinessLevel: number
  isAlive: boolean
}

export function App() {
  return (
    <div>
      <header>
        <Link to="/">
          <h1>Tamagotchi</h1>
        </Link>
      </header>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Pets/:id" element={<PetDetails />} />
        <Route path="*" element={<p>404: Not Found</p>} />
      </Routes>
      <footer>by Amheiser</footer>
    </div>
  )
}
