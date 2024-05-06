import { TraderCard } from "../../..";
import "./appHomeBody.css";
import JohnDoe from "../../../../assets/images/JohnDoe.png";
import KemiFemi from "../../../../assets/images/KemiFemi.png";
import Buy from "../../../../components/Buy/Buy";
import Dropdown from "../../../../components/Dropdown/Dropdown";
import filter from "../../../../assets/images/filter.svg";
import bell from "../../../../assets/images/bell.svg";
import { useEffect, useState } from "react";
import axios from "axios";

const AppHomeBody = () => {

const [buyList, setBuyList] = useState([])

useEffect(() => {
    const fetchBuyList = async() => {
      try {
        const response = await axios.get('https://p2p-qrjp.onrender.com/api/v1/buyList', { headers: { Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MGQxZjA4MDQ3ZmY1Y2IwZDNkMWM4NCIsImlhdCI6MTcxNDYzNzk0OSwiZXhwIjoxNzE0NzI0MzQ5fQ.kKriE-sv4gJoPLu_IRGlMHhAq8Zet5kTQ-wAoAaMsCc"}` } });
        console.log(response)
        setBuyList(response.data.data)
      } 
      catch (error) {
        console.log(error)
      }
    }
    fetchBuyList()
  },[])
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
          {buyList.map(({}) => <TraderCard />)}
        </div>
      </div>
    </>
  );
};

export default AppHomeBody;
