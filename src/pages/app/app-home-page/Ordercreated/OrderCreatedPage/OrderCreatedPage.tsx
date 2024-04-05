import "./OrderCreatedPage.css";
import Chat from "../../Chat/Chat";
import OrderCreatedBody from "../OrderCreatedBody/OrderCreatedBody";

const OrderCreatedPage = () => {
  return (
    <>
      <div className="orderCreatedPage">
        <OrderCreatedBody/>
        <Chat label="This order will be canceled" time="10:00" type="paragraph" timertype="timer" displayimage="show" />
      </div>
    </>
  )
}

export default OrderCreatedPage
