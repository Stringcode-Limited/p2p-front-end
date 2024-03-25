import Button from '../Button/Button';
import './NavBar.css'
import { IoSearch } from "react-icons/io5";
import { LuSunDim } from "react-icons/lu";
import { FiMoon } from "react-icons/fi";
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <>
    <nav>
        <div className="logo">P2P APP</div>
        <div className="navs">
            <div className="navs1">
                <ul>
                    <li>Home</li>
                    <li>Contact Us</li>
                    <li>FAQs</li>
                </ul>
            </div>
            <div className="navs2">
                <ul>
                <li className='search login'><IoSearch /></li>
                <li className='login'><NavLink to={"/login"}>Login</NavLink></li>
                <li><NavLink to={"/signup"}><Button text='Sign Up' type='mini2'/></NavLink></li>
                <li>
                    <div className="mode">
                        <div className="light"><LuSunDim /></div>
                        <div className="dark"><FiMoon /></div>
                    </div>
                </li>
                </ul>
            </div>
        </div>
    </nav>
    </>
  )
}

export default NavBar