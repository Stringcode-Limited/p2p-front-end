import { NavLink, Outlet } from "react-router-dom"
import "./style.css";
import P2Papp from "../../P2Papp/P2Papp";
import { LuArrowRightLeft } from "react-icons/lu";
import { CgNotes } from "react-icons/cg";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { IoWalletOutline } from "react-icons/io5";
import { LiaSignOutAltSolid } from "react-icons/lia";
import { FaRegUser } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";

function AppRouteWrapper() {
  return (
    <>

      <div className="app__container">
        <div className="sidebarWrapper">
          <div className="logoWrapper">
            <P2Papp />
          </div>
          <div className="sidebar">
            <ul>
              <li>
                <div><LuArrowRightLeft /></div>
                <NavLink to={"/app"} >P2P</NavLink>
              </li>
              <li>
                <div><CgNotes /></div>
                <NavLink to={"/app/order"}>Orders</NavLink>
              </li>
              <li>
                <div><HiOutlineSpeakerphone /></div>
                <NavLink to={"/app/pitch"}>Pitch</NavLink>
              </li>
              <li>
                <div><IoWalletOutline /></div>
                <NavLink to={"/app/wallet"}>Wallet</NavLink>
              </li>
              <li>
                <div><FaRegUser /></div>
                <NavLink to={"/app/profile"}>Profile</NavLink>
                <div><IoIosArrowDown /></div>
              </li>
              <li>
                <div><LiaSignOutAltSolid fill="#B3261E"/></div>
                <NavLink to={"/app/signout"}>Sign Out</NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="app__content">
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default AppRouteWrapper