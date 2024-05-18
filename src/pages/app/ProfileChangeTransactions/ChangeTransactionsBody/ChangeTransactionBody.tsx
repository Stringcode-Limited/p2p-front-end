import "./ChangeTransactionBody.css";
import ProfileCard from "../../../../components/ProfileCard/ProfileCard";
import edit from '../../../../assets/images/edit.svg';
import veri from '../../../../assets/images/veri.svg';
import methods from '../../../../assets/images/methods.svg';
import review from '../../../../assets/images/review.svg';
import preference from '../../../../assets/images/preference.svg';
import setting from '../../../../assets/images/setting.svg';
import left from "../../../../assets/images/left.png";
import profilepicture from "../../../../assets/images/profilepicture.svg";
import verified from "../../../../assets/images/verified.svg";
import location from "../../../../assets/images/location.svg";
import email from "../../../../assets/images/email.svg";
import phone from "../../../../assets/images/phone.svg";
import nigeria from "../../../../assets/images/nigeria.svg";

const ChangeTransactionBody = () => {
  return (
    <>
     <div className="ChangeTransactionBody">
        <div className="top">
          <img src={left} />
          <p className="profile">Profile</p>
        </div>
        <div className="center">
          <img src={profilepicture} alt="" />
          <div className="user">
            <div className="fullName">Talan Botosh Grace</div>
            <div className="name">@Talanbotosh</div>
          </div>
          <img src={verified} alt="" />
        </div>
        <div className="about">
          <div className="contact">
            <p>
              <img src={email} alt="" /> Talanbotosh27@yahoo.com
            </p>
            <p>
              <img src={phone} alt="" /> +234 801 2345 678
            </p>
            <p>
              <img src={location} alt="" /> <img src={nigeria} alt="" /> Nigeria
            </p>
          </div>
          <div className="bio">
            <div className="title">Bio</div>
            <div className="body">
              I am Talan Botosh. I am a crypto trader and I love to trade. I
              would like to do business with you. Hop on my pitch and let’s
              trade. I look forward to seeing you. Cheers
            </div>
          </div>
        </div>
        <div className="cards">
          <ProfileCard icon={edit} text="Edit profile"/>
          <ProfileCard icon={veri} text="Verification"/>
          <ProfileCard icon={methods} text="Payment methods"/>
          <ProfileCard icon={review} text="Reviews & ratings"/>
          <ProfileCard icon={preference} text="Preference"/>
          <ProfileCard icon={setting} text="Security settings"/>
        </div>
      </div> 
    </>
  )
}

export default ChangeTransactionBody
