 import RecentTransactions from "../../app-order-page/RecentTransactions/RecentTransactions";
import AppWalletBody from "../AppWalletBody/AppWalletBody";
import "./appWalletPage.css";
RecentTransactions
function AppWalletPage() {
  return (
    <>
      <div className="appWalletPage">
        <AppWalletBody />
        <RecentTransactions />
      </div>
    </>
  )
}

export default AppWalletPage;