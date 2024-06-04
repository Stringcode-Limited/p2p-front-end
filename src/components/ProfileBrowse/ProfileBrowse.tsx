import "./ProfileBrowse.css";

interface IProfileBrowse {
    text?: string
    img: string
    display?: "hide" | "show"
    color?: string
}
const ProfileBrowse = ({ text, img, display, color }: IProfileBrowse) => {
    return (
        <>
            <div className="profileBrowse">
                <div className="left">
                    {text}
                    <img src={color} alt="" />
                </div>
                <div className="right">
                    <img className={display} src={img} alt="" />
                </div>
            </div>
        </>
    )
}

export default ProfileBrowse
