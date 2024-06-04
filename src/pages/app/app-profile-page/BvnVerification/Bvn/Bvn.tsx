import "./Bvn.css";
import reset from "../../../../../assets/images/reset.svg";
import ResetOTP from "../../../../../components/ResetOTP/ResetOTP";
import questionmark from "../../../../../assets/images/questionmark.svg";

const Bvn = () => {
  return (
    <>
      <div className="bvnBody">
                <div className="bvnHeader">
                    <img src={reset} alt="" />
                    <p>BVN Verification</p>
                </div>

                
                
                <div className="bvnform">
                    <ResetOTP label="Enter your BVN" display="hide" img={questionmark} />
                    <button className="bvnBtn">Submit</button>
                </div>
            </div>
    </>
  )
}

export default Bvn
