import React from 'react'
import Logo from '../assets/img/Umicoconnect.svg'
import NotificationIcon from '../assets/img/notification.svg'
import CoinIcon from '../assets/img/coin.svg'
import UsageIcon from '../assets/img/usage.svg'
import CopyIcon from '../assets/img/copy.svg'
import Cupon1 from '../assets/img/cupon1.svg'
import Navbar from '../components/Navbar'
import { useState } from 'react'
import { Toaster, toast } from 'react-hot-toast'



const Home = () => {

  const [promoCode, setPromoCode] = useState('');
  const name = "Umicorns";

  const [promoCodes, setPromoCodes] = useState([
    {
      id: 1,
      code: 'UMICORNSXA20',
      date: '12.05.2023'
    },
    {
      id: 2,
      code: 'UMICORNSXB20',
      date: '17.08.2023'
    }
  ])


  const generator = (name) => {
    const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    const code = name.toUpperCase() + letters[Math.floor(Math.random() * letters.length)] + letters[Math.floor(Math.random() * letters.length)] + '20';
    setPromoCode(code);
    //add to state
    const todayDate = new Date();
    const date = todayDate.getDate() + '.' + (todayDate.getMonth() + 1) + '.' + todayDate.getFullYear();
    const newPromoCode = {
      id: promoCodes.length + 1,
      code: code,
      date: date
    }
    setPromoCodes([...promoCodes, newPromoCode]);
    toast.success('Promo Code Generated and Copied Successfully');
    navigator.clipboard.writeText(code);
    return code;
  }

  const copyCode = (code) => {
    navigator.clipboard.writeText(code);
    toast.success('Promo Code Copied Successfully');
  }

  return (
    <div className="home">
      <Toaster />
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
          <h4>Your Points</h4>
        </div>
        <div className="right-side-point">
          <h3>200
            <img src={CoinIcon} alt="" /></h3>
          <p>= 20 Bonus</p>
        </div>
      </div>
      <div className="analytic">
        <div className="top">
          <p>108 people used your promo codes</p>
          <select name="" id="">
            <option value="">Monthly</option>
            <option value="">Weekly</option>
            <option value="">Yearly</option>
          </select>
        </div>
        <div className="charts">
          <div className="chart">
            <div className="bar" style={{ height: '50px' }}></div>
            <p>Apr</p>
          </div>
          <div className="chart">
            <div className="bar" style={{ height: '60px' }}></div>
            <p>May</p>
          </div>
          <div className="chart">
            <div className="bar" style={{ height: '70px' }}></div>
            <p>Jun</p>
          </div>
          <div className="chart">
            <div className="bar" style={{ height: '40px' }}></div>
            <p>Jul</p>
          </div>
          <div className="chart">
            <div className="bar" style={{ height: '80px' }}></div>
            <p>Aug</p>
          </div>
          <div className="chart">
            <div className="bar active" style={{ height: '70px' }}></div>
            <p>Sep</p>
          </div>
        </div>
      </div>
      <div className="generator">
        <h2>Generate Promo Code</h2>
        <input type="text" disabled value={promoCode} placeholder='YOURPROMOCODEHERE' />
        <button onClick={() => generator(name)} >Generate</button>
      </div>
      <div className="promocodes">
        <h2>Your Promo Codes for <span>This Month</span></h2>
        <div className="codelist">
          {promoCodes
            .sort((a, b) => b.id - a.id)
            .map((promoCode) => (
              <div className="ticket" key={promoCode.id}>
                <div className="top">
                  <h3>{promoCode.code}</h3>
                  <div className="copy" onClick={() => copyCode(promoCode.code)}>
                    <img src={CopyIcon} alt="" />
                    <p>Copy</p>
                  </div>

                </div>
                <p className="title">
                  20% off on all products
                </p>
                <hr />
                <div className="bottom">
                  <h3 className="usage">
                    32 people used this promo code
                  </h3>
                  <div className="expire">
                    <p>Valid on these dates</p>
                    <p className="date">{promoCode.date}</p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
      <br /><br />
      <br /><br />
      <Navbar />
    </div>
  )
}

export default Home