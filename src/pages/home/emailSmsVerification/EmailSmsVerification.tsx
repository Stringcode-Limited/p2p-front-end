import "./emailSmsVerification.css";
import Button from "../../../components/Button/Button";
import NavBar from "../../../components/NavBar/NavBar";
import OTP from "../../../components/OTP/OTP";
import arrowleft from "../../../assets/images/arrowleft.svg";
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

    const navigate = useNavigate();

    const oldOtp = localStorage.getItem('otpId');

    const [formData, setFormData] = useState<IVerification>({
        emailOTP:"",
        smsOTP:""
    })
    const [disabled, setDisabled] = useState(true);
    const [timeLeft, setTimeLeft] = useState(60);

    useEffect(() => {
      let timer: ReturnType<typeof setTimeout> | null = null;
      if (disabled) {
          setTimeLeft(60);
          timer = setInterval(() => {
              setTimeLeft((prevTime) => {
                  const newTime = prevTime - 1;
                  if (newTime <= 0) {
                      setDisabled(false);
                      if (timer) clearInterval(timer);
                  }
                  return newTime;
              });
          }, 1000);
      } else {
          setTimeLeft(60);
          if (timer) clearInterval(timer);
      }
      return () => {
          if (timer) clearInterval(timer);
      };
  }, [disabled]);

    const setDisabledState = () => {
        setDisabled(true);
    }

    const handleInputChange=(e:ChangeEvent<HTMLInputElement>)=>{
        const {name, value} = e.target
        setFormData((prevData)=>({...prevData, [name]:value}))
    }

    const handleSubmit = async(e:FormEvent) => {
        e.preventDefault();
        try{
            const response = await axios.post('https://p2p-qrjp.onrender.com/api/v1/users/verifyotp', formData)
            console.log(response)
            setDisabledState();
            setTimeout(() => setDisabled(false), 6000);
            toast.success(response.data.message);
            setTimeout(() => navigate('/login'), 2000);
         }
         catch(error:any){
            console.log(`Error in signup ${error}`);
            toast.error(error.response.data.message)
         }
    }

    const handleEmailResend = async() =>{
        setDisabledState();
        try {
            const response = await axios.put('https://p2p-qrjp.onrender.com/api/v1/users/resendotp', {
            oldOtp,
            resendEmailOTP:true,
            resendSmsOTP:false
            })
            toast.success(response.data.message)
        } 
        catch (error:any) {
            console.log(`Error in signup ${error}`);
            toast.error(error.response.data.message)
        }
    }

    const handleSmsResend = async() =>{
        setDisabledState();
        try {
            const response = await axios.put('https://p2p-qrjp.onrender.com/api/v1/users/resendotp', {
            oldOtp,
            resendEmailOTP:false,
            resendSmsOTP:true
            })
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
      <div className="back">
            <img src={arrowleft} alt=""  />
            </div>
            <div className="navcontainer">
            <NavBar />
      </div>
      <div className="veri-container">
        <div className="form-wrapper">
          <div className="div-wrapper">
            <div className="heading">Email & SMS Verification</div>
            <div className="form-contents">
              <form onSubmit={handleSubmit}>
                  <>
                    <OTP label="Email OTP" value={formData.emailOTP} onChange={handleInputChange} aria='emailOTP'/>
                    <OTP label="SMS OTP" value={formData.smsOTP} onChange={handleInputChange} aria='smsOTP'/>
                  </>
                  {!disabled && (
                    <div className="resend">
                      <button className="resend-email" onClick={handleEmailResend}>Resend Email</button>
                      <button className="resend-sms" onClick={handleSmsResend}>Resend SMS</button>
                    </div>       
                  )}
                {disabled && (<p>{timeLeft} seconds remaining until you can resend</p>)}
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
