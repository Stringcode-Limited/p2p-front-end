import FundBody from "../FundBody/FundBody";
import FundTransactions from "../FundTransactions/FundTransactions";
import "./FundPage.css"

const FundPage = () => {
  return (
    <div className="fundPage">
        <FundBody/>
        <FundTransactions />
      </div>
  )
}

export default FundPage
