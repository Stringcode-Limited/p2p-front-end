import { NavLink } from "react-router-dom";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import NavBar from "../../components/NavBar/NavBar";
import "./login.css";
import Google from "../../components/Google/Google";
import Apple from "../../components/Apple/Apple";


const Login = () => {
    return (
        <div>
            <NavBar />
            <div>
                <div>
                    <div>
                    <div>login</div>
                    <Input label="Username/Email/Phone number" type="text" />
                    <Input label="Password" type="password" />
                    <Button text="Login" color="green" type="normal2" />
                    <div>Don't have an account? <span><NavLink to={""}>Sign up</NavLink></span></div>
                    <div>
                        <NavLink to={""}>Forgot Password?</NavLink>
                    </div>
                    </div>
                    <div>
                      <Google/>  
                      <Apple/>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Login
