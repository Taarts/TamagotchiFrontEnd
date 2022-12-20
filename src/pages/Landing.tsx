import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { PetType } from '../App'

export function Landing() {
  const [petsGet, setPetsGet] = useState<PetType[]>([])

  function getAllPets() {
    async function fetchPets() {
      const response = await axios(
        'https://tamagotchiAPI-2.herokuapp.com/api/Pets'
      )

      if (response.status === 200) {
        setPetsGet(response.data)
        console.log(response.data)
      }
    }
    fetchPets()
  }

  return (
    <>
      <div>
        <h1>Landing Page</h1>
      </div>
    </>
  )
}
