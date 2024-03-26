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
            <div className="login-container">
                <div className="form-wrapper">
                    <div className="div-wrapper">
                        <div className="heading">Login</div>
                        <div className="form-contents">
                            <Input label="Username/Email/Phone number" type="text" />
                            <Input label="Password" type="password" />
                            <div className="login-button">
                            <Button text="Login" color="green" type="normal2" />
                            </div>
                            <div className="account">
                                <p className="have-an-account">Don't have an account? <span><NavLink to={""}>Sign up</NavLink></span></p>
                                <div className="forgot-password">
                                    <NavLink to={""}>Forgot Password?</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="continue-wrapper">
                        <Google />
                        <Apple />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Login
