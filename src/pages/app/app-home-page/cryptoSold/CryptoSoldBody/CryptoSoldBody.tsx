import "./CryptoSoldBody.css";
import left from "../../../../../assets/images/left.png";
import Button from "../../../../../components/Button/Button";
import tick from '../../../../../assets/images/tick.svg'
import OpenChat from "../../../../../components/OpenChat/OpenChat";

const CryptoSoldBody = () => {
  return (
    <>
      <div className="cryptoSoldBody">
        <div className="top">
          <img src={left} />
          <p className="orders">Crypto sold</p>
        </div>
        <div className="center">
          <div className="det1">
            <img src={tick} />
            <p>You have successfully sold 50 USDT</p>
          </div>
          <div className="det2">
            <Button text="Check wallet" type="large" />
            <div className="displayEffect">
            <Button text="Provide feedback" type="large" color="grey" />
            </div>
            <div className="feedbackChat">
              <Button text="Feedback" type="large5" color="grey" />
              <div className="open">
                <OpenChat classes="btn grey large5 OpenButton" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CryptoSoldBody
