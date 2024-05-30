import DefaultCurrency from "../DefaultCurrency/DefaultCurrency";
import DefaultCurrencyBody from "../DefaultCurrencyBody/DefaultCurrencyBody";
import "./DefaultCurrencyPage.css";

const DefaultCurrencyPage = () => {
  return (
    <>
    <div className="defaultCurrencyPage">
      <DefaultCurrencyBody/>
      <DefaultCurrency/>
    </div>
    </>
  )
}

export default DefaultCurrencyPage;
