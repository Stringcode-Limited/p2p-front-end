import "./VerifyWithPinBody.css";
import left from "../../../../../assets/images/left.png";
import Dropdown from "../../../../../components/Dropdown/Dropdown";
import Button from "../../../../../components/Button/Button";

const VerifyWithPinBody = () => {
  return (
    <>
      <div className="verifyPinBody">
        <div className="top">
          <img src={left} />
          <p className="orders">Fund</p>
        </div>

        <div className="transferWalletWrapper">
          <div className="transferToWallet">
          <p>Transfer to another wallet</p>
          <Dropdown title="USDT" width="widthNormal" list={["UDST", "BTC", "ETH", "LTC", "SOL", "XPR"]} />
          </div>
          <div className="transactionInput">
            <label htmlFor="transaction pin">Transaction pin</label>
            <input type="number" name="transactionpin" />
          </div>
          <Button text="Confirm" color="green" type="large2" route="" />
        </div>
      </div>
    </>
  )
}

export default VerifyWithPinBody
