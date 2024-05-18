import Reset from "../Reset/Reset"
import ResetPasswordBody from "../ResetPasswordBody/ResetPasswordBody"
import "./ResetPasswordPage.css"

const ResetPasswordPage = () => {
  return (
    <>
    <div className="resetPasswordPage">
      <ResetPasswordBody/>
      <Reset/>
    </div>
    </>
  )
}

export default ResetPasswordPage
