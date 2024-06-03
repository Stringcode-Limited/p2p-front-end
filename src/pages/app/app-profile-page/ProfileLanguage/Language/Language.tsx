import "./Language.css";
import reset from "../../../../../assets/images/reset.svg";
import ProfileBrowse from "../../../../../components/ProfileBrowse/ProfileBrowse";
import tickyes from "../../../../../assets/images/tickyes.svg";

const Language = () => {
    return (
        <>
            <div className="language">
                <div className="languageHeader">
                    <img src={reset} alt="" />
                    <p>Language</p>
                </div>

                <div className="languageWrapper">
                    <ProfileBrowse text="English" img={tickyes} />
                    <ProfileBrowse text="French" img={tickyes} display="hide" />
                    <ProfileBrowse text="Spanish" img={tickyes} display="hide" />
                    <ProfileBrowse text="Hausa" img={tickyes} display="hide" />
                    <ProfileBrowse text="Igbo" img={tickyes} display="hide" />
                    <ProfileBrowse text="Tiv" img={tickyes} display="hide" />
                    <ProfileBrowse text="Yoruba" img={tickyes} display="hide" />
                    <ProfileBrowse text="Igede" img={tickyes} display="hide" />
                    <ProfileBrowse text="Idoma" img={tickyes} display="hide" />
                    <ProfileBrowse text="Italian" img={tickyes} display="hide" />
                    <ProfileBrowse text="German" img={tickyes} display="hide" />
                    <ProfileBrowse text="Mexican" img={tickyes} display="hide" />
                    <ProfileBrowse text="Ghanian" img={tickyes} display="hide" />
                    <ProfileBrowse text="Swahili" img={tickyes} display="hide" />
                    <ProfileBrowse text="Zulu" img={tickyes} display="hide" />
                    <ProfileBrowse text="Arabic" img={tickyes} display="hide" />
                    
                </div>
            </div>
        </>
    )
}

export default Language
