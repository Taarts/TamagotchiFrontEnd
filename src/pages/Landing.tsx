import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import { PetType } from '../App'

export function Landing() {
  const [petsGet, setPetsGet] = useState<PetType[]>([])
  const [newPetName, setNewPetName] = useState('')

  const params = useParams<{ id: string }>()
  console.log(params)

  function getAllPets() {
    async function fetchPets() {
      const response = await axios.get('http://localhost:5000/api/Pets')

      if (response.status === 200) {
        setPetsGet(response.data)
        console.log(response.data)
      }
    }
    fetchPets()
  }

  async function handleCreatePet() {
    console.log('hello?')
    const response = await axios.post('http://localhost:5000/api/Pets', {
      name: newPetName,
    })
    if (response.status === 201) {
      getAllPets()
      setNewPetName('')
    }
  }
  useEffect(getAllPets, [])
  console.log('getAllPets', getAllPets)
  console.log('petsGet', petsGet)

  return (
    <>
      <div>
        <section className="wrapper">
          <h2>Landing Page</h2>
          <section className="form-section">
            <form
              onSubmit={function (event) {
                event.preventDefault()
                handleCreatePet()
              }}
            >
              <input
                type="text"
                placeholder="Enter your new pets name"
                value={newPetName}
                onChange={function (event) {
                  setNewPetName(event.target.value)
                }}
              />{' '}
            </form>
            <article>
              {petsGet
                .sort((a, b) => (a.birthday < b.birthday ? 1 : 0))
                .map(function (petsGet) {
                  return (
                    <ul key={petsGet.id}>
                      <Link to={`./Pets/${petsGet.id}`}>
                        <li className="name-text">{petsGet.name}</li>
                      </Link>
                      <li className="text-details">
                        Birthday:{' '}
                        {new Date(petsGet.birthday).toLocaleDateString()}
                      </li>
                      <li className="text-details">
                        Hunger Level: {petsGet.hungerLevel}
                      </li>
                      <li className="text-details">
                        Happiness Level: {petsGet.happinessLevel}
                      </li>
                    </ul>
                  )
                })}
            </article>
            {/* <button type="submit">Create Pet</button> */}
          </section>
        </section>
      </div>
    </>
  )
}
