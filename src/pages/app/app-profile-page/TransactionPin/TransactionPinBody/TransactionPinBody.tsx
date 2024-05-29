import SecurityCard from '../../../../../components/SecurityCard/SecurityCard'
import './TransactionPinBody.css'
import reset from "../../../../../assets/images/reset.svg";

function TransactionPinBody() {
  return (
    <>
      <div className="transactionPinBody">
                <div className="transactionPinBodyHeader">
                    <img src={reset} alt="" />
                    <p>Reset transaction PIN</p>
                </div>
                <div className="transactionPinBodyWrapper">
                <SecurityCard text="Change transaction PIN"/>
                <SecurityCard text="Reset transaction PIN" />
                </div>
                

            </div>
    </>
  )
}

export default TransactionPinBody