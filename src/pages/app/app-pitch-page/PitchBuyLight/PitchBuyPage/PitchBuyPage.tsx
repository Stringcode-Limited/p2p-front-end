import CreatePitch from "../../PitchPage/CreatePitch/CreatePitch";
import PitchBuyBody from "../PitchBuyBody/PitchBuyBody"
import "./PitchBuyPage.css";

const PitchBuyPage = () => {
  return (
    <>
    <div className="pitchBuyPage">
      <PitchBuyBody />
      <CreatePitch price="Highest price" display="hide"/>
    </div>
    </>
  )
}

export default PitchBuyPage
