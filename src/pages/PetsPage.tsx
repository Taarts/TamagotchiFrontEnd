import React from 'react'
import { useParams } from 'react-router'

export function PetDetails() {
  const params = useParams<{ id: string }>()
  return <p>This is pet {params.id}</p>
}
