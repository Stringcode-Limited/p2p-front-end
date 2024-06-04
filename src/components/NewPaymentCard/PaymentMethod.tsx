import "./PaymentMethod.css";
import editIcon from "../../assets/images/editIcon.svg";
import deleteIcon from "../../assets/images/deleteIcon.svg";

interface IPaymentMethod{
    accNo: string
    bankName: string
    accName: string
}

const PaymentMethod = ({accNo, accName, bankName}:IPaymentMethod) => {
  return (
    <>
    <div className="paymentMethodCard">
      <div className="cardtItem">
        <p>Account number</p>
        <div>{accNo}</div>
      </div>
      <div className="cardtItem">
        <p>Bank name</p>
        <p>{bankName}</p>
      </div>
      <div className="cardtItem">
        <p>Account name</p>
        <p>{accName}</p>
      </div>
      <div className="editDelete">
      <div className="editbtn">
        <p>Edit</p>
        <img src={editIcon} />
      </div>
      <div className="deletebtn">
        <img src={deleteIcon} />
      </div>
      </div>
    </div>
    </>
  )
}

export default PaymentMethod
