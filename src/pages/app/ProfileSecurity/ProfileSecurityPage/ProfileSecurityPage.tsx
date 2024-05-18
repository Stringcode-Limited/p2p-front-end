import ProfileSecurityBody from "../ProfileSecurityBody/ProfileSecurityBody";
import Security from "../Security/Security";
import "./ProfileSecurityPage.css";

const ProfileSecurityPage = () => {
  return (
    <>
    <div className="profileSecurity">
      <ProfileSecurityBody/>
      <Security/>
    </div>
    </>
  )
}

export default ProfileSecurityPage
