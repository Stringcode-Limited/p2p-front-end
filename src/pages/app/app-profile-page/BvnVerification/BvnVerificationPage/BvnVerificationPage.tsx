import Bvn from "../Bvn/Bvn";
import BvnVerificationBody from "../BvnVerificationBody/BvnVerificationBody";
import "./BvnVerificationPage.css";

const BvnVerificationPage = () => {
  return (
    <>
    <div className="bvnVerificationPage">
      <BvnVerificationBody/>
      <Bvn/>
    </div>
    </>
  )
}

export default BvnVerificationPage
