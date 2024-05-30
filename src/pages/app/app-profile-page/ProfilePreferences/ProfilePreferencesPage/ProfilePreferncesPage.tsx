import Preferences from "../Preferences/Preferences"
import ProfilePreferencesBody from "../ProfilePreferencesBody/ProfilePreferencesBody";
import "./ProfilePreferencesPage.css";

const ProfilePreferncesPage = () => {
  return (
    <>
    <div className="profilePreferncesPage">
      <ProfilePreferencesBody/>
      <Preferences/>
    </div>
    </>
  )
}

export default ProfilePreferncesPage
