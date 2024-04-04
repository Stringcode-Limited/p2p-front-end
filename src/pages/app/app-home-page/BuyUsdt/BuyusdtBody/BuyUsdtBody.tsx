
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
                <p className="buy-usdt-text">BUY USDT</p>
            </div>
            <div className="usdt-info-container">
                <div className="usdt-info-top-container">
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
                           
                            <p>Range: <img src={naira} alt="" />100,000.00 - <img src={naira} alt="" />367,200.00</p>
                        </div>
                    </div>
                </div>
            </div>




           </div>

  );
}

export default BuyusdtBody;
