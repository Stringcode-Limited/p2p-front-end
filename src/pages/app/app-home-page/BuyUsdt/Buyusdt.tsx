import "./Buyusdt.css"
import left from "../../../../assets/images/left.png"
import OrderCard from "../../../../components/OrderCard/OrderCard";
import pays from "../../../../assets/images/pays.png"
import Buyudstbtn from "./Buyudstbtn";
import timer from "../../../../assets/images/timer.png"
import doe from "../../../../assets/images/doe.png"
import badge from "../../../../assets/images/badge.png"
import RecentOrders from "../recentOrders/RecentOrders";
import Fiat from "../../../../components/Fiat/Fiat";
import Button from "../../../../components/Button/Button";




function Buyusdt() {
  return (
    <div className='usdt-info'>
        <div className="jr-usdt">
            <div className="middle-section">
             <div className="left">
            <div className="dt-icon">
             <img src={left} alt="" />
             </div>
             <div className="dt">
             <h3>Buy USDT</h3>
             </div>
             </div>
            </div>
            <div className="hero-frame">
                <div className="figure-frame">
                    <div className="inner-container">
                        <div className="fig-bold">
                            <div className="wrapps">
                            <div className="fig-amount">
                                <h1>1,430.00</h1>
                            </div>
                            <div className="ud-label">
                                <Fiat/>
                            </div>
                            </div>
                            <div className="entering-filed">
                            <div className="input-field">
                              <input type="text" placeholder="# Enter Amount" />
                            </div>
                            <div className="amount">
                                <p className="figs">Range #100,000.00 - #367,200.00</p>
                            </div>
                            <div className="pays">
                                <div className="paying">
                                <p className="pying">You will pay</p>
                                <p className="pying">-- NGN</p>
                                </div>
                                <div className="paying">
                                <p className="pying">You will pay</p>
                                <p className="pying">-- USDT</p>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                   
                </div>
                <div className="btn">
                        <Button text="BUY USDT" type="large" route="/app/orderCreated"/>
                    </div>
            </div>
            <div className="davwrapper">
                <div className="details">
                        <div className="comments">
                        <div className="det">
                            <h3>Ad Details</h3>
                            </div>
                            <p className="comm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                        <div className="timer">
                            <div className="time"><img src={timer} alt="" /></div>
                            <p className="com">10 mins</p>
                        </div>
                </div>
                <div className="seller-profile">
                    <div className="sel-prof">
                        <h4>Seller`s Profile</h4>
                    </div>
                    <div className="se-img">
                        <div className="doe-wrapper">
                        <img src={doe} alt="" />
                        </div>
                        <div className="nam-wrapper">
                            <div className="name-wrapper">
                            <h4 className="jh">JohnDoe</h4>
                            <div className="badge">
                                <img className="dge" src={badge} alt="" />
                                </div>
                            </div>
                            <div className="at-name">
                                <p className="doe">@Doemoney</p>
                            </div>
                        </div>
                    </div>
                      
                    <div className="tim">
                            <div className="time"><img src={timer} alt="" /></div>
                            <p className="com">10 mins</p>
                        </div>
                    </div>
                    </div>
                    <div className="reviews">
                        <div className="review-caption">
                            <h3 className="rev">Reviews & ratings</h3>
                        </div>
                        <div className="write-ups">
                            <p className="rev-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolorin reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident,sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
                </div>
                <div className="recent-orders">
                    <div className="inner-order">
                         <RecentOrders /> 
                    </div>
                </div>
           </div>
       
    
  );
}

export default Buyusdt;
