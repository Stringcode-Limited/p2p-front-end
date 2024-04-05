import "./MakePaymentBody.css";
import left from "../../../../../assets/images/left.png";
import clock from "../../../../../assets/images/clock.svg";
import img from "../../../../../assets/JohnDoe.png";
import Button from "../../../../../components/Button/Button";
import HelpButton from "../../../../../components/HelpButton/HelpButton";
import MakePaymentCard from "../../../../../components/MakePaymentCard/MakePaymentCard";
import ProfileDetails from "../../../../../components/ProfileDetails/ProfileDetails";

const MakePaymentBody = () => {
    return (
        <>
            <div className="makePaymentBody">
                <div className="top">
                    <img src={left} />
                    <p className="orders">Make payment</p>
                </div>
                <div className="makePaymentWrapper">
                    <ProfileDetails image={img} fullName="John Doe" name="Doemoney" display="show" />

                    <div className="box1">
                        <div className="text">
                            <img src={clock} />
                            <p>Make payment within</p>
                            <p className="time">10:00</p>
                        </div>

                    </div>
                    <div className="box1a">

                            <p>The seller’s asset is being held in escrow by p2p app and will be delivered to
                             you as soon as you make payment and the seller confirms it</p> 

                        </div>


                    <div className="center">
                        
                        <div className="box3">
                            <MakePaymentCard />
                        </div>
                    </div>
                    <div className="box2">
                        <p>
                            Click ‘mark as paid’ as soon as the transfer is complete and successful
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
                        <div className="box5">
                            <Button text="Mark as paid" type="large3" />
                            <HelpButton classes="btn grey large3 helpButton" />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default MakePaymentBody
