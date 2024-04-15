import "./FundBody.css";
import left from "../../../../../assets/images/left.png";
import Dropdown from "../../../../../components/Dropdown/Dropdown";
import QRCode from "../../../../../assets/images/QRCode.svg";
import Share from "../../../../../assets/images/Share.svg";
import CopyIcon from "../../../../../assets/images/CopyIcon.svg";

const FundBody = () => {
    return (
        <>
            <div className="fundBody">
                <div className="top">
                    <img src={left} />
                    <p className="orders">Fund</p>
                </div>

                <div className="fundWalletWrapper">
                    <div className="fundWallet">
                        <p>Fund your crypto wallet</p>
                        <Dropdown title="USDT" width="widthNormal" list={["UDST", "BTC", "ETH", "LTC", "SOL", "XPR"]} />
                    </div>
                    
                    <img className="qrImg" src={QRCode} />
                    <div className="qrContainer">
                    <div className="qrcode">
                        <p>TV7fRasWWEJj4PUQgVRW2L</p>
                        <p>T9MTPWKUB8h4</p>
                    </div>
                    <div className="copyShare">
                        <div>
                            <img src={CopyIcon} alt="" />
                            <p>Copy</p>
                        </div>
                        <div>
                            <img src={Share} alt="" />
                            <p>Share</p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FundBody
