import "./profileDetails.css";
import medal from "../../assets/images/medal.svg";
import Vector from "../../assets/images/Vector.jpg";

interface IProfile {
    image: string;
    fullName: string;
    name: string;
    display: "show" | "hide";
}

const ProfileDetails = ({ image, fullName, name, display }: IProfile) => {
    return (
        <>
            <div className="details">
                <div className="user">
                    <div className="picture">
                        <img src={image} />
                    </div>
                    <div className="name">
                        <p className="name1">{fullName} <img src={medal} /></p>
                        <p className="name2">@{name}</p>
                    </div>
                    <div className={display}>
                        <img className="vector" src={Vector} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfileDetails
