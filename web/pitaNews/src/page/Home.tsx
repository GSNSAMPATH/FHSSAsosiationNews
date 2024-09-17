import React from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from '../Authotication/firebase'
import { onAuthStateChanged } from 'firebase/auth'
import Flower from '../components/background'
import Navbar from '../routs/Navebar'

export default function Home() {
  const navigate = useNavigate()

  onAuthStateChanged(auth, (user) => {
    if (!user) {
      
    }
  })

  return (
    <>
    <Navbar />
    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: '20px', padding: '20px' }}>
    
  
    <Flower />
    </div>
    </>
  )
}
