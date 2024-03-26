import './AppOrderBody.css'
import left from '../../../../assets/images/left.png'
import Search from '../../../../components/Search/Search'
import OrderCard from '../../../../components/OrderCard/OrderCard'
import image from './image.png'
import Pending from '../../../../components/Pending/Pending'

function AppOrderBody() {
  return (
    <>
        <div className="orderBody">
            <div className="top">
                <img src={left}/>
                <p className='orders'>Orders</p>
            </div>
            <div className="center">
            <Search/>
            <Pending/>
            </div>
            <div className="bottom">
              <OrderCard fullName='Marcus Lipshutz' name='Marcusl' price='1,430.00' quantity={69.93} type='BUY' image={image}/>
              <OrderCard fullName='Marcus Lipshutz' name='Marcusl' price='1,430.00' quantity={69.93} type='BUY' image={image}/>
              <OrderCard fullName='Marcus Lipshutz' name='Marcusl' price='1,430.00' quantity={69.93} type='BUY' image={image}/>
              <OrderCard fullName='Marcus Lipshutz' name='Marcusl' price='1,430.00' quantity={69.93} type='BUY' image={image}/>
            </div>
        </div>
    </>
  )
}

export default AppOrderBody