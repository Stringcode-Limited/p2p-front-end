import Dropdown from "../../../../../components/Dropdown/Dropdown";
import Sell from "../../../../../components/Sell/Sell";
import "./P2PSellBody.css";
import filter from '../../../../../assets/images/filter.svg'
import bell from '../../../../../assets/images/bell.svg'
import TraderCard from "../../../../../components/TraderCard/TraderCard";
import JohnDoe from '../../../../../assets/JohnDoe.png'
import KemiFemi from '../../../../../assets/KemiFemi.png'

function P2PSellBody() {
  return (
    <>
      <div className="p2pSellBody">
        <div className="top">
          <div className="title">P2P</div>
          <div className="body">
            <div className="left">
              <Sell />
            </div>
            <div className="right">
              <Dropdown
                list={["UDST", "BTC", "ETH", "LTC", "SOL", "XPR"]}
                title="USDT"
              />
              <Dropdown
                list={["NGN", "USD", "GHC", "EUR", "JPY", "GBP"]}
                title="NGN"
              />
              <img src={filter}/>
              <img src={bell}/>
            </div>
          </div>
        </div>
        <div className="center">
        <TraderCard buttonText={"SELL"} buttonColor={"red"} image={JohnDoe} fullName={"John Doe"} name={"Doemoney"} tradeTotal={"4,460"} tradePercent={"96.00"} time={10} percent={"97.30"} amount={"1,430.00"} cryptoAmount={240} range1={"100,000.00"} range2={"367,200.00"} route="/app/buyUSDT"/>
          <TraderCard buttonText={"SELL"} buttonColor={"red"} image={KemiFemi} fullName={"Kemi Femi"} name={"KemsFems"} tradeTotal={"4,460"} tradePercent={"96.00"} time={10} percent={"97.30"} amount={"1,430.00"} cryptoAmount={240} range1={"100,000.00"} range2={"367,200.00"} />
          <TraderCard buttonText={"SELL"} buttonColor={"red"} image={KemiFemi} fullName={"John Doe"} name={"Doemoney"} tradeTotal={"4,460"} tradePercent={"96.00"} time={10} percent={"97.30"} amount={"1,430.00"} cryptoAmount={240} range1={"100,000.00"} range2={"367,200.00"} />
          <TraderCard buttonText={"SELL"} buttonColor={"red"} image={KemiFemi} fullName={"John Doe"} name={"Doemoney"} tradeTotal={"4,460"} tradePercent={"96.00"} time={10} percent={"97.30"} amount={"1,430.00"} cryptoAmount={240} range1={"100,000.00"} range2={"367,200.00"} />
          <TraderCard buttonText={"SELL"} buttonColor={"red"} image={KemiFemi} fullName={"John Doe"} name={"Doemoney"} tradeTotal={"4,460"} tradePercent={"96.00"} time={10} percent={"97.30"} amount={"1,430.00"} cryptoAmount={240} range1={"100,000.00"} range2={"367,200.00"} />
          <TraderCard buttonText={"SELL"} buttonColor={"red"} image={KemiFemi} fullName={"John Doe"} name={"Doemoney"} tradeTotal={"4,460"} tradePercent={"96.00"} time={10} percent={"97.30"} amount={"1,430.00"} cryptoAmount={240} range1={"100,000.00"} range2={"367,200.00"} />
        </div>
      </div>
    </>
  );
}

export default P2PSellBody;
