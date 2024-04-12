import "./AppPitchBody.css";
import left from '../../../../../assets/images/left.png';
import Dropdown from "../../../../../components/Dropdown/Dropdown";
import naira from "../../../../../assets/images/naira.png";
import cart from "../../../../../assets/images/cart.svg";

const AppPitchBody = () => {
    return (
        <>
            <div className="pitchBody">
                <div className="top">
                    <img src={left} />
                    <p className='pitch'>Pitch</p>
                </div>
                <div className="pitchDropdown">
                    <Dropdown title="USDT" width="widthNormal" list={["UDST", "BTC", "ETH", "LTC", "SOL", "XPR"]} />
                    <Dropdown title="Trade type" width="widthLarge" list={["By fiat"]} />
                </div>

                <div className="pitchCard">
                    <div className="cart">
                        <p><img src={naira} alt="" />1,430.00</p>
                        <img src={cart} alt="" />

                    </div>
                    <div className="total">
                        <p className="totalcrypto"> Total crypto amount</p>
                        <p className="cryptoAmt">240 USDT</p>
                    </div>
                    <div className="range">
                        <p className="title">Range</p>
                        <p className="rangeAmount"><img src={naira}/>100,000.00 - <img src={naira}/>367,200.00</p>
                    </div>
                    <div className="editBtn">
                        <button>Edit</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AppPitchBody
