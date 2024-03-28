import "./appWalletBody.css";
import left from '../../../../assets/images/left.png';
import Assets from "../../../../components/Assets/Assets";
import Arrowdown from "../../../../assets/images/arrowdown.jpg";
import Transfer from "../../../../assets/images/transfers.png";
import Fund from "../../../../assets/images/funds.png";
import Tether from "../../../../assets/images/tether-usdt.png";
import BTC from "../../../../assets/images/bitcoin-btc.png";
import ETH from "../../../../assets/images/eth.png";
import Matic from "../../../../assets/images/matic.png";
import BNB from "../../../../assets/images/bnb-bnb.png";
import LTC from "../../../../assets/images/litecoin-ltc.png";


const AppWalletBody = () => {
  return (
    <>
      <div className="walletBody">
        <div className="top">
          <img src={left} />
          <p className='wallet'>Wallet</p>
        </div>

        <div className="walletContent">
          <div className="walletCard">
            <p className="total">Total balance</p>
            <p className="amount">$31.56</p>
            <div className="usd">
              <p>USD</p>
              <img src={Arrowdown} alt="" />
            </div>
            <div className="transactions">
              <div>
                <img src={Fund} alt="" />
                <p>Fund</p>
              </div>
              <div>
                <img src={Transfer} alt="" />
                <p>Transfer</p>
              </div>
            </div>
          </div>
        </div>
        <div className="cryptoAssets">
          <p>Crypto assets</p>
        </div>
        <div className="walletContent">
          <Assets image={Tether} name="USDT" rightPrice="23.67" leftPrice="1" percent="0.00" quantity={23.67} color="G" />
          <Assets image={BTC} name="BTC" rightPrice="0.00015166126" leftPrice="52,023.83" percent="0.00" quantity={0.00015166126} color="R" />
          <Assets image={ETH} name="ETH" rightPrice="0" leftPrice="1" percent="2,810.94" quantity={0} color="R" />
          <Assets image={Matic} name="MATIC" rightPrice="0" leftPrice="1" percent="0.91" quantity={0} color="G" />
          <Assets image={BNB} name="BNB" rightPrice="0" leftPrice="1" percent="360.23" quantity={0} color="G" />
          <Assets image={LTC} name="LTC" rightPrice="0" leftPrice="1" percent="70.12" quantity={0} color="R" />
        </div>
        <div className="seeMore">
          <p>See more</p>
        </div>


      </div>
    </>
  )
}

export default AppWalletBody
