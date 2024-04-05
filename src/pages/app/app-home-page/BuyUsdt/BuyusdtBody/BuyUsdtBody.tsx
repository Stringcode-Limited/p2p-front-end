
import "./BuyusdtBody.css"
import left from "../../../../../assets/images/left.png"
import naira from "../../../../../assets/images/naira.png"
import Button from '../../../../../components/Button/Button';
import timer from "../../../../../assets/images/timer.png"
import badge from "../../../../../assets/images/badge2.svg"
import doe from "../../../../../assets/images/doe.png"
import Fiat from '../../../../../components/Fiat/Fiat';
import clock from "../../../../../assets/images/clock.svg"

function BuyusdtBody() {
  return (
       <div className='usdt-info'>
            <div className="top">
                <img src={left} alt="" />
                <p className="buy-usdt-text">Buy USDT</p>
            </div>
            <div className="usdt-info-container">
                <div className="usdt-info-top-container">
                    <div className="usdt-info-top-container1">
                    <div className="usdt-info-top-container2">
                    <div className="usdt-amount-container">
                        <div className="price-per-usdt">
                            <div className="naira-container">
                            <p className="usdt-unit-price"> <span className="naira-symbol1">₦</span> 1,430.00</p>
                            </div>
                            <div className="fiat">
                                <Fiat />
                            </div>
                        </div>
                        <div className="input-field">
                            <div className="input-field-container">
                                <span className="naira-symbol2">₦</span>
                            <input type="text"  placeholder="Enter Amount"/>
                                <p className="input-letter">All</p>
                            </div>
                            <div className="usdt-amount-range">
                            <p className="range-text">Range<span className=""> ₦</span>100,000.00 - <span>₦</span>367,200.00</p>
                            </div>
                        </div>
                    </div>
                       <div className="you-will-pay">
                            <div className="pay1">
                                <p className="pay">You will pay</p>
                                <p className="pay">--NGN</p>
                            </div>
                        <div className="receive1">
                                <p className="receive">You will receive</p>
                                <p className="receive">--USDT</p>
                         </div>
                       </div>
                    </div>
                       <div className="buy-usdt-btn">
                        <Button  type="large" text="BUY USDT"/>
                       </div>
                    </div>
                </div>
                <div className="ad-details">
                    <div className="ad-text">Ad details</div>
                    <div className="ad-details-text-container">
                        <p className="details-statement">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                      <div className="clock">
                        <img src={clock} alt="" />
                        <p className="ten-minute">10 mins</p>
                      </div>
                      <div className="dividing-line">
                        
                      </div>
                </div>
                <div className="john-doe-container">
                    <div className="seller">
                        <p className="sell-profile">Seller`s Profile</p>
                    </div>
                    <div className="jhn-doe-img">
                        <img  src={doe} alt="" />
                        <div className="badge">
                            <div className="badge2">
                                <div className="badge3">
                                <p className="doee">John Doe</p>
                                </div>
                                <div className="badge4">
                                <img className="does-badge" src={badge} alt="" />
                                </div>
                               
                            </div>
                            <p className="doemoney">@Doemoney</p>
                        </div>
                        
                    </div>
                    <div className="clock2">
                        <img src={clock} alt="" />
                        <p className="ten-minute">10 mins</p>
                      </div>

                    
                </div>
                <div className="dividing-line"></div>

                <div className="review-container">
                    <div className="review-statement">
                        <p className="reviews">Reviews & ratings</p>
                    </div>
                    <div className="review-comments">
                        <p className="comments">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>

            </div>
           </div>
  );
}

export default BuyusdtBody;
