import React from 'react'
import { useAuth } from './auth'

const Profile = () => {
    const auth = useAuth()
  return (
    <div>
        <h1>Welcome {auth.user}</h1>
        <button onClick={()=>auth.logout()}>Logout</button>
    </div>
  )
}

export default Profile