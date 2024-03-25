import React from 'react';
import "./Buyusdt.css"
import P2Papp from '../../../../components/P2Papp/P2Papp';
import opposite from "../BuyUsdt/img/opposite.png"
import order from "../BuyUsdt/img/order.png"
import pitch from "../BuyUsdt/img/pitch.png"
import wallet from "../BuyUsdt/img/wallet.png"
import profile from "../BuyUsdt/img/profile.png"
import signout from "../BuyUsdt/img/signout.png"
import buy from "../BuyUsdt/img/buy.png"






function Buyusdt() {
  return (
    <div className='usdt-info'>
        <div className="info-section">
            <div className="sidebar">
                <div className="log">
                    <P2Papp />
                </div>
                <div className="icons-unit">
                    <div className="opposite-face">
                        <img src={opposite}alt="" />
                    </div>
                    <div className="opposite-face">
                        <img src={order}alt="" />
                    </div>
                    <div className="opposite-face">
                        <img src={pitch}alt="" />
                    </div>
                    <div className="opposite-face">
                        <img src={wallet}alt="" />
                    </div>
                    <div className="opposite-face">
                        <img src={profile}alt="" />
                    </div>
                    <div className="opposite-face">
                        <img src={signout}alt="" />
                    </div>
                    
                </div>
            </div>
            <div className="middle-section">
                <div className="usdt">
                    <img src={buy} alt="" />
                </div>
            </div>
            <div className="sidebar-right">
                <div className="log">
                    <P2Papp />
                </div>
                <div className="icons-unit-right">
                    <div className="opposite-face">
                        <img src={opposite}alt="" />
                    </div>
                    <div className="opposite-face">
                        <img src={order}alt="" />
                    </div>
                    <div className="opposite-face">
                        <img src={pitch}alt="" />
                    </div>
                    <div className="opposite-face">
                        <img src={wallet}alt="" />
                    </div>
                    <div className="opposite-face">
                        <img src={profile}alt="" />
                    </div>
                    <div className="opposite-face">
                        <img src={signout}alt="" />
                    </div>
                    
                </div>
            </div>
        </div>

        
    </div>
  );
}

export default Buyusdt;
