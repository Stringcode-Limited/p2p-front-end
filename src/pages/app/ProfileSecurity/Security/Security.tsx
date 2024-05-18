import "./Security.css";
import reset from "../../../../assets/images/reset.svg";
import SecurityCard from "../../../../components/SecurityCard/SecurityCard";

const Security = () => {
    return (
        <>
            <div className="security">
                <div className="securityHeader">
                    <img src={reset} alt="" />
                    <p>Security settings</p>
                </div>
                <div className="securityWrapper">
                <SecurityCard text="Change password"/>
                <SecurityCard text="Reset password" />
                <SecurityCard text="Transaction PIN" />
                <SecurityCard text="Delete Account" color="color" />
                </div>
                

            </div>
        </>
    )
}

export default Security
