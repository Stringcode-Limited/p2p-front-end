import "./setup.css";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import NavBar from "../../components/NavBar/NavBar";
import { NavLink } from "react-router-dom";

const Setup = () => {
    return (
        <div>
            <NavBar />
            <div className="setup-container">
                <div className="form-wrapper">
                    <div className="div-wrapper">
                        <div className="heading">Setup your account</div>
                        <div className="form-contents">
                            <Input label="Username" type="text" />
                            <Input label="Password" type="password" />
                            <Input label="Confirm password" type="password" />
                        </div>
                        <div className="finish-button">
                            <NavLink to={"/app"}><Button text="Finish" color="green" type="normal2" /></NavLink>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Setup
