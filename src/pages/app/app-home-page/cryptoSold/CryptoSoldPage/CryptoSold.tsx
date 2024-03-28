import "./cryptoSold.css";
import Chat from "../../Chat/Chat";
import CryptoSoldBody from "../CryptoSoldBody/CryptoSoldBody";

const CryptoSold = () => {
  return (
    <>
    <div className="cryptoSoldPage">
      <CryptoSoldBody/>
      <Chat label="You have sucessfully sold" time="50 usdt" type="amountsold" timertype="amountsold" displayimage="hide"/>
    </div>
    </>
  )
}

export default CryptoSold
