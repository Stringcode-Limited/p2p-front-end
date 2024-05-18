import "./OpenChat.css";
import Open from "../../assets/images/Open.svg"

interface IOpenChat{
    classes: string 
  
  }

const OpenChat = ({classes}:IOpenChat) => {
  return (
    <>
    {/* btn grey large4 OpenButton */}
    <div  className= {classes} >
        <img src={Open}/>
        <p>Open chat</p>
    </div>
    </>
      
    
  )
}

export default OpenChat
