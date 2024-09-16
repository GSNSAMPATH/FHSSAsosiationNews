import React from 'react'

import { auth, db } from '../Authotication/firebase'
import { Navigate, useNavigate } from 'react-router-dom'
import { useUser } from '../components/UserContext'
import Navbar from '../routs/Navebar'





const Admin = ( ) => {
    const navigate = useNavigate()
    const user = useUser()


    const handleLogout = async () => {
        await auth.signOut()
        navigate('/')
    }



 


    return (
      <div>
            <h1>Admin Page</h1>
            <p>Welcome, {user?.user?.username}</p>
            {/* <button onClick={handleLogout}>Logout</button> */}
            <hr />
            <h2>Posts</h2>
            <ul>
                <li>Post 1</li>
                <li>Post 2</li>
                <li>Post 3</li>
            </ul>
        </div>
    )
}

export default Admin
