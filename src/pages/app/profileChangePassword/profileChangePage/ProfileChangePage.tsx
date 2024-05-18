
import ChangePassword from "../ChangePassword/ChangePassword";
import ProfileChangeBody from "../profileChangeBody/ProfileChangeBody";
import "./profileChangePage.css";
 
 

const ProfileChangePage = () => {
  return (
    <>
    <div className="profileChangePage">
      <ProfileChangeBody/>
      <ChangePassword/>
    </div>
    </>
  )
}

export default ProfileChangePage
