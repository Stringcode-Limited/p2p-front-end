import AppHomeBody from "../appHomeBody/AppHomeBody";
import RecentOrders from "../recentOrders/RecentOrders";
import "./styles.css";

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
