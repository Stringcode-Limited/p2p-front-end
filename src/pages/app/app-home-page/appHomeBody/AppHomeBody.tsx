import { TraderCard } from "../../..";
import "./appHomeBody.css";
import Buy from "../../../../components/Buy/Buy";
import Dropdown from "../../../../components/Dropdown/Dropdown";
import filter from "../../../../assets/images/filter.svg";
import bell from "../../../../assets/images/bell.svg";
import { useEffect, useState } from "react";
import axios from "axios";
import cookie from "js-cookie";

type BuyListItem = {
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

const AppHomeBody = () => {
  const [buyList, setBuyList] = useState<BuyListItem[]>([]);

  useEffect(() => {
    const fetchBuyList = async () => {
      try {
        const response = await axios.get(
          "https://p2p-qrjp.onrender.com/api/v1/buyList",
          { headers: { Authorization: `Bearer ${cookie.get("token")}` } }
        );
        console.log(response.data.data);
        setBuyList(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchBuyList();
  }, []);
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
          {buyList.map((item) => (
            <TraderCard
              amount={item.pricePerCoin}
              buttonColor="green"
              buttonText="BUY"
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
};

export default AppHomeBody;
