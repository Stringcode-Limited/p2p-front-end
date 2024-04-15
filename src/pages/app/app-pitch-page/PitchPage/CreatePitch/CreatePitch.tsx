import Buy from "../../../../../components/Buy/Buy";
import naira from "../../../../../assets/images/naira.png";
import PitchPrice from "../../../../../components/PitchPrice/PitchPrice";
import MiniInput from "../../../../../components/miniInput/MiniInput";
import "./CreatePitch.css";

interface Ipitchform{
    price:string
    display: "hide" | "show"
}


const CreatePitch = ({price, display}:Ipitchform) => {
    return (
        <>
            <div className="createPitchBody">
                <p>Create Pitch</p>
                <Buy />

                <div className="cryptoFiat">
                    <MiniInput label="Crypto" title="USDT" list={["UDST", "BTC", "ETH", "LTC", "SOL", "XPR"]} />
                    <MiniInput label="Fiat currency" title="NGN" list={["NGN", "USD", "EUR", "CAD", "AUD", "JPY"]} />
                </div>
                <PitchPrice label="Price" price="1,430" />
                <div className="lowestPrice">
                    <p className="low">{price}</p>
                    <p className="pricefig"><img src={naira} alt="" />1,500.00</p>
                </div>
                <div className="totalCrypto">
                    <label htmlFor="">Total crypto amount</label>
                    <input type="text" />
                    <p className="pitchAmt">= 30.00 NGN</p>
                    <p>Balance <span> 50 USDT</span></p>
                </div>

                <div className="range">
                    <label htmlFor="">Range</label>
                    <div className="rangeWrapper">
                        <div className="divWrapper">
                            <div className="divInput">
                                <input type="text" value="1000"/>
                                <p>NGN</p>
                            </div>
                            <p>= 30.00 USDT</p>
                        </div>
                        <div className="divWrapper">
                            <div className="divInput">
                                <input type="text" value="2000"/>
                                <p>NGN</p>
                            </div>
                            <p>= 30.00 UDST</p>
                        </div>
                    </div>

                </div>

                <div className={display}>
                    
                    <select name="" id="" className="selectOptions">
                        <option value="">Select a payment account</option>
                        <option value="">GTB</option>
                        <option value="">FCMB</option>
                        <option value="">ACCESS</option>
                        <option value="">UBA</option>
                        <option value="">WEMA</option>
                    </select>
                </div>

                <PitchPrice label="Payment time limit" price="5 mins" />

                <div className="fee">
                    <label htmlFor="">Fee</label>
                    <input type="text" value="0.01 USDT" />
                </div>
                <div>
                    <button className="confirm">Confirm</button>
                </div>
                <br />
            </div>
        </>
    )
}

export default CreatePitch;
