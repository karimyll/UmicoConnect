import React from 'react'
import Logo from '../../assets/img/Umicoconnect.svg'
import BackIcon from '../../assets/img/back.svg'
import { Link } from 'react-router-dom'
import email from '../../assets/img/email.svg'
import password from '../../assets/img/password.svg'

const Step2 = () => {
  return (
    <div className="step2">
      <div className="top">
        <Link to="/login/step/1">
          <img src={BackIcon} alt="" className='icon' />
        </Link>
        <img src={Logo} alt="" />
      </div>
      <div className="text1">
        <h2>Welcome back!</h2>
        <p>Enter your details or continue via social media.</p>
      </div>
      <div className="form">
        <div className="inputs">
          <div className="icon">
          <img src={email} alt="" />
          </div>
          <input type="text" name="" value="umicorns@gmail.com" id="" placeholder='Email' />
        </div>
        <div className="inputs">
          <div className="icon">
          <img src={password} alt="" />
          </div>
          <input type="password" name="" value="umicorns" id="" placeholder='Password' />
        </div>
        <Link to="/home">
          <button className="button1">Login</button>
        </Link>
      </div>
      <div className="bottom">
        <h5>Forgot your password?</h5>
        <p>Don't have an active account? <span>Registration</span></p>
      </div>
    </div>
  )
}

export default Step2