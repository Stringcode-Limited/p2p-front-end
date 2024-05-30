import AppProfileBody from '../../AppProfileBody/AppProfileBody'
import SetupBody from '../SetupBody/SetupBody'
import './SetupPage.css'

function SetupPage() {
  return (
    <>
    <div className="setupPage">
      <AppProfileBody/>
      <SetupBody/>
    </div>
    </>
  )
}

export default SetupPage