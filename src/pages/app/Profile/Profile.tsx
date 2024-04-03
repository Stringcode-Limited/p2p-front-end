import React from 'react';
import "./Profile.css"
import left from "../../../assets/images/left.png"
import proimage from "../../../assets/images/proimage.svg"



function Profile() {
  return (
    <div className='profile-page'>
      <div className="profile-layout">
      <div className="middle-section">
             <div className="left">
            <div className="dt-icon">
             <img src={left} alt="" />
             </div>
             <div className="dt">
             <h3>Transaction details</h3>
             </div>
             </div>
            </div>
            <div className="profile-main">
                <div className="profile-image">
                    <div className="inner-image">
                        <div className="pro-image">
                            <img src={proimage} alt="" />
                        </div>
                        <div className="talan">
                            <p className='tala'>Talan Botosh Grace</p>
                            <p className='bot'>@TalanBotosh</p>
                        </div>
                    </div>
                </div>
            </div>
      </div>
    </div>
  );
}

export default Profile;
