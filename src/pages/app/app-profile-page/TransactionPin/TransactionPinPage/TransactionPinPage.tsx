import AppProfileBody from '../../AppProfileBody/AppProfileBody'
import ResetTransactionPin from '../TransactionPinBody/TransactionPinBody'
import './TransactionPinPage.css'

function TransactionPinPage() {
  return (
    <>
    <div className="transactionPinPage">
      <AppProfileBody/>
      <ResetTransactionPin/>
    </div>
    </>
  )
}

export default TransactionPinPage