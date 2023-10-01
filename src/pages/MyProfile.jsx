import React from 'react'
import BackIcon from '../../src/assets/img/back.svg';
import Navbar from '../components/Navbar';
import CoinIcon from '../../src/assets/img/coin2.svg';
import WalletIcon from '../../src/assets/img/wallet.svg';
import MoreIcon from '../../src/assets/img/more.svg';
import { useState } from 'react';

const MyProfile = () => {
    const [selectedButton, setSelectedButton] = useState("month");

    // Function to handle button click and update selectedButton state
    const handleButtonClick = (buttonName) => {
        setSelectedButton(buttonName);
    };
    const ppUrl = "https://img.imgyukle.com/2023/09/30/rAJNjP.jpeg";
  return (
    <div className="myprofile">
        <div className="header">
                <img src={BackIcon} alt="" />
                <h5>My Profile</h5>
                <img src={ppUrl} alt="" className="pp" />
            </div>
            <div className="top">
                    <div className="top-sec">
                        <h2>Your Points</h2>
                        <div className="points">
                           <div className="point"> <img src={CoinIcon} alt="" /> <h1>550</h1></div>
                            <p>= 40 Bonus</p>
                        </div>
                    </div>
                    <div className="bottom">
                        <div className="button">
                            <img src={WalletIcon} alt="" />
                            <p>Wallet</p>
                        </div>
                        <div className="button">
                            <img src={MoreIcon} alt="" />
                            <p>More</p>
                        </div>
                    </div>
            </div>
            <div className="main">
                <h2>Points</h2>
                <div className="switch-div">
                {/* Buttons to toggle between shared and all products */}
                <button
                    name="month"
                    className={selectedButton === "month" ? 'active' : ''}
                    onClick={() => handleButtonClick("month")}
                >
                    This month
                </button>
                <button
                    name="history"
                    className={selectedButton === "history" ? 'active' : ''}
                    onClick={() => handleButtonClick("history")}
                >
                    History
                </button>
            </div>

                <div className="history">
                    <div className="item">
                        <div className="left">
                        <div className="img" style={{backgroundColor: '#714EF0'}}></div>
                        <div className="text">
                            <h4>Clothing and Shoes</h4>
                            <p>30 Sent 2023</p>
                        </div>
                        </div>
                        <h2>+30Pts</h2>
                    </div>
                    <div className="item">
                        <div className="left">
                        <div className="img" style={{backgroundColor: '#C3CAF4'}}></div>
                        <div className="text">
                            <h4>Phone and Accessories</h4>
                            <p>29 Sent 2023</p>
                        </div>
                        </div>
                        <h2>+30Pts</h2>
                    </div>
                    <div className="item">
                        <div className="left">
                        <div className="img" style={{backgroundColor: '#FF4B81'}}></div>
                        <div className="text">
                            <h4>Household Appliances</h4>
                            <p>28 Sent 2023</p>
                        </div>
                        </div>
                        <h2>+30Pts</h2>
                    </div>
                </div>
            </div>
<br />
<br />
<br />

            <Navbar />
    </div>
  )
}

export default MyProfile
