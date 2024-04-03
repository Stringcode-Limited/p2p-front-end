import "./FundTransactions.css"
import Search from "../../../../../components/Search/Search";
import TransactionCard from "../../../../../components/TransactionCard/TransactionCard";
const FundTransactions = () => {
  return (
    <>
      <div className="FundTransactionBody">
        <p className="title">Recent Transactions</p>
        <Search />
        <div className="FundTransactions">
            <TransactionCard currency="USDT" date="October 26" price="+2.00" style="Green" time="4:34 PM"/>
            <TransactionCard currency="USDT" date="October 26" price="+40.00" style="Green" time="4:34 PM"/>
            <TransactionCard currency="USDT" date="October 26" price="+40.00" style="Green" time="4:34 PM"/>
            <TransactionCard currency="USDT" date="October 26" price="+40.00" style="Green" time="4:34 PM"/>
        </div>
      </div>
    </>
  )
}

export default FundTransactions
