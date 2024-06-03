import "./ProfileBrowse.css";

interface IProfileBrowse {
    text: string;
    img: string;
    display?: "hide" | "show"
}
const ProfileBrowse = ({ text, img, display }: IProfileBrowse) => {
    return (
        <>
            <div className="profileBrowse">
                <div className="left">
                    {text}
                </div>
                <div className="right">
                    <img className={display} src={img} alt="" />
                </div>
            </div>
        </>
    )
}

export default ProfileBrowse
