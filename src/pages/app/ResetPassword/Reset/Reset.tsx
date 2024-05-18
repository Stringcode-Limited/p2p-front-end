import "./Rest.css";
import reset from "../../../../assets/images/reset.svg";

import ResetOTP from "../../../../components/ResetOTP/ResetOTP";

const Reset = () => {
    return (
        <>
            <div className="resetBody">
                <div className="resetHeader">
                    <img src={reset} alt="" />
                    <p>Reset password</p>
                </div>
                <div className="resetform">
                    <ResetOTP label="New password" display="hide" />
                    <ResetOTP label="Confirm password" display="hide" />
                    <button className="continueOTP">Reset Password</button>
                </div>
            </div>
        </>
    )
}

export default Reset
