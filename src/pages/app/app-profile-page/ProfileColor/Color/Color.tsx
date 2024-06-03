import "./Color.css";
import reset from "../../../../../assets/images/reset.svg";
import ProfileBrowse from "../../../../../components/ProfileBrowse/ProfileBrowse";
import tickyes from "../../../../../assets/images/tickyes.svg";
import color1 from "../../../../../assets/images/color1.svg";
import color2 from "../../../../../assets/images/color2.svg";
import color3 from "../../../../../assets/images/color3.svg";

const Color = () => {
    return (
        <>
            <div className="colorContent">
                <div className="colorHeader">
                    <img src={reset} alt="" />
                    <p>Color</p>
                </div>

                <div className="colorWrapper">
                    <ProfileBrowse color={color2} img={tickyes} />
                    <ProfileBrowse color={color3} img={tickyes} display="hide" />
                    <ProfileBrowse color={color1} img={tickyes} display="hide" />
                </div>
            </div>
        </>
    )
}

export default Color
