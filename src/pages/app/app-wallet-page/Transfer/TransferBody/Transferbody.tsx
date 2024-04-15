import "./Transferbody.css";
import left from "../../../../../assets/images/left.png";
import Dropdown from "../../../../../components/Dropdown/Dropdown";
import Button from "../../../../../components/Button/Button";
import Polygon from "../../../../../assets/images/Polygon 1.svg";


const Transferbody = () => {
    return (
        <>
            <div className="transferBody">
                <div className="top">
                    <img src={left} />
                    <p className="orders">Fund</p>
                </div>

                <div className="transferBodyWrapper">
                    <div className="transferToWallet">
                        <p>Transfer to another wallet</p>
                        <Dropdown title="USDT" width="widthNormal" list={["UDST", "BTC", "ETH", "LTC", "SOL", "XPR"]} />
                    </div>
                    <div className="transactionInput">
                        <label htmlFor="walletAddress">Wallet Address</label>
                        <div className="transferinput">
                        <input type="text" name="walletAddress" />
                        <p>Paste</p>
                        </div>
                    </div>
                    <div className="transactionInput">
                        <label htmlFor="network">Network</label>
                        <div className="networkWrapper">
                        <p>Network</p> 
                        <img src={Polygon}/>
                        </div>
                    </div>
                    <div className="transactionInput">
                        <label htmlFor="amount">Amount</label>
                        <div className="transferinput">
                        <input type="number" name="amount" />
                        <span><p>USDT</p></span>
                        </div>
                        <p className="transferBalance">Balance: 23.67 USDT</p>
                    </div>
                    <Button text="Transfer" color="green" type="large2" route="" />
                </div>

            </div>
        </>
    )
}

export default Transferbody
