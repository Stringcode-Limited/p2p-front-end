import { TraderCard } from "../../..";
import "./appHomeBody.css";
import JohnDoe from "../../../../assets/images/JohnDoe.png";
import KemiFemi from "../../../../assets/images/KemiFemi.png";
import Buy from "../../../../components/Buy/Buy";
import Dropdown from "../../../../components/Dropdown/Dropdown";
import filter from "../../../../assets/images/filter.svg";
import bell from "../../../../assets/images/bell.svg";

const AppHomeBody = () => {
  return (
    <>
      <div className="p2pSellBody">
        <div className="top">
          <div className="title">P2P</div>
          <div className="body">
            <div className="left">
              <Buy />
            </div>
            <div className="right">
              <Dropdown
                width="widthNormal"
                list={["UDST", "BTC", "ETH", "LTC", "SOL", "XPR"]}
                title="USDT"
              />
              <div className="dropdownRight">
              <Dropdown
                width="widthNormal"
                list={["NGN", "USD", "GHC", "EUR", "JPY", "GBP"]}
                title="NGN"
              />
              <img src={filter} />
              <img src={bell} />
              </div>
            </div>
          </div>
        </div>
        <div className="center">
          <TraderCard
            buttonText={"BUY"}
            buttonColor={"green"}
            image={JohnDoe}
            fullName={"John Doe"}
            name={"Doemoney"}
            tradeTotal={"4,460"}
            tradePercent={"96.00"}
            time={10}
            percent={"97.30"}
            amount={"1,430.00"}
            cryptoAmount={240}
            range1={"100,000.00"}
            range2={"367,200.00"}
            route="/app/buyUSDT"
          />
          <TraderCard
            buttonText={"BUY"}
            buttonColor={"green"}
            image={KemiFemi}
            fullName={"Kemi Femi"}
            name={"KemsFems"}
            tradeTotal={"4,460"}
            tradePercent={"96.00"}
            time={10}
            percent={"97.30"}
            amount={"1,430.00"}
            cryptoAmount={240}
            range1={"100,000.00"}
            range2={"367,200.00"}
            route="/app/buyUSDT"
          />
          <TraderCard
            buttonText={"BUY"}
            buttonColor={"green"}
            image={KemiFemi}
            fullName={"John Doe"}
            name={"Doemoney"}
            tradeTotal={"4,460"}
            tradePercent={"96.00"}
            time={10}
            percent={"97.30"}
            amount={"1,430.00"}
            cryptoAmount={240}
            range1={"100,000.00"}
            range2={"367,200.00"}
            route="/app/buyUSDT"
          />
          <TraderCard
            buttonText={"BUY"}
            buttonColor={"green"}
            image={KemiFemi}
            fullName={"John Doe"}
            name={"Doemoney"}
            tradeTotal={"4,460"}
            tradePercent={"96.00"}
            time={10}
            percent={"97.30"}
            amount={"1,430.00"}
            cryptoAmount={240}
            range1={"100,000.00"}
            range2={"367,200.00"}
            route="/app/buyUSDT"
          />
          <TraderCard
            buttonText={"BUY"}
            buttonColor={"green"}
            image={KemiFemi}
            fullName={"John Doe"}
            name={"Doemoney"}
            tradeTotal={"4,460"}
            tradePercent={"96.00"}
            time={10}
            percent={"97.30"}
            amount={"1,430.00"}
            cryptoAmount={240}
            range1={"100,000.00"}
            range2={"367,200.00"}
            route="/app/buyUSDT"
          />
          <TraderCard
            buttonText={"BUY"}
            buttonColor={"green"}
            image={KemiFemi}
            fullName={"John Doe"}
            name={"Doemoney"}
            tradeTotal={"4,460"}
            tradePercent={"96.00"}
            time={10}
            percent={"97.30"}
            amount={"1,430.00"}
            cryptoAmount={240}
            range1={"100,000.00"}
            range2={"367,200.00"}
            route="/app/buyUSDT"
          />
        </div>
      </div>
    </>
  );
};

export default AppHomeBody;
