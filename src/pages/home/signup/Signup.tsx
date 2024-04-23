import "./signup.css";
import { NavLink , useNavigate } from "react-router-dom";
import axios from 'axios'
import { ChangeEvent, useState, FormEvent } from 'react'
import { toast , ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Button from "../../../components/Button/Button";
import Input from "../../../components/Input/Input";
import NavBar from "../../../components/NavBar/NavBar";
import Google from "../../../components/Google/Google";
import Apple from "../../../components/Apple/Apple";

interface ISignUp{
  fullname:string
  email:string
  phone:string
  password:string
}

const Signup = () => {
  const navigate = useNavigate()

    const [formData, setFormData] = useState<ISignUp>({
        fullname:"",
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
      const response = await axios.post('https://p2p-qrjp.onrender.com/api/v1/users/register', formData)
      console.log(response)
      setLoading(true)
      localStorage.setItem('otpId', response.data.otpIdForResendingOtp)
      toast.success(response.data.message,{
       onClose:()=>navigate("/verification")
      })
      setLoading(false)
   }
   catch(error:any){
      console.log(`Error in signup ${error}`);
      toast.error(error.response.data.message)
      setLoading(false)
   }
  };


  return (
    <div>
      <ToastContainer/>
      <NavBar />
      <div className="signup-container">
        <div className="form-wrapper">
          <div className="div-wrapper">
            <div className="heading">Create an Account</div>
            <div className="form-contents">
              <form onSubmit={handleSubmit}>
                <Input label="Full name" type="text" value={formData.fullname} onChange={handleInputChange} aria='fullname'/>
                <Input label="Email address" type="email" value={formData.email} onChange={handleInputChange} aria='email'/>
                <Input label="Phone number" type="number" value={formData.phone} onChange={handleInputChange} aria='phone'/>
                <Input label="Password" type="password" value={formData.password} onChange={handleInputChange} aria='password'/>
                <div className="continue-button">
                  <Button text='Continue' color="green" type="normal2" disabled={loading}/>
                </div>
              </form>
              <div className="account">
                <p>
                  Already have an account?{" "}
                  <span>
                    <NavLink to={"/login"}>Login </NavLink>
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="continue-wrapper">
            <NavLink to={'https://p2p-qrjp.onrender.com/api/v1/auth/google'}><Google/></NavLink>
            <Apple />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
