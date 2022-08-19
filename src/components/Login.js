import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from './auth'

const Login = () => {
    const navigate = useNavigate()
    const auth = useAuth()
    const [text,setText] = useState('')
    const loginUser = () => {
        auth.login(text)
        navigate('/')
    }
  return (
    <div>
        <input type="text" value={text} onChange={(e)=>setText(e.target.value)}/>
        <button onClick={()=>loginUser()}>Login</button>
        

    </div>
  )
}

export default Login