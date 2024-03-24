import "./OTP.css";

interface IOTP {
  label: string;
}

function OTP({ label }: IOTP) {
  return (
    <>
      <div className="otp">
        <label htmlFor={label}>{label}</label>
        <div className="container">
          <input type="number" name={label} />
          <p className="resend">Resend</p>
        </div>
      </div>
    </>
  );
}

export default OTP;
