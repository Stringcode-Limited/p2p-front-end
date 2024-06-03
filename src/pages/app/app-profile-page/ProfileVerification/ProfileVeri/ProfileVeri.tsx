import "./ProfileVeri.css";

import ProfileBrowse from "../../../../../components/ProfileBrowse/ProfileBrowse";
import pright from "../../../../../assets/images/pright.svg";

const ProfileVeri = () => {
  return (
    <>
       <div className="profileVeri">
                <div className="profileVeriHeader">
                    <p>Verification</p>
                </div>

                <div className="profileVeriWrapper">
                    <ProfileBrowse text="Two-factor authentication (2FA)" img={pright} />
                    <ProfileBrowse text="BVN verification" img={pright}  />
                </div>
            </div>
    </>
  )
}

export default ProfileVeri
