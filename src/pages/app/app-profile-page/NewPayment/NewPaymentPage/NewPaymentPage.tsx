import NewPaymentBody from "../NewPaymentBody/NewPaymentBody";
import NewPaymentMethod from "../NewPaymentMethod/NewPaymentMethod";
import "./NewPaymentPage.css";

const NewPaymentPage = () => {
  return (
    <>
    <div className="newPaymentPage">
      <NewPaymentBody/>
      <NewPaymentMethod/>
    </div>
    </>
  )
}

export default NewPaymentPage
