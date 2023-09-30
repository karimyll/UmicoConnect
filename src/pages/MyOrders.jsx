import React from 'react'
import Navbar from '../components/Navbar'
import BackIcon from '../../assets/img/back.svg'
import NoUserImage from '../../assets/img/no-user-icon.jpg'

const MyOrders = () => {
  return (
    <div className="myorders">
        <div className="header">
            <img src={BackIcon} alt="" />
            <h5>My Orders</h5>
            <img src={NoUserImage} alt="" className="pp" />
        </div>
        <Navbar />
    </div>
  )
}

export default MyOrders