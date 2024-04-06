import "./Chat.css";
import clock from "../../../../assets/images/clock.svg";
import chat from "../../../../assets/images/chat.svg";
import clip from "../../../../assets/images/clip.svg";

interface IChat{
  label:string
  time: string
  type?: "amountsold" | "paragraph"
  timertype: "time" | "amountsold"
  displayimage: "show" | "hide"
}

function Chat({label, time, type, timertype, displayimage}:IChat) {
  return (
    <>
      <div className="chat">
        <div className="title">Chat</div>
        <div className="text">
          <img src={clock} className={displayimage}/>
          <p className={type}>{label}</p>
          <p className={timertype}>{time}</p>
        </div>
        <img src={chat}/>
        <div className="chatContainer">
          <div className="chatInput">
            <input type="text" placeholder="Type message"/>
            <img src={clip}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Chat;
