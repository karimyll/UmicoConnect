import React from 'react'
import Logo from '../assets/img/Umicoconnect.svg'
import NotificationIcon from '../assets/img/notification.svg'
import CoinIcon from '../assets/img/coin.svg'
import UsageIcon from '../assets/img/usage.svg'
import Cupon1 from '../assets/img/cupon1.svg'
import Cupon2 from '../assets/img/cupon2.svg'
import Cupon3 from '../assets/img/cupon3.svg'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <div className="home">
        <div className="header">
            <img src={Logo} alt="" />
            <img src={NotificationIcon} alt="" className='icon' />
        </div>
        <div className="greeting">
          <p>Hello, Umicorns!</p>
          <h2>Welcome Back!</h2>
        </div>
        <div className="point">
          <div className="left-side-point">
            <img src={CoinIcon} alt="" />
            <h4>Your Points</h4>
          </div>
          <div className="right-side-point">
            <h3>2000</h3>
            <p>20 AZN</p>
          </div>
        </div>
        <div className="analytic">
          <div className="box1">
            <div className="left-side">
              <img src={UsageIcon} alt="" />
            </div>
            <div className="right-side">
              <p>108 people used your promo codes</p>
            </div>
          </div>
          <div className="box2">
                <h5>Best Seller</h5>
                <p>Technology</p>
          </div>
        </div>
        <div className="promocodes">
          <h2>Your Promo Codes for <span>This Month</span></h2>
          <div className="codelist">
            <img src={Cupon1} alt="" />
            <img src={Cupon2} alt="" />
            <img src={Cupon3} alt="" />
          </div>
        </div>
        <Navbar />
    </div>
  )
}

export default Home