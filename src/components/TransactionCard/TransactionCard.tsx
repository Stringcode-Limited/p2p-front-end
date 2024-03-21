import "./TransactionCard.css";

interface ITransactionCard{
    date:string
    time:string
    price:string
    currency:string
    style:"Red" | "Green"
}

function TransactionCard({date, time, price, currency, style}:ITransactionCard) {
    let styleName = `right ${style}`
  return (
    <>
      <div className="transactionCard">
        <div className="left">
          <div className="title">Account funded</div>
          <div className="time">{date}, {time}</div>
        </div>
        <div className={styleName}>{price} {currency}</div>
      </div>
    </>
  );
}

export default TransactionCard;
