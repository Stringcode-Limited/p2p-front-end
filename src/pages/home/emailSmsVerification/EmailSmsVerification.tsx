import "./emailSmsVerification.css";
import Button from "../../../components/Button/Button";
import NavBar from "../../../components/NavBar/NavBar";
import OTP from "../../../components/OTP/OTP";
import arrowleft from "../../../assets/images/arrowleft.svg";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { FormEvent, useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const EmailSmsVerification = () => {
  const [disabled, setDisabled] = useState(true);
  const [timeLeft, setTimeLeft] = useState(60);
  const [otp, setOtp] = useState('');

  const oldOtp = localStorage.getItem('otpId');
  const navigate = useNavigate();

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

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://p2p-qrjp.onrender.com/api/v1/users/verifyotp', { otp });
      setDisabledState();
      setTimeout(() => setDisabled(false), 6000);
      toast.success(response.data.message);
      setTimeout(() => navigate('/login'), 2000);
    }
    catch (error: any) {
      console.log(`Error in signup ${error}`);
      toast.error(error.response.data.message)
    }
  }

  const handleOtpResend = async () => {
    setDisabledState();
    try {
      const response = await axios.put('https://p2p-qrjp.onrender.com/api/v1/users/resendotp', { oldOtp })
      toast.success(response.data.message)
    }
    catch (error: any) {
      console.log(`Error in signup ${error}`);
      toast.error(error.response.data.message)
    }
  }

  return (
    <div>
      <ToastContainer />
      <div className="back">
        <img src={arrowleft} alt="" />
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
                <div className="otp">
                  <p className="label">Enter 6 digit otp</p>
                  <OTP
                    separator={<span>-</span>}
                    value={otp}
                    onChange={setOtp}
                    length={6}
                  />
                </div>
                {!disabled && (
                  <div className="resend">
                    <p className="resend-text" onClick={handleOtpResend}>Resend Otp</p>
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
