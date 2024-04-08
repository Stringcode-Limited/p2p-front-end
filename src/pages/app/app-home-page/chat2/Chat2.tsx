import React from 'react';
import "./Chat2.css"
import clock from "../../../../assets/images/clock.svg"
import chat from "../../../../assets/images/chat.svg"
import clip from "../../../../assets/images/clip.svg"

interface IChat2{
  label:string
  time: string
  type?: "amountsold" | "paragraph"
  timertype: "time" | "amountsold"
  displayimage: "show" | "hide"
}
function Chat2({label, time, type, timertype, displayimage}:IChat2) {
  return (
    <>
    <div className="chat">
      <div className="title">Chat</div>
      <div className="wrapp-proceed-to-pay">
      <div className="text">
        <img src={clock} className={displayimage}/>
        <p className={type}>{label}</p>
        <p className={timertype}>{time}</p>
      </div>
          <div className="proceed-to-pay">
              <div className="amount-in-fig">
                <p className='fiat-text'>Fiat amount</p>
                <p className='fiat-figure'>₦5000.00</p>
              </div>
              <div className="proceed-text">
                <p className='proceed-main-text'>Proceed to pay</p>
              </div>
              
          </div>
          <div className="chat-text1">
            <div className="chat-text-inner">
            <p className='text1'>You have successfully created an order. Kindly pay within the stipulated time limit</p>
            </div>
          </div>
          <div className="chat-text2">
            <div className="chat-text-inner2">
            <p className='text1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate Relit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          </div>
          <div className="chat-text3">
            <div className="chat-text-inner3">
            <p className='text1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt </p>
            </div>
          </div>
          <div className="chat-text4">
            <div className="chat-text-inner4">
            <p className='text1'>Thanks</p>
            </div>
          </div>
          </div>
          
        
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

export default Chat2;
