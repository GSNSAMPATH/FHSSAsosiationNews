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
      navigate('/SignIn')
    }
  })

  return (
    <><Navbar />
    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: '20px', padding: '20px' }}>

          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <h1 style={{ textAlign: 'left', fontSize: '100px' }}>Welcome to </h1>
              <h1 style={{ textAlign: 'left', fontSize: '50px' }}>Pita News</h1>
              <button onClick={() => navigate('/Post')} style={{ backgroundColor: 'blue', color: 'white', padding: '10px 20px', borderRadius: '5px', marginTop: '20px', cursor: 'pointer', width: '200px' }}>New Post</button>
          </div>
          <Flower />
      </div></>
  )
}
