import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from '../Authotication/firebase'
import { onAuthStateChanged } from 'firebase/auth'
import Flower from '../components/background'
import Navbar from '../routs/Navebar'
import { getNews, getPoster } from '../helpers/Api'

export default function Home() {
  const navigate = useNavigate()

  onAuthStateChanged(auth, (user) => {
    if (!user) {
      
    }


  })

  useEffect(() => {
    getPoster()
      .then((data) => {
        console.log(data)
      }) 
  }, [])

  useEffect(() => {
    getNews()
      .then((data) => {
        console.log(data)
      })

  }, [])  

  return (
    <><Navbar />
    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: '20px', padding: '20px' }}>
    
  
          <Flower />
      </div></>
  )
}
