import React from 'react'
import Logo from '../../assets/img/Umicoconnect.svg'
import UmiconHello from '../../assets/img/Umicon_Hello.svg'
import { Link } from 'react-router-dom'

const Step1 = () => {
  return (
    <div className="step1">
      <div className="top">
        <img src={Logo} alt="" />
        <p>Shop, Share, Earn!</p>
      </div>
      <div className="maskot">
        <img src={UmiconHello} alt="" />
      </div>
      <div className="bottom">
        <Link to="/login/step2">
          <button className="button1">Let`s Start</button>
        </Link>
      </div>
    </div>
  )
}

export default Step1