
import ProfileBrowse from "../../../../../components/ProfileBrowse/ProfileBrowse";
import "./Preferences.css";
import pright from "../../../../../assets/images/pright.svg";


const Preferences = () => {
  return (
    <>
      <div className="preferences ">
      <div className="preferencesHeader">
        <p>Preferences</p>
      </div>
      <div className="preferencesWrapper">
        <ProfileBrowse text="Default currency" img={pright}/>
        <ProfileBrowse text="Theme" img={pright}/>
        <ProfileBrowse text="Color" img={pright}/>
        <ProfileBrowse text="Languages" img={pright}/>
      </div>
    </div>
    </>
  )
}

export default Preferences;
