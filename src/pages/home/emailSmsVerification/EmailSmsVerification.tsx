import "./emailSmsVerification.css";
import Button from "../../../components/Button/Button";
import NavBar from "../../../components/NavBar/NavBar";
import { NavLink } from "react-router-dom";
import OTP from "../../../components/OTP/OTP";
import arrowleft from "../../../assets/images/arrowleft.svg";

const EmailSmsVerification = () => {
    return (
        <div>
            <div className="back">
            <img src={arrowleft} alt=""  />
            </div>
            <div className="navcontainer">
            <NavBar />
            </div>
            <div className="veri-container">
                <div className="form-wrapper">
                    <div className="div-wrapper">
                        <div className="heading">Email & SMS Verification</div>
                        <div className="form-contents">
                        <OTP label="Email OTP" />
                        <OTP label="SMS OTP" />
                        <div className="continue-button">
                        <NavLink to={"/setup"}><Button text="Continue" color="green" type="normal2" /></NavLink>
                        </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default EmailSmsVerification
