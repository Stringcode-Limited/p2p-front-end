import './ProfileCard.css'
import pright from '../../assets/images/pright.svg'

interface IProfileCard{
    icon:string
    text:string
}

function ProfileCard({icon, text}:IProfileCard) {
  return (
    <div className="profileCard">
        <div className="left">
            <img src={icon} alt="" />{text}
        </div>
        <div className="right"><img src={pright} alt="" /></div>
    </div>
  )
}

export default ProfileCard