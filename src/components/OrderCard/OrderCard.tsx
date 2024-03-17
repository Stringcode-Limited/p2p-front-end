import "./OrderCard.css";

interface IOrderCard {
  image: string;
  fullName: string;
  name: string;
  type: "BUY" | "SELL";
  price: string;
  quantity: number;
}

function OrderCard({image, fullName, name, type, price, quantity}:IOrderCard) {
  return (
    <>
      <div className="orderCard">
        <div className="user">
          <div className="picture">
            <img src={image} />
          </div>
          <div className="name">
            <div className="name1">{fullName}</div>
            <div className="name2">@{name}</div>
          </div>
        </div>
        <div className="detail">
          <p className="title">Trade type</p>
          <p className="val">{type} BTC</p>
        </div>
        <div className="detail">
          <p className="title">Price</p>
          <p className="value">₦{price}</p>
        </div>
        <div className="detail">
          <p className="title">Total quantity</p>
          <p className="value">{quantity} BTC</p>
        </div>
      </div>
    </>
  );
}

export default OrderCard;
