import SellUsdtBody from "../sellUsdtBody/SellUsdtBody";
import "./sellUsdtPage.css";
import Chat from "../../Chat/Chat"

const SellUsdtPage = () => {
  return (
    <>
    <div className="sellUsdtPage">
      <SellUsdtBody/>
      <Chat label="Your crypto will be released within" time="09:00" type="paragraph" timertype="timer" displayimage="show"/>
      </div>
    </>
  )
}

export default SellUsdtPage
