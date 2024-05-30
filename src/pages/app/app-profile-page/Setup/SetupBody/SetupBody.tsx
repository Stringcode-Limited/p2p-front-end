import SecurityCard from '../../../../../components/SecurityCard/SecurityCard'
import './SetupBody.css'
import reset from "../../../../../assets/images/reset.svg";

function SetupBody() {
  return (
    <>
      <div className="setupBody">
                <div className="setupBodyHeader">
                    <img src={reset} alt="" />
                    <p>Transaction PIN</p>
                </div>
                <div className="setupBodyWrapper">
                <SecurityCard text="Setup transaction PIN"/>
                </div>
                

            </div>
    </>
  )
}

export default SetupBody