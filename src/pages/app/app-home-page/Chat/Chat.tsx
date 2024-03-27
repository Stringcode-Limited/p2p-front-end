import "./Chat.css";
import clock from "../../../../assets/images/clock.svg";
import chat from "../../../../assets/images/chat.svg";
import clip from "../../../../assets/images/clip.svg";

function Chat() {
  return (
    <>
      <div className="chat">
        <div className="title">Chat</div>
        <div className="text">
          <img src={clock} />
          <p>Your crypto will be released within</p>
          <p className="time">09:00</p>
        </div>
        <img src={chat} />
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
