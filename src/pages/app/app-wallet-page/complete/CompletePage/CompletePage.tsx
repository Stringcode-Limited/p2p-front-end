import CompleteBody from "../CompleteBody/CompleteBody";
import "./CompletePage.css";
import RecentTransactions from '../../../app-order-page/RecentTransactions/RecentTransactions';


const CompletePage = () => {
  return (
    <>
      <div className="completePage">
        <CompleteBody/>
        <RecentTransactions />
      </div>
    </>
  )
}

export default CompletePage
