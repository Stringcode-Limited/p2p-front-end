import ChangeTransactionBody from "../ChangeTransactionsBody/ChangeTransactionBody"
import TransactionPin from "../TransactionPin/TransactionPin"
import "./changeTransactionsPage.css"

const ChangeTransactionsPage = () => {
  return (
    <>
    <div className="changeTransactions">
      <ChangeTransactionBody/>
      <TransactionPin />
    </div>
    </>
  )
}

export default ChangeTransactionsPage
