
import "./BuyusdtBody.css"
import left from "../../../../../assets/images/left.png"
import naira from "../../../../../assets/images/naira.png"
import Button from '../../../../../components/Button/Button';
import timer from "../../../../../assets/images/timer.png"
import badge from "../../../../../assets/images/badge2.svg"
import doe from "../../../../../assets/images/doe.png"
import Fiat from '../../../../../components/Fiat/Fiat';

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
            </div>




           </div>

  );
}

export default BuyusdtBody;
