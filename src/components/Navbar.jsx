import React from 'react'
import HomeIcon from '../assets/img/home.svg'
import RankingIcon from '../assets/img/ranking.svg'
import MyOrdersIcon from '../assets/img/myorders.svg'
import ProfileIcon from '../assets/img/profile.svg'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navbar">
      <NavLink to='/home' activeClassName='active'>
        <img src={HomeIcon} alt="" />
        <p>Home</p>
      </NavLink>
      <NavLink to='/ranking' activeClassName='active'>
        <img src={RankingIcon} alt="" />
        <p>Ranking</p>
      </NavLink>
      <NavLink to='/myorders' activeClassName='active'>
        <img src={MyOrdersIcon} alt="" />
        <p>My Orders</p>
      </NavLink>
      <NavLink to='/myprofile' activeClassName='active'>
        <img src={ProfileIcon} alt="" />
        <p>Profile</p>
      </NavLink>

    </div>
  )
}

export default Navbar