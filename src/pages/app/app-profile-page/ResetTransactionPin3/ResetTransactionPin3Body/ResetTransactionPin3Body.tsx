import "./ResetTransactionPin3Body.css";
import reset from "../../../../../assets/images/reset.svg";

import ResetOTP from "../../../../../components/ResetOTP/ResetOTP";

const ResetTransactionPin3Body = () => {
  return (
    <>
      <div className="ResetTransactionPin3Body">
                <div className="ResetTransactionPin3BodyHeader">
                    <img src={reset} alt="" />
                    <p>Transaction PIN</p>
                </div>
                <div className="ResetTransactionPin3Bodyform">
                    <ResetOTP label="New PIN" display="hide" />
                    <ResetOTP label="Confirm PIN" display="hide" />
                    <button className="continueOTP">Reset PIN</button>
                </div>
            </div>
    </>
  )
}

export default ResetTransactionPin3Body
