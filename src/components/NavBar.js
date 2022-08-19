import React from 'react';
import {NavLink,Link} from 'react-router-dom';
import { useAuth } from './auth';

const NavBar = () => {
  const auth = useAuth()
  return (
    <div>
        <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/product">Product</Link>
        <Link to="/profile">Profile</Link>
        {!auth.user ? <Link to="/login">Login</Link>:null }
        </nav><br/>
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/product">Product</NavLink>
        </nav>
    </div>
  )
}

export default NavBar