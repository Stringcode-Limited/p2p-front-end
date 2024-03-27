import "./waitingPaymentPage.css"
import Chat from "../../Chat/Chat"
import WaitingPaymentBody from "../waitingPaymentBody/WaitingPaymentBody"

const  WaitingPaymentPage = () => {
  return (
    <>
    <div className="waitingPaymentPage">
      <WaitingPaymentBody/>
      <Chat label="Your crypto will be released within" time="09:00" type="paragraph" timertype="timer" displayimage="show"/>
      </div>
    </>
  )
}

export default WaitingPaymentPage
