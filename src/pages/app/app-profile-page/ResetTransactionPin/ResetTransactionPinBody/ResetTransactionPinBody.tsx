import './ResetTransactionPinBody.css'
import reset from "../../../../../assets/images/reset.svg";
import ResetOTP from '../../../../../components/ResetOTP/ResetOTP';

function ResetTransactionPinBody() {
  return (
    <>
      <div className="resetTransactionPinBody">
      <div className="resetTransactionPinBodyHeader">
                    <img src={reset} alt="" />
                    <p>Reset password</p>
                </div>
                <div className="OTPSection">
                    <ResetOTP label="Email OTP"/>
                    <ResetOTP label="SMS OTP" />
                    <button className="continueOTP">Continue</button>
                </div>
                

            </div>
    </>
  )
}

export default ResetTransactionPinBody