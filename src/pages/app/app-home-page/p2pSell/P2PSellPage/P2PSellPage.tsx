import RecentOrders from '../../recentOrders/RecentOrders'
import P2PSellBody from '../P2PSellBody/P2PSellBody'
import './P2PSellPage.css'

function P2PSellPage() {
  return (
    <>
    <div className="p2pSellPage">
        <P2PSellBody/>
        <RecentOrders/>
    </div>
    </>
  )
}

export default P2PSellPage