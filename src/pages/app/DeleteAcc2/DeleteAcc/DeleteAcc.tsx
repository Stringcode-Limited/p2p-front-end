import "./DeleteAcc.css";
import reset from "../../../../assets/images/reset.svg";
import ResetOTP from "../../../../components/ResetOTP/ResetOTP";
import DeleteInstruction from "../../../../components/DeleteInstruction/DeleteInstruction";

const DeleteAcc = () => {
  return (
    <>
      <div className="deleteAccBody">
                <div className="deleteAccHeader">
                    <img src={reset} alt="" />
                    <p>Delete account</p>
                </div>

                <DeleteInstruction notes="Kindly enter your login password to proceed"/>
                
                <div className="deleteAccform">
                    <ResetOTP label="Password" display="hide" />
                    <button className="deleteAccBtn">Delete Account</button>
                </div>
            </div>
    </>
  )
}

export default DeleteAcc
