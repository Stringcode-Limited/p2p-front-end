import "./VerifyWithPinPage.css";
import RecentTransactions from '../../../app-order-page/RecentTransactions/RecentTransactions';
import VerifyWithPinBody from "../VerifyWithPinBody/VerifyWithPinBody";
VerifyWithPinBody

const VerifyWithPinPage = () => {
  return (
    <>
      <div className="verifyPinPage">
        <VerifyWithPinBody />
        <RecentTransactions />
      </div>
    </>
  )
}

export default VerifyWithPinPage
