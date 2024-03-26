import AppOrderBody from "../AppOrderBody/AppOrderBody";
import RecentTransactions from "../RecentTransactions/RecentTransactions";
import "./AppOrderPage.css";

function AppOrderPage() {
  return (
    <>
      <div className="appOrderPage">
        <AppOrderBody />
        <RecentTransactions />
      </div>
    </>
  );
}

export default AppOrderPage;
