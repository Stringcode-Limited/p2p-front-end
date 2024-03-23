import { NavLink, Outlet } from "react-router-dom"
import "./appRouteWrapper.css";
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
                
                <NavLink to={"/app"} ><div><LuArrowRightLeft  /></div>P2P</NavLink>
              </li>
              <li>
                
                <NavLink to={"/app/order"}><div><CgNotes /></div>Orders</NavLink>
              </li>
              <li>
                
                <NavLink to={"/app/pitch"}><div><HiOutlineSpeakerphone /></div>Pitch</NavLink>
              </li>
              <li>
                
                <NavLink to={"/app/wallet"}><div><IoWalletOutline /></div>Wallet</NavLink>
              </li>
              <li>
                
                <NavLink to={"/app/profile"}><div><FaRegUser /></div>Profile</NavLink>
                <div><IoIosArrowDown /></div>
              </li>
              <li>
                
                <NavLink to={"/app/signout"}><div><LiaSignOutAltSolid fill="#B3261E"/></div>Sign Out</NavLink>
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