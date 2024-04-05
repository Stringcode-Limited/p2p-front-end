import "./MakePaymentPage.css";
import Chat from "../../Chat/Chat";
import MakePaymentBody from "../MakePaymentBody/MakePaymentBody";


const MakePaymentPage = () => {
  return (
    <>
      <div className="makePaymentPage">
        <MakePaymentBody />
        <Chat label="Your crypto has been released" time="" type="paragraph" timertype="timer" displayimage="show" />
      </div>
    </>

  )
}

export default MakePaymentPage
