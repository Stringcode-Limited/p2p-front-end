import SecurityCard from '../../../../../components/SecurityCard/SecurityCard'
import './TransactionPinBody.css'
import reset from "../../../../../assets/images/reset.svg";

function ResetTransactionPin() {
  return (
    <>
      <div className="ResetTransactionPin">
                <div className="ResetTransactionPinHeader">
                    <img src={reset} alt="" />
                    <p>Reset transaction PIN</p>
                </div>
                <div className="ResetTransactionPinWrapper">
                <SecurityCard text="Change transaction PIN"/>
                <SecurityCard text="Reset transaction PIN" />
                </div>
                

            </div>
    </>
  )
}

export default ResetTransactionPin