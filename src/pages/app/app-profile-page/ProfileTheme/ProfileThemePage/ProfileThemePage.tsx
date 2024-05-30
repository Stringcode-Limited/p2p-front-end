import ProfileThemeBody from "../ProfileThemeBody/ProfileThemeBody";
import Theme from "../Theme/Theme";
import "./ProfileThemePage.css";

const ProfileThemePage = () => {
  return (
    <>
      <div className="profileThemePage">
        <ProfileThemeBody/>
        <Theme/>
      </div>
    </>
  )
}

export default ProfileThemePage
