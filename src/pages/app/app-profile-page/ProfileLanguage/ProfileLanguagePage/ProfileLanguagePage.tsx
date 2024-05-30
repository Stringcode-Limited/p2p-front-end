import Language from "../Language/Language";
import ProfileLanguageBody from "../ProfileLanguageBody/ProfileLanguageBody";
import "./ProfileLanguagePage.css";

const ProfileLanguagePage = () => {
    return (
        <>
            <div className="profileLanguagePage">
                <ProfileLanguageBody />
                <Language />
            </div>
        </>
    )
}

export default ProfileLanguagePage;
