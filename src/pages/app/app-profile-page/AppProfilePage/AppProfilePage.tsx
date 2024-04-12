import RecentTransactions from '../../app-order-page/RecentTransactions/RecentTransactions'
import AppProfileBody from '../AppProfileBody/AppProfileBody'
import './AppProfilePage.css'

function AppProfilePage() {
    return (
      <>
      <div className="appProfilePage">
        <AppProfileBody/>
        <RecentTransactions/>
      </div>
      </>
    )
  }
  
  export default AppProfilePage