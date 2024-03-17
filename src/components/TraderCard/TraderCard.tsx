import Button from "../Button/Button";
import "./TraderCard.css";

interface ITraderCard {
  buttonText: "BUY" | "SELL";
  buttonColor: "green" | "red";
  image: string;
  fullName: string;
  name: string;
  tradeTotal: string;
  tradePercent: string;
  time: number;
  percent: string;
  amount: string;
  cryptoAmount: number;
  range1: string;
  range2: string;
}

function TraderCard({
  buttonText,
  buttonColor,
  image,
  fullName,
  name,
  tradeTotal,
  tradePercent,
  time,
  percent,
  amount,
  cryptoAmount,
  range1,
  range2,
}: ITraderCard) {
  return (
    <>
      <div className="traderCard">
        <div className="details">
          <div className="user">
            <div className="picture">
              <img src={image} />
            </div>
            <div className="name">
              <p className="name1">{fullName}</p>
              <p className="name2">@{name}</p>
            </div>
          </div>

          <div className="trade">
            <div className="detail1">
              <p>{tradeTotal} Trades | {tradePercent}% Completed</p>
              <p>{time} mins</p>
              <p>{percent}%</p>
            </div>
            <div className="detail2">
              <div className="p1">₦</div>
              <div className="p2">{amount}</div>
            </div>
            <div className="detail3">
              <div className="total">Total crypto amount {cryptoAmount} USDT</div>
              <div className="range">Range ₦{range1} - ₦{range2}</div>
            </div>
          </div>
        </div>

        <Button text={buttonText} color={buttonColor} type="mini" />
      </div>
    </>
  );
}

export default TraderCard;
