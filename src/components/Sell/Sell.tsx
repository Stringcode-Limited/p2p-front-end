import { NavLink } from 'react-router-dom'
import './Sell.css'

function Sell() {
  return (
    <>
    <div className="Sell">
    <NavLink to={"/app"}><div className="buyButton">Buy</div></NavLink>
        <div className="sellButton">Sell</div>
    </div>
    </>
  )
}

export default Sell