import AppProfileBody from '../../AppProfileBody/AppProfileBody'
import TransactionPinBody from '../TransactionPinBody/TransactionPinBody'
import './TransactionPinPage.css'

function TransactionPinPage() {
  return (
    <>
    <div className="transactionPinPage">
      <AppProfileBody/>
      <TransactionPinBody/>
    </div>
    </>
  )
}

export default TransactionPinPage