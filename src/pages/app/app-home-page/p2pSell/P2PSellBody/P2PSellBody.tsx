import Dropdown from "../../../../../components/Dropdown/Dropdown";
import Sell from "../../../../../components/Sell/Sell";
import "./P2PSellBody.css";
import filter from '../../../../../assets/images/filter.svg'
import bell from '../../../../../assets/images/bell.svg'
import TraderCard from "../../../../../components/TraderCard/TraderCard";
import JohnDoe from '../../../../../assets/images/JohnDoe.png';
import KemiFemi from '../../../../../assets/images/KemiFemi.png'
import { useEffect, useState } from "react";
import axios from "axios";

function P2PSellBody() {

  const [sellList, setSellList] = useState([])

  useEffect(() => {
      const fetchSellList = async() => {
        try {
          const response = await axios.get('https://p2p-qrjp.onrender.com/api/v1/sellList', { headers: { Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MGQxZjA4MDQ3ZmY1Y2IwZDNkMWM4NCIsImlhdCI6MTcxNDYzNzk0OSwiZXhwIjoxNzE0NzI0MzQ5fQ.kKriE-sv4gJoPLu_IRGlMHhAq8Zet5kTQ-wAoAaMsCc"}` } });
          console.log(response)
          setSellList(response.data.data)
        } 
        catch (error) {
          console.log(error)
        }
      }
      fetchSellList()
    },[])

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
              <img src={filter}/>
              <img src={bell}/>
            </div>
          </div>
        </div>
        <div className="center">
        {sellList.map(({_id:id, range:{max, min}, paymentTimeLimit, totalAmountOfCrypto, fiatCurrency, pricePerCoin}) => <TraderCard key={id} time={paymentTimeLimit} fiatCurrency={fiatCurrency} amount={pricePerCoin} cryptoAmount={totalAmountOfCrypto} range1={min} range2={max} buttonColor="red" buttonText="SELL"/>)}
        </div>
      </div>
    </>
  );
}

export default P2PSellBody;
