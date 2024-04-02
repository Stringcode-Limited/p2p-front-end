import Button from "../../../../../components/Button/Button";
import "./CompleteBody.css";



const CompleteBody = () => {
    return (
        <>
            <div className="completeBody">
            <div className="completeContainer">
                <p>Transfer successful</p>
                <div>
                <Button text="View details" color="green" type="large2" route=""/>
                <Button text="Return to wallet" color="white" type="large2" route=""/>
                </div>
            </div>

            </div>
        </>

    )
}

export default CompleteBody
