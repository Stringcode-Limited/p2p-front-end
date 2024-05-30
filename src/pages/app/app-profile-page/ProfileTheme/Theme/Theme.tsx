import "./Theme.css";
import reset from "../../../../../assets/images/reset.svg";

const Theme = () => {
    return (
        <>
            <div className="theme">
                <div className="themeHeader">
                    <img src={reset} alt="" />
                    <p>Theme</p>
                </div>
            </div>
        </>
    )
}

export default Theme
