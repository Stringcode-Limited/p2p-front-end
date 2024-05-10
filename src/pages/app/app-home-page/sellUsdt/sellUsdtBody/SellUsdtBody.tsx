import "./sellUsdtBody.css";
import left from "../../../../../assets/images/left.png";
import ProfileImage from "../../../../../assets/images/JohnDoe.png"
import ProfileDetails from "../../../../../components/ProfileDetails/ProfileDetails";
import clock from "../../../../../assets/images/clock.svg";
import Fiat from "../../../../../components/Fiat/Fiat";
import Button from "../../../../../components/Button/Button";
import Loading from "../../../../../assets/images/loading.png";
import naira from "../../../../../assets/images/naira.png";
import arrowside from "../../../../../assets/images/arrowside.png";
import range from "../../../../../assets/images/range.png";


const SellUsdtBody = () => {
  return (
    <>
      <div className="sellUsdtBody">
        <div className="top">
          <img src={left} />
          <p className="orders">Waiting for payment</p>
        </div>

        <div className="center">
          <div className="box4">
            <div className="sellCard">
              <div className="sellamount">
                <img className="naira" src={naira} alt="" />
                <p>1,430.00</p>
                <img className="loading" src={Loading} alt="" />
              </div>
              <Fiat />
              
              <div className="enteramount">
                <div className="enterwrapper">
                <img className="naira" src={naira} alt="" />
                <input type="text" placeholder="Enter amount" />
                </div>
                <p>All</p>
              </div>

              <div className="range">
              <img src={range}  alt="" />
              </div>

              <div className=" flex youwill">
                <p>You will pay</p>
                <p>--NGN</p>
              </div>
              <div className="flex youwill">
                <p>You will recieve</p>
                <p>--USDT</p>
              </div>
              <div className="flex paymentAccount">
                <p>Select a payment account</p>
                <img src={arrowside} alt="" />

              </div>
              <Button text="SELL" color="red" route="" type="large2" />
            </div>
            <div className="title">Ad details</div>
            <div className="details">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          </div>

          <div className="box4">
            <div className="title border borderTop">Buyer's profile</div>
          </div>
          <div className="profileWrapper">
            <ProfileDetails fullName="John Doe" name="Doemoney" image={ProfileImage} display="hide" />
            <img src={clock} alt="" />
          </div>

          <div className="box4">
            <div className="title border reviewTop">Reviews & rating</div>
          </div>
          <div className="profileWrapper">
            <ProfileDetails fullName="John Doe" name="Doemoney" image={ProfileImage} display="hide" />
          </div>
          <div className="box4">
            <div className="details">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default SellUsdtBody
