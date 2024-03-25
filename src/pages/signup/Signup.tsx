import "./signup.css";
import { NavLink } from "react-router-dom";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import NavBar from "../../components/NavBar/NavBar";
import Google from "../../components/Google/Google";
import Apple from "../../components/Apple/Apple";

const Signup = () => {
  return (
    <div>
            <NavBar />
            <div>
                <div>
                    <div>
                    <div>Create an Account</div>
                    <Input label="Full name" type="text" />
                    <Input label="Email address" type="email" />
                    <Input label="Phone number" type="number" />
                    <Button text="Continue" color="green" type="normal2" />
                    <div>Already have an account? <span><NavLink to={""}>Login </NavLink></span></div>
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

export default Signup
