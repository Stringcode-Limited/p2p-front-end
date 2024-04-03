import React from 'react';
import "./Profile.css"
import left from "../../../assets/images/left.png"
import proimage from "../../../assets/images/proimage.svg"
import badge2 from "../../../assets/images/badge.png"
import email from "../../../assets/images/email.svg"
import location from "../../../assets/images/location.svg"
import nija from "../../../assets/images/nija.svg"
import tele from "../../../assets/images/tele.svg"
import setting from "../../../assets/images/setting.svg"
import preference from "../../../assets/images/preference.svg"
import chatlog from "../../../assets/images/chatslog.svg"
import paybox from "../../../assets/images/paybox.svg"
import pen from "../../../assets/images/pen.svg"
import rightarro from "../../../assets/images/rightarro.svg"


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
                <div className="sticker-verification">
                    <div className="veri">
                    <p className='verification'>Verify</p>
                    </div>
                    <div className="in-image">
                    <img src={badge2} alt="" />
                    </div>
                    
                
                </div>
                <div className="profile-info">
                    <div className="sectioned-dettails">
                        <div className="profile-contacts">
                            <div className="contact1">
                                <div className="email">
                                    <img src={email} alt="" />
                                </div>
                                <div className="email-name">
                                    <p className='yahoo-acc'>Talanbotosh27@yahoo.com</p>
                                </div>
                            </div>
                            <div className="contact1">
                                <div className="email">
                                    <img src={tele} alt="" />
                                </div>
                                <div className="email-name">
                                    <p className='yahoo-acc'>+234 801 2345 678</p>
                                </div>
                            </div>
                            <div className="contact1">
                                <div className="email">
                                    <img src={location} alt="" />
                                </div>
                                <div className="email-name">
                                    <p className='yahoo-acc'><img src={nija} alt="" /></p>
                                </div>
                            </div>
                            
                        </div>
                        <div className="bios">
                            <div className="bio-text">
                                <p className='bio-name'>Bio</p>
                            </div>
                            <div className="bio-para">
                                <p className='paragraph'>I am Talan Botosh. I am a crypto trader and I love to trade. I would like to do business with you. Hop on my pitch and let’s trade. I look forward to seeing you. Cheers</p>
                            </div>
                        </div>
                    </div>
                    <div className="editing-units">
                        <div className="editing-1">
                            <div className="wrap-editing1">
                            <div className="inner-edit">
                                <div className="pen">
                                    <img src={pen} alt="" />
                                </div>
                                <div className="img-name">
                                    <p className='file-edit'>Edit Profile</p>
                                </div>
                            </div>
                            <div className="right-arrow">
                                    <img src={rightarro} alt="" />
                            </div>
                            </div>
                        </div>
                        <div className="editing-1">
                            <div className="wrap-editing1">
                            <div className="inner-edit">
                                <div className="pen">
                                    <img src={chatlog} alt="" />
                                </div>
                                <div className="img-name">
                                    <p className='file-edit'>Verification</p>
                                </div>
                            </div>
                            <div className="right-arrow">
                                    <img src={rightarro} alt="" />
                            </div>
                            </div>
                        </div>
                        <div className="editing-1">
                            <div className="wrap-editing1">
                            <div className="inner-edit">
                                <div className="pen">
                                    <img src={paybox} alt="" />
                                </div>
                                <div className="img-name">
                                    <p className='file-edit'>Payment methods</p>
                                </div>
                            </div>
                            <div className="right-arrow">
                                    <img src={rightarro} alt="" />
                            </div>
                            </div>
                        </div>
                        <div className="editing-1">
                            <div className="wrap-editing1">
                            <div className="inner-edit">
                                <div className="pen">
                                    <img src={preference} alt="" />
                                </div>
                                <div className="img-name">
                                    <p className='file-edit'>Preference</p>
                                </div>
                            </div>
                            <div className="right-arrow">
                                    <img src={rightarro} alt="" />
                            </div>
                            </div>
                        </div>
                        <div className="editing-1">
                            <div className="wrap-editing1">
                            <div className="inner-edit">
                                <div className="pen">
                                    <img src={setting} alt="" />
                                </div>
                                <div className="img-name">
                                    <p className='file-edit'>Security settings</p>
                                </div>
                            </div>
                            <div className="right-arrow">
                                    <img src={rightarro} alt="" />
                            </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
      </div>
    </div>
  );
}

export default Profile;
