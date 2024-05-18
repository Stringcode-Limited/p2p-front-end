import "./ChangePassword.css";
import reset from "../../../../assets/images/reset.svg";

import ResetOTP from "../../../../components/ResetOTP/ResetOTP";

const ChangePassword = () => {
    return (
        <>
            <div className="changePasswordBody">
                <div className="changePasswordHeader">
                    <img src={reset} alt="" />
                    <p>Change password</p>
                </div>
                <div className="changePasswordform">
                    <ResetOTP label="Current password" display="hide" />
                    <ResetOTP label="New password" display="hide" />
                    <ResetOTP label="Confirm password" display="hide" />
                    <button className="continueOTP">Change Password</button>
                </div>
            </div>
        </>
    )
}

export default ChangePassword
