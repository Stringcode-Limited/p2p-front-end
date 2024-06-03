import "./Theme.css";
import reset from "../../../../../assets/images/reset.svg";
import ProfileBrowse from "../../../../../components/ProfileBrowse/ProfileBrowse";
import tickyes from "../../../../../assets/images/tickyes.svg";

const Theme = () => {
    return (
        <>
            <div className="theme">
                <div className="themeHeader">
                    <img src={reset} alt="" />
                    <p>Theme</p>
                </div>

                <div className="themeWrapper">
                    <ProfileBrowse text="Light theme" img={tickyes} />
                    <ProfileBrowse text="Dark theme" img={tickyes} display="hide" />
                </div>
            </div>
        </>
    )
}

export default Theme
