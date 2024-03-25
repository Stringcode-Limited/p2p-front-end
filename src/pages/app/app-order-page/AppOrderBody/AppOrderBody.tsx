import './AppOrderBody.css'
import left from '../../../../assets/images/left.png'
import Search from '../../../../components/Search/Search'

function AppOrderBody() {
  return (
    <>
        <div className="orderBody">
            <div className="top">
                <img src={left}/>
                <p className='orders'>Orders</p>
            </div>
            <Search/>
        </div>
    </>
  )
}

export default AppOrderBody