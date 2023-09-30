import React from 'react'
import HomeIcon from '../assets/img/home.svg'
import 
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navbar">
      <NavLink to='/home' activeClassName='active'>
        <img src={HomeIcon} alt="" />
      </NavLink>
    </div>
  )
}

export default Navbar