import "./ReleasingCryptoBody.css";
import left from "../../../../../assets/images/left.png";
import clock from "../../../../../assets/images/clock.svg";
import circle1 from "../../../../../assets/images/circle1.svg";
import PaymentCard from "../../../../../components/PaymentCard/PaymentCard";
import Button from "../../../../../components/Button/Button";
import HelpButton from "../../../../../components/HelpButton/HelpButton";

function ReleasingCryptoBody() {


  return (
    <>
      <div className="releasingCryptoBody">
        <div className="top">
          <img src={left} />
          <p className="orders">Make payment</p>
        </div>
        <div className="center">
          <div className="box1">
            <div className="text">
              <img src={clock} />
              <p>Your crypto will be released within</p>
              <p className="time">09:00</p>
            </div>
            <img src={circle1} />
          </div>
          <div className="box2">
            <p>
              You will be notified as soon as the crypto is released to your
              wallet
            </p>
          </div>
          <div className="box3">
            <PaymentCard />
          </div>
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
          <div className="box5">
            <Button text="Mark as paid" type="large2"/>
            <HelpButton classes="btn grey large2 helpButton"/>
          </div>
        </div>
      </div>
    </>
  );
}

export default ReleasingCryptoBody;
