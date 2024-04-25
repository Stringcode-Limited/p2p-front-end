import { NavLink, useNavigate } from "react-router-dom";
import Button from "../../../components/Button/Button";
import Input from "../../../components/Input/Input";
import NavBar from "../../../components/NavBar/NavBar";
import "./login.css";
import Google from "../../../components/Google/Google";
import Apple from "../../../components/Apple/Apple";
import { ChangeEvent, FormEvent, useState } from "react";
import axios from "axios";
import Cookies from 'js-cookie';
import { ToastContainer, toast } from "react-toastify";

interface ILogin{
    email:string
    phone:string
    password:string
  }

const Login = () => {
    const navigate = useNavigate()
    
    const [formData, setFormData] = useState<ILogin>({
        email:"",
        phone:"",
        password:""
    })
    
    const [loading, setLoading] = useState(false)

    const handleInputChange=(e:ChangeEvent<HTMLInputElement>)=>{
        const {name, value} = e.target
        setFormData((prevData)=>({...prevData, [name]:value}))
    }

    const handleSubmit = async(e:FormEvent) => {
        e.preventDefault();
        setLoading(true)
        
        try{
          const response = await axios.post('https://p2p-qrjp.onrender.com/api/v1/users/login', formData)
          console.log(response)
          setLoading(true)
          Cookies.set('token', response.data.token, { expires: 1 });
          localStorage.setItem('userData', response.data.user)
          toast.success(response.data.message,{
           onClose:()=>navigate("/app")
          })
          setLoading(false)
       }
       catch(error:any){
          console.log(`Error in login ${error}`);
          toast.error(error.response.data.message)
          setLoading(false)
       }
      };

    return (
        <div>
            <ToastContainer/>
           <div className="navcontainer">
            <NavBar />
            </div>
            <div className="login-container">
                <div className="form-wrapper">
                    <div className="div-wrapper">
                        <div className="heading">Login</div>
                        <div className="form-contents">
                            <form onSubmit={handleSubmit}>
                            <Input label="Email/Phone number" type="text" value={formData.email || formData.phone} onChange={handleInputChange} aria='email'/>
                            <Input label="Password" type="password" value={formData.password} onChange={handleInputChange} aria='password'/>
                            
                                <div className="login-button">
                                    <Button text="Login" color="green" type="normal2" disabled={loading}/>
                                </div>
                            </form>
                            
                                <div className="account">
                                    <p className="have-an-account">Don't have an account? <span><NavLink to={"/signup"}>Sign up</NavLink></span></p>
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
