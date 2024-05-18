import "./TransactionPin.css";
import reset from "../../../../assets/images/reset.svg";

import ResetOTP from "../../../../components/ResetOTP/ResetOTP";

const TransactionPin = () => {
  return (
    <>
      <div className="TransactionPinBody">
                <div className="TransactionPinHeader">
                    <img src={reset} alt="" />
                    <p>Change transaction PIN</p>
                </div>
                <div className="TransactionPinform">
                    <ResetOTP label="Current PIN" display="hide" />
                    <ResetOTP label="New PIN" display="hide" />
                    <ResetOTP label="Confirm PIN" display="hide" />
                    <button className="continueOTP">Change PIN</button>
                </div>
            </div>
    </>
  )
}

export default TransactionPin
