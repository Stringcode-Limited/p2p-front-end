import "./PitchPrice.css";
import pitchPlus from "../../assets/images/pitchplus.svg";
import pitchMinus from "../../assets/images/pitchminus.svg";

interface IPitch {
    label: string;
    price: string;
   
}

const PitchPrice = ({ label, price }: IPitch) => {
    return (
        <>
            <div className="pitchPriceWrapper">
                <p className="pitchLabel">{label}</p>
                <div className="pitchinputBorder" >
                    
                    <img src={pitchMinus} alt=""/>
                    <span>{price}</span>
                    <img src={pitchPlus} alt="" />
                    

                </div>
            </div>
        </>
    )
}

export default PitchPrice;
