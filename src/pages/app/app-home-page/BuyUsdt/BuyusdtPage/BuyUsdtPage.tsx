
import RecentOrders from '../../recentOrders/RecentOrders';
import BuyusdtBody from '../Buyusdtbody/BuyusdtBody';
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
