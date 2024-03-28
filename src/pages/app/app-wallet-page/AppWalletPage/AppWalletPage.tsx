
import AppWalletBody from "../AppWalletBody/AppWalletBody";
import AppWalletTransactions from "../AppWalletTransactions/AppWalletTransactions";
import "./appWalletPage.css";

function AppWalletPage() {
  return (
    <>
      <div className="appWalletPage">
        <AppWalletBody />
        <AppWalletTransactions/>
      </div>
    </>
  )
}

export default AppWalletPage;