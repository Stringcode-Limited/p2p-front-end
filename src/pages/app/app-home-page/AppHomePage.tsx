import AppHomeBody from "./AppHomeBody";
import RecentOrders from "./RecentOrders";
import "./style.css";

function AppHomePage() {
  return (
    <div> 
      <div className="container">
      <AppHomeBody/>
      <RecentOrders/>
      </div>
    </div>
  )
}

export default AppHomePage
