import ProfileResetBody from "../ProfileResetBody/ProfileResetBody"
import ResetPassword from "../ResetPassword/ResetPassword"
import "./ProfileResetPage.css"

const ProfileResetPage = () => {
  return (
    <>
    <div className="profileReset">
      <ProfileResetBody/>
      <ResetPassword/>
    </div>
    </>
  )
}

export default ProfileResetPage
