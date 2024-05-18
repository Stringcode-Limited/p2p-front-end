import { NavLink, Outlet } from "react-router-dom"
import "./appRouteWrapper.css";
import P2Papp from "../../P2Papp/P2Papp";
import { LuArrowRightLeft } from "react-icons/lu";
import { CgNotes } from "react-icons/cg";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { IoWalletOutline } from "react-icons/io5";
import { LiaSignOutAltSolid } from "react-icons/lia";
import { FaRegUser } from "react-icons/fa6";


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
             
                <NavLink to={"/app"} ><LuArrowRightLeft />P2P</NavLink>
              </li>
              <li>
                
                <NavLink to={"/app/order"}><CgNotes />Orders</NavLink>
              </li>
              <li>
                
                <NavLink to={"/app/pitch"}><HiOutlineSpeakerphone />Pitch</NavLink>
              </li>
              <li>
                
                <NavLink to={"/app/wallet"}><IoWalletOutline />Wallet</NavLink>
              </li>
              <li>
                
                <NavLink to={"/app/profile"}><FaRegUser />Profile</NavLink>
              </li>
              <li>
                
                <NavLink to={"/app/signout"}><LiaSignOutAltSolid fill="#B3261E"/>Sign Out</NavLink>
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