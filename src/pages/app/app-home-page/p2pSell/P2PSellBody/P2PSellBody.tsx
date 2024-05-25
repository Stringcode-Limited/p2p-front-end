import Dropdown from "../../../../../components/Dropdown/Dropdown";
import Sell from "../../../../../components/Sell/Sell";
import "./P2PSellBody.css";
import filter from "../../../../../assets/images/filter.svg";
import bell from "../../../../../assets/images/bell.svg";
import TraderCard from "../../../../../components/TraderCard/TraderCard";
import { useEffect, useState } from "react";
import axios from "axios";
import cookie from "js-cookie";

type SellListItem = {
  pricePerCoin: string;
  totalAmountOfCrypto: number;
  cryptoCurrency: {
    name: string;
  };
  user: {
    fullname: string;
    profile_img: string;
  };
  range: {
    min: string;
    max: string;
  };
  paymentTimeLimit: number;
}

function P2PSellBody() {
  const [sellList, setSellList] = useState<SellListItem[]>([]);

  useEffect(() => {
    const fetchSellList = async () => {
      try {
        const response = await axios.get(
          "https://p2p-qrjp.onrender.com/api/v1/sellList",
          { headers: { Authorization: `Bearer ${cookie.get("token")}` } }
        );
        console.log(response);
        setSellList(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchSellList();
  }, []);

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
                width="widthNormal"
                list={["UDST", "BTC", "ETH", "LTC", "SOL", "XPR"]}
                title="USDT"
              />
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
        <div className="center">
          {sellList.map((item) => (
            <TraderCard
              amount={item.pricePerCoin}
              buttonColor="red"
              buttonText="SELL"
              cryptoAmount={item.totalAmountOfCrypto}
              fiatCurrency={item.cryptoCurrency.name}
              fullName={item.user.fullname}
              image={item.user.profile_img}
              name=""
              percent=""
              range1={item.range.min}
              range2={item.range.max}
              time={item.paymentTimeLimit}
              tradePercent=""
              tradeTotal=""
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default P2PSellBody;
