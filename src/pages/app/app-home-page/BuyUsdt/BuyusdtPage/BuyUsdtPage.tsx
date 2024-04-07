
import RecentOrders from '../../recentOrders/RecentOrders';
import BuyusdtBody from '../BuyusdtBody/BuyUsdtBody';
import "./BuyUsdtPage.css"
function BuyUsdtPage() {
  return (
    <div className='buyusdtpage'>
      <BuyusdtBody />
      <RecentOrders />
    </div>
  );
}

export default BuyUsdtPage;
