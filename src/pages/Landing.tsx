import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { PetType } from '../App'

export function Landing() {
  const [petsGet, setPetsGet] = useState<PetType[]>([])
  const [newPetName, setNewPetName] = useState('')

  function getAllPets() {
    async function fetchPets() {
      const response = await axios('http://localhost:5000')

      if (response.status === 200) {
        setPetsGet(response.data)
        console.log(response.data)
      }
    }
    fetchPets()
  }

  async function handleCreatePet() {
    const response = await axios.post('http://localhost:5000', {
      name: newPetName,
    })
    if (response.status === 201) {
      getAllPets()
    }
  }
  useEffect(getAllPets, [])
  console.log('getAllPets', getAllPets)
  console.log('petsGet', petsGet)

  return (
    <>
      <div>
        <h2>Landing Page</h2>
        <form
          onSubmit={function (event) {
            event.preventDefault()
            handleCreatePet()
          }}
        />
        <input
          type="text"
          placeholder="Pet Name"
          value={newPetName}
          onChange={function (event) {
            setNewPetName(event.target.value)
          }}
        />
        <button type="submit">Create Pet</button>
      </div>
    </>
  )
}
