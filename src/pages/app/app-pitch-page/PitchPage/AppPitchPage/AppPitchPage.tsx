
import AppPitchBody from "../AppPitchBody/AppPitchBody";
import CreatePitch from "../CreatePitch/CreatePitch";
import "./AppPitchPage.css";


function AppPitchPage() {
  return (
    <>
    <div className="appPitchPage">
      <AppPitchBody />
      <CreatePitch price="Lowest price" display="show"/>
    </div>
    </>
  )
}

export default AppPitchPage