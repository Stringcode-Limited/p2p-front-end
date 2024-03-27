import "./CryptoSoldBody.css";
import left from "../../../../../assets/images/left.png";
import Button from "../../../../../components/Button/Button";
import tick from '../../../../../assets/images/tick.svg'

const CryptoSoldBody = () => {
    return (
        <>
          <div className="cryptoReleasedBody">
            <div className="top">
              <img src={left} />
              <p className="orders">Crypto sold</p>
            </div>
            <div className="center">
              <div className="det1">
                <img src={tick}/>
                <p>You have successfully sold 50 USDT</p>
              </div>
              <div className="det2">
                <Button text="Check wallet" type="large2"/>
                <Button text="Provide feedback" type="large2" color="grey"/>
              </div>
            </div>
          </div>
        </>
      );
}

export default CryptoSoldBody
