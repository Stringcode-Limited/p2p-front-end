import { NavLink, Outlet } from "react-router-dom"
import "./style.css"
function AppRouteWrapper() {
  return (
    <>
        <div className="app__container">
            <div className="sidebar">
                <ul>
                  <li>
                    <NavLink to={"/app"}>Home</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/app/order"}>Order</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/app/pitch"}>Pitch</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/app/wallet"}>Wallet</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/app/settings"}>Settings</NavLink>
                  </li>
                </ul>
            </div>
            <div className="app__content">
                <Outlet />
            </div>
        </div>
    </>
  )
}

export default AppRouteWrapper