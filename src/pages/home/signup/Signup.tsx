import "./signup.css";
import { NavLink } from "react-router-dom";
import Button from "../../../components/Button/Button";
import Input from "../../../components/Input/Input";
import NavBar from "../../../components/NavBar/NavBar";
import Google from "../../../components/Google/Google";
import Apple from "../../../components/Apple/Apple";

const Signup = () => {
  return (
    <div>
      <div className="navcontainer">
      <NavBar />
      </div>
      <div className="signup-container">
        <div className="form-wrapper">
          <div className="div-wrapper">
            <div className="heading">Create an Account</div>
            <div className="form-contents">
              <Input label="Full name" type="text" />
              <Input label="Email address" type="email" />
              <Input label="Phone number" type="number" />
              <div className="continue-button">
                <NavLink to={"/verification"}><Button text="Continue" color="green" type="normal2" /></NavLink>
              </div>
              <div className="account">
                <p>Already have an account? <span><NavLink to={""}>Login </NavLink></span></p>
                <div className="forgot">
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

export default Signup
