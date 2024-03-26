import "./emailSmsVerification.css";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import NavBar from "../../components/NavBar/NavBar";

const EmailSmsVerification = () => {
    return (
        <div>
            <NavBar />
            <div>
                <div>
                    <div>
                        <div>Email & SMS Verification</div>
                        <Input label="Email OTP" type="number" />
                        <Input label="SMS OTP" type="number" />
                        <Button text="Continue" color="green" type="normal2" />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default EmailSmsVerification
