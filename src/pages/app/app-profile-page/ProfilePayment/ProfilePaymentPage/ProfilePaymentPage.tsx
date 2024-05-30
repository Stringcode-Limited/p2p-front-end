import ProfilePaymentBody from "../ProfilePaymentBody/ProfilePaymentBody";
import ProfilePaymentMethod from "../ProfilePaymentMethod/ProfilePaymentMethod";
import "./ProfilePaymentPage.css";

const ProfilePaymentPage = () => {
  return (
    <>
    <div className="profilePaymentPage">
      <ProfilePaymentBody/>
      <ProfilePaymentMethod/>
    </div>
    </>
  )
}

export default ProfilePaymentPage;
