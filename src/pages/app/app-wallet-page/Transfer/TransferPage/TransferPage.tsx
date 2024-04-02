import "./TransferPage.css";
import RecentTransactions from '../../../app-order-page/RecentTransactions/RecentTransactions';
import Transferbody from "../TransferBody/Transferbody";

const TransferPage = () => {
  return (
    <>
      <div className="transferPage">
        <Transferbody />
        <RecentTransactions />
      </div>

    </>
  )
}

export default TransferPage
