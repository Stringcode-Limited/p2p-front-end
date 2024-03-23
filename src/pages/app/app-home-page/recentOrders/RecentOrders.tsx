import OrderCard from "../../../../components/OrderCard/OrderCard";
import "./recentOrder.css";
import recentProfile from "./../../../../assets/recentProfile.png"

const RecentOrders = () => {
  return (
    <div>
      <div className="recentOrders">
        <div className="recentContainer">
          <div className="recentHeading">Recent Orders</div>
          <div className="orderWrapper">
            <OrderCard image={recentProfile} fullName={"Adison Bator"} name={"Adbator"} type={"BUY"} price={"1525,829.00"} quantity={3} />
            <OrderCard image={recentProfile} fullName={"Adison Bator"} name={"Adbator"} type={"BUY"} price={"1525,829.00"} quantity={3} />
            <OrderCard image={recentProfile} fullName={"Adison Bator"} name={"Adbator"} type={"BUY"} price={"1525,829.00"} quantity={3} />
            <OrderCard image={recentProfile} fullName={"Adison Bator"} name={"Adbator"} type={"BUY"} price={"1525,829.00"} quantity={3} />
          </div>
        </div>

      </div>
    </div>
  )
}

export default RecentOrders