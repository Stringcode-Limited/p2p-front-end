import RecentTransactions from '../../../app-order-page/RecentTransactions/RecentTransactions'
import ManageCryptoBody from '../ManageCryptoBody/ManageCryptoBody'
import './ManageCryptoPage.css'
function ManageCryptoPage() {
  return (
    <>
        <div className="manageCryptoPage">
            <ManageCryptoBody/>
            <RecentTransactions/>
        </div>
    </>
  )
}

export default ManageCryptoPage