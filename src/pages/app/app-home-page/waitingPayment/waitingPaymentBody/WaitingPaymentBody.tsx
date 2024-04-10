import "./waitingPaymentBody.css";
import left from "../../../../../assets/images/left.png";
import clock from "../../../../../assets/images/clock.svg";
import PaymentCard from "../../../../../components/PaymentCard/PaymentCard";
import Button from "../../../../../components/Button/Button";
import HelpButton from "../../../../../components/HelpButton/HelpButton";
import ProfileDetails from "../../../../../components/ProfileDetails/ProfileDetails";
import ProfileImage from "../../../../../assets/images/JohnDoe.png";

const WaitingPaymentBody = () => {
  return (
    <>
      <div className="waitingPaymentBody">
        <div className="top">
          <img src={left} />
          <p className="orders">Waiting for payment</p>
        </div>
         <div className="profile"> 
        <ProfileDetails fullName="John Doe" name="Doemoney" image={ProfileImage} display="show"/>
        </div>
        <div className="box1">
          <div className="text">
            <img src={clock} />
            <p>You will recieve payment within</p>
            <p className="time">10:00</p>
          </div>

        </div>
        <div className="center">

          <div className="box2 normalWidth">
            <p>
              The seller's asset is being held in escrow by p2p app and will be delivered to you as soon as you make payment and the seller confirms it
            </p>
          </div>
          <div className="box3">
            <PaymentCard />
          </div>


        </div>
        <div className="box2 smallWidth ">
          <p>
            click 'payment received' as soon as you recieve and confirm payment
          </p>
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
            <div className="title">My payment account</div>
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
          <div className="box5">
            <Button text="Payment received" type="large3" color="grey2" />
            <HelpButton classes="btn grey large3 helpButton" />
          </div>
        </div>
      </div>
    </>
  )
}

export default WaitingPaymentBody;
