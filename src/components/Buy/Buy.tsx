import { NavLink } from 'react-router-dom'
import './Buy.css'

function Buy() {
  return (
    <>
    <div className="Buy">
        <div className="buyButton">Buy</div>
        <NavLink to={"/app/P2Psell"}><div className="sellButton">Sell</div></NavLink>
    </div>
    </>
  )
}

export default Buy