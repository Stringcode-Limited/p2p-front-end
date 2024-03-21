import { TraderCard } from "../..";
import "./style.css";
import JohnDoe from "./../../../assets/JohnDoe.png";
import KemiFemi from "./../../../assets/KemiFemi.png"
const AppHomeBody = () => {
  return (
    <div>
      <div className="bodyWrapper">
        <div className="bodyTop">
          <div>P2P</div>

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