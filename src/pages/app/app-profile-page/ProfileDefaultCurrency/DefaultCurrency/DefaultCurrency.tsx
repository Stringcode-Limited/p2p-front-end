import "./DefaultCurrency.css";
import reset from "../../../../../assets/images/reset.svg";

const DefaultCurrency = () => {
    return (
        <>
            <div className="defaultCurrency">
                <div className="defaultCurrencyHeader">
                    <img src={reset} alt="" />
                    <p>Default Currency</p>
                </div>
            </div>
        </>
    )
}

export default DefaultCurrency
