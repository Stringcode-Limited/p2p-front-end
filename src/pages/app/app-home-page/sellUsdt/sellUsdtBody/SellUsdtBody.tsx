import "./sellUsdtBody.css";
import left from "../../../../../assets/images/left.png";
import ProfileImage from "../../../../../assets/JohnDoe.png";
import ProfileDetails from "../../../../../components/ProfileDetails/ProfileDetails";
import clock from "../../../../../assets/images/clock.svg";




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
