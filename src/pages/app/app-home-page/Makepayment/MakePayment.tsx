import React from 'react';
import "./make.css" 
import left from "../../../../assets/images/left.png"
import doe from "../../../../assets/images/doe.png"
import badge from "../../../../assets/images/badge.png"
import right from "../../../../assets/images/right.png"
import Button from '../../../../components/Button/Button';
import ordernum from "../../../../assets/images/ordernums.png"
import curv from "../../../../assets/images/curv.png"
import naira from "../../../../assets/images/naira.png"
import clock from "../../../../assets/images/clock.png"
import HelpButton from '../../../../components/HelpButton/HelpButton';



function MakePayment() {
  return (
    <div className='make-payment'>
       <div className="order1">
          <div className="order-caption">
            <div className="arrow">
              <div className="rights">
              <img src={left} alt="" />
              </div>
              <div className="ders">
              <h2>Make Payment</h2>
              </div>
            </div>
           
          </div>
            <div className="customer-info">
            <div className="jhn-d">
                         <div className="complete">
                        
                        <div className="nam-wrapper">
                        <div className="doe-wrapper">
                        <img src={doe} alt="" />
                        </div>
                          <div className="wraps">
                            <div className="name-wrapper">
                            <h4 className="jh">JohnDoe</h4>
                            <div className="badge">
                                <img className="dge" src={badge} alt="" />
                                </div>
                            </div>
                            <div className="at-name">
                                <p className="doe">@Doemoney</p>
                            </div>
                            </div>
                            <div className="right-arrow">
                              <img src={right} alt="" />
                            </div>
                           </div>
                          </div>
                        
                        <div className="make-pay">
                            <div className="interval">
                            <div className="get">
                              <img src={clock} alt="" />
                              </div>
                              <div className="time-frame">
                              <p className='ment-pay'>Make payment within 10:00</p>
                              </div>
                            </div>
                            <div className="statment">
                              <div className="inner-statment">
                                <p className='state'>The seller’s asset is being held in escrow by p2p app and will be delivered to you as soon as you make payment and the seller confirms it</p>
                              </div>
                            </div>
                        </div>
                        <div className="fiat-amount">
                          <div className="inner-fiat">
                            <div className="fiat1">
                              <p className='fit'>Fiat amount</p>
                              <p className='fit'><img src={naira} alt="" />5,000.00</p>
                            </div>
                            <div className="fiat1">
                              <p className='fit'>Account name</p>
                              <p className='fit'>JACK DOE</p>
                            </div>
                            <div className="fiat1">
                              <p className='fit'>Account number</p>
                              <p className='fit'>0123456789 <img src={ordernum} alt="" /></p>
                            </div>
                            <div className="fiat1">
                              <p className='fit'>Bank name</p>
                              <p className='fit'>Access Bank <img src={ordernum} alt="" /></p>
                            </div>
                            <div className="fiat1">
                              <p className='fit'>Ref number</p>
                              <p className='fit'>203875876455390938764 <img src={ordernum} alt="" /></p>
                            </div>
                          </div>
                        </div>
                        <div className="reviews">
                        <div className="review-caption">
                            <h3 className="rev">Reviews & ratings</h3>
                        </div>
                        <div className="write-ups">
                            <p className="rev-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolorin reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident,sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
                       <div className="proceed-topay">
                        <Button  type='large' text='Mark as paid' route="/app/releasingcrypto"/>
                        <HelpButton classes='' />
                       </div>
                    </div>
            </div>
         </div>
         <div className="chat-entering">
         <div className="chats">
         <div className="chat-main">
            <div className="chat-caption">
              <p className='chat-text'>Chat</p>
            </div>
           <div className="interval">
             <img src={clock} alt="" />
             <p className='release'>Your crypto has been released</p>
            </div>
           
            <div className="chat1">
              <p className='stipulated'>You have successfully created an order. Kindly pay within the stipulated time limit</p>
            </div>
            <div className="chat2">
              <div className="inner-chat">
                <p className='semi'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate</p>
                <div className="inner-chat">
                <p className='semi'>Relit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
              </div>
             
            </div>
            <div className="chat3">
              <div className="p3">
                 <p className='p3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt </p>
              </div>
            </div>
            <div className="chat4">
              <div className="p4">
                <p className='p4'>Thank you</p>
              </div>
            </div>
           </div>
         </div>
         
         <div className="type-message">
               <div className="input">
                <input type="text" placeholder='Type message' />
                </div>
                <img className='curv' src={curv} alt="" />
           </div>
           </div>
    </div>
  );
}

export default MakePayment;
