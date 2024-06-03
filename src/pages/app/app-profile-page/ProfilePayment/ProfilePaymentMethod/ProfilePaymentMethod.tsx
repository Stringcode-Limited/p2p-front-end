import "./ProfilePaymentMethod.css";
import reset from "../../../../../assets/images/reset.svg";
import trend from "../../../../../assets/images/Trend.svg";
import ResetOTP from "../../../../../components/ResetOTP/ResetOTP";

const ProfilePaymentMethod = () => {
  return (
    <>
      <div className="profilePaymentMethod ">
        <div className="profilePaymentHeader">
          <p>Payment methods</p>
        </div>
        <div className="paymentContainer">
          <div className="addPayment">
            <img src={reset} alt="" />
            <p>Add payment method</p>
          </div>
          <div>
            <img src={trend} />
          </div>
        </div>

        <div className="paymentWrapper">
          <form className="paymentform" action="">
            <ResetOTP label="Account number" display="hide" />
            <ResetOTP label="Bank name" display="hide" />
            <ResetOTP label="Account name" display="hide" />
            <button className="savePaymentBtn">Save payment method</button>
          </form>
        </div>
      </div >
    </>
  )
}

export default ProfilePaymentMethod
