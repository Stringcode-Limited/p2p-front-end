import "./setup.css";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import NavBar from "../../components/NavBar/NavBar";

const Setup = () => {
    return (
        <div>
            <NavBar />
            <div className="setup-container">
                <div className="form-wrapper">
                    <div>
                        <div>Setup your account</div>
                        <Input label="Username" type="text" />
                        <Input label="Password" type="password" />
                        <Input label="Confirm password" type="password" />
                        <Button text="Finish" color="green" type="normal2" />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Setup
