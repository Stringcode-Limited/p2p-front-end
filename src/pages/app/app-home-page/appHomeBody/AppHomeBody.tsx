import { TraderCard } from "../../..";
import "./styles.css";
import JohnDoe from "./../../../../assets/JohnDoe.png"; 
import KemiFemi from "./../../../../assets/KemiFemi.png";
import Buy from "../../../../components/Buy/Buy";
import Dropdown from "../../../../components/Dropdown/Dropdown";
import { IoIosNotifications } from "react-icons/io";
import { HiFunnel } from "react-icons/hi2";


const AppHomeBody = () => {
  return (
    <div>
      <div className="bodyWrapper">
        <div className="bodyTop">
          <div className="dashboardTitle">P2P</div>
          <div className="bodyTopButtons">
            <div>
              <Buy />
            </div>
            <div className="dropdownLists">
              <div>
                <Dropdown list={['UDST', 'BTC', 'ETH', 'LTC', 'SOL', 'XPR']} title="USDT" />
              </div>
              <div>
                <Dropdown list={['NGN', 'USD', 'GHC', 'EUR', 'JPY', 'GBP']} title="NGN" />
              </div>
              <div>
                <HiFunnel />
              </div>

              <div>
                <IoIosNotifications />
              </div>
      
            </div>
          </div>
        </div>
        <div className="bodyContainer">
          <TraderCard buttonText={"BUY"} buttonColor={"green"} image={JohnDoe} fullName={"John Doe"} name={"Doemoney"} tradeTotal={"4,460"} tradePercent={"96.00"} time={10} percent={"97.30"} amount={"1,430.00"} cryptoAmount={240} range1={"100,000.00"} range2={"367,200.00"} />
          <TraderCard buttonText={"BUY"} buttonColor={"green"} image={KemiFemi} fullName={"Kemi Femi"} name={"KemsFems"} tradeTotal={"4,460"} tradePercent={"96.00"} time={10} percent={"97.30"} amount={"1,430.00"} cryptoAmount={240} range1={"100,000.00"} range2={"367,200.00"} />
          <TraderCard buttonText={"BUY"} buttonColor={"green"} image={KemiFemi} fullName={"John Doe"} name={"Doemoney"} tradeTotal={"4,460"} tradePercent={"96.00"} time={10} percent={"97.30"} amount={"1,430.00"} cryptoAmount={240} range1={"100,000.00"} range2={"367,200.00"} />
          <TraderCard buttonText={"BUY"} buttonColor={"green"} image={KemiFemi} fullName={"John Doe"} name={"Doemoney"} tradeTotal={"4,460"} tradePercent={"96.00"} time={10} percent={"97.30"} amount={"1,430.00"} cryptoAmount={240} range1={"100,000.00"} range2={"367,200.00"} />
          <TraderCard buttonText={"BUY"} buttonColor={"green"} image={KemiFemi} fullName={"John Doe"} name={"Doemoney"} tradeTotal={"4,460"} tradePercent={"96.00"} time={10} percent={"97.30"} amount={"1,430.00"} cryptoAmount={240} range1={"100,000.00"} range2={"367,200.00"} />
          <TraderCard buttonText={"BUY"} buttonColor={"green"} image={KemiFemi} fullName={"John Doe"} name={"Doemoney"} tradeTotal={"4,460"} tradePercent={"96.00"} time={10} percent={"97.30"} amount={"1,430.00"} cryptoAmount={240} range1={"100,000.00"} range2={"367,200.00"} />
        </div>
      </div>
    </div>
  )
}

export default AppHomeBody