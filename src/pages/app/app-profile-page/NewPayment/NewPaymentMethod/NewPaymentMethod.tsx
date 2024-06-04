import PaymentMethod from "../../../../../components/NewPaymentCard/PaymentMethod";
import "./NewPaymentMethod.css";
import add from "../../../../../assets/images/add.svg";

const NewPaymentMethod = () => {
  return (
    <>
      <div className="newPaymentMethod ">
      <div className="newPaymentHeader">
        <p>Payment Methods</p>
      </div>
      <div className="yourPayment">
        <p>Your payment methods</p>
        <img src={add} alt="" />
      </div>

      <PaymentMethod accNo= "0123456789" bankName= "Garfield United Bank" accName="Talan Botosh Grace"/>
      <PaymentMethod accNo= "9876543210" bankName= "Flux Microfinance Bank" accName="Talan Botosh Grace"/>
    </div>
    </>
  )
}

export default NewPaymentMethod
