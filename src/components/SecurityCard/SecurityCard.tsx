import "./SecurityCard.css";
import securityright from "../../assets/images/securityright.svg"

interface ISecurityCard{
    text: string
    color?: string

}

const SecurityCard = ({text, color}:ISecurityCard) => {
  return (
    <>
      <div className="securityCard">
        <p className={color}>{text}</p>
        <img src={securityright} alt="" />
      </div>
    </>
  )
}

export default SecurityCard
