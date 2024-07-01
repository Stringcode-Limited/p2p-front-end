import "./CryptoReleasedBody.css";
import left from "../../../../../assets/images/left.png";
import Button from "../../../../../components/Button/Button";
import tick from '../../../../../assets/images/tick.svg'

function CryptoReleasedBody() {
  return (
    <>
      <div className="cryptoReleasedBody">
        <div className="top">
          <img src={left} />
          <p className="orders">Make payment</p>
        </div>
        <div className="center">
          <div className="det1">
            <img src={tick}/>
            <p>Your crypto has been delivered to your wallet</p>
          </div>
          <div className="det2">
            <Button text="Check wallet" type="large2" route="/app/wallet"/>
            <Button text="Provide feedback" type="large2" color="grey"/>
          </div>
        </div>
      </div>
    </>
  );
}

export default CryptoReleasedBody;
