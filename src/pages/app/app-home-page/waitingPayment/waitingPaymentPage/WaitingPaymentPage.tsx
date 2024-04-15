import "./waitingPaymentPage.css"
import Chat from "../../Chat/Chat"
import WaitingPaymentBody from "../waitingPaymentBody/WaitingPaymentBody"

const  WaitingPaymentPage = () => {
  return (
    <>
    <div className="waitingPaymentPage">
      <WaitingPaymentBody/>
      <Chat label="This order will be cancelled in" time="09:00" type="paragraph" timertype="time" displayimage="show"/>
      </div>
    </>
  )
}

export default WaitingPaymentPage
