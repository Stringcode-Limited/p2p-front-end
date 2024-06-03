import ProfileVeri from "../ProfileVeri/ProfileVeri";
import ProfileVerificationBody from "../ProfileVerificationBody/ProfileVerificationBody";
import "./ProfileVerification.css";

const ProfileVerification = () => {
  return (
    <>
    <div className="profileVerificationPage">
      <ProfileVerificationBody/>
      <ProfileVeri/>
    </div>
    </>
  )
}

export default ProfileVerification
