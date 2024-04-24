import "./emailSmsVerification.css";
import Button from "../../../components/Button/Button";
import NavBar from "../../../components/NavBar/NavBar";
import OTP from "../../../components/OTP/OTP";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { ChangeEvent, FormEvent, useState } from "react";
import axios from "axios";
import { toast , ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

interface IVerification{
    emailOTP:string
    smsOTP:string
  }

const EmailSmsVerification = () => {

    const navigate = useNavigate()

    const oldOtp = localStorage.getItem('otpId');

    const [formData, setFormData] = useState<IVerification>({
        emailOTP:"",
        smsOTP:""
    })
    const [disabled, setDisabled] = useState(true);

    useEffect(() => {
       const timer = setTimeout(() => setDisabled(false), 60000);
       return () => clearTimeout(timer);
    }, []);

    const setDisabledState = () => {
        setDisabled(true);
    }

    const handleInputChange=(e:ChangeEvent<HTMLInputElement>)=>{
        const {name, value} = e.target
        setFormData((prevData)=>({...prevData, [name]:value}))
    }

    const handleSubmit = async(e:FormEvent) => {
        if (disabled) {
            toast.error('Please wait for 60 seconds before trying again');
            return;
        }
        e.preventDefault();
        console.log(formData)
        try{
            const response = await axios.post('https://p2p-qrjp.onrender.com/api/v1/users/verifyotp', formData)
            console.log(response)
            setDisabledState();
            setTimeout(() => setDisabled(false), 6000);
            toast.success(response.data.message,{
             onClose:()=>navigate("/login")
            })
         }
         catch(error:any){
            console.log(`Error in signup ${error}`);
            toast.error(error.response.data.message)
         }
    }

    const handleEmailResend = async() =>{
        if (disabled) {
          toast.error('Please wait for 60 seconds before trying again');
          return;
        }
        try {
            const response = await axios.put('https://p2p-qrjp.onrender.com/api/v1/users/resendotp', {
            oldOtp,
            resendEmailOTP:true,
            resendSmsOTP:false
            })
            setDisabledState();
            setTimeout(() => setDisabled(false), 6000);
            toast.success(response.data.message)
        } 
        catch (error:any) {
            console.log(`Error in signup ${error}`);
            toast.error(error.response.data.message)
        }
    }

    const handleSmsResend = async() =>{
        if (disabled) {
          toast.error('Please wait for 60 seconds before trying again');
          return;
        }
        try {
            const response = await axios.put('https://p2p-qrjp.onrender.com/api/v1/users/resendotp', {
            oldOtp,
            resendEmailOTP:false,
            resendSmsOTP:true
            })
            setDisabledState();
            setTimeout(() => setDisabled(false), 6000);
            toast.success(response.data.message)
        } 
        catch (error:any) {
            console.log(`Error in signup ${error}`);
            toast.error(error.response.data.message)
        }
    }

  return (
    <div>
        <ToastContainer/>
      <NavBar />
      <div className="veri-container">
        <div className="form-wrapper">
          <div className="div-wrapper">
            <div className="heading">Email & SMS Verification</div>
            <div className="form-contents">
              <form onSubmit={handleSubmit}>
                <OTP label="Email OTP" value={formData.emailOTP} onChange={handleInputChange} aria='emailOTP' onClick={handleEmailResend}/>
                <OTP label="SMS OTP" value={formData.smsOTP} onChange={handleInputChange} aria='smsOTP' onClick={handleSmsResend}/>
                <div className="continue-button">
                    <button className='submit' type="submit">
                  <Button text="Finish" color="green" type="normal2" />
                    </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailSmsVerification;
