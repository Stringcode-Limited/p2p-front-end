import React from 'react';
import "./Order.css"
import left from "../../../../assets/images/left.png"
import doe from "../../../../assets/images/doe.png"
import badge from "../../../../assets/images/badge.png"
import right from "../../../../assets/images/right.png"
import interval from "../../../../assets/images/interval.png"
import question2 from "../../../../assets/images/question2.png"
import ordernumber from "../../../../assets/images/ordernumber.png"
import Button from '../../../../components/Button/Button';
import curv from "../../../../assets/images/curv.png"
import clock from "../../../../assets/images//clock.png"

function Order() {
  return (
    <div className='ordercreated'>
         <div className="order1">
          <div className="order-caption">
            <div className="arrow">
              <div className="rights">
              <img src={left} alt="" />
              </div>
              <div className="ders">
              <h2>Order Created</h2>
              </div>
            </div>
           
          </div>
            <div className="customer-info">
            <div className="jhn-d">
                         <div className="complete">
                        <div className="doe-wrapper">
                        <img src={doe} alt="" />
                        </div>
                        <div className="nam-wrapper">
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
                        
                        <div className="make-payment">
                            <div className="interval">
                              <div className="get">
                              <img src={clock} alt="" />
                              </div>
                              <div className="time-frame">
                              <p className='ment-pay'>Make payment within 10:00</p>
                              </div>
                            </div>
                            <div className="esc">
                              <div className="sell">
                               <p className='pto'>This seller`s crypto is escrowed</p>
                               <div className="question-mark">
                                <img src={question2} alt="" />
                               </div>
                               </div>
                              
                            </div>
                        </div>
                        <div className="fiat-amount">
                          <div className="inner-fiat">
                            <div className="fiat1">
                              <p className='fit'>Fiat amount</p>
                              <p className='fit'>#5,000.00</p>
                            </div>
                            <div className="fiat1">
                              <p className='fit'>Price</p>
                              <p className='fit'>#1,430.00</p>
                            </div>
                            <div className="fiat1">
                              <p className='fit'>Total quantity</p>
                              <p className='fit'>69.93 USDT</p>
                            </div>
                            <div className="fiat1">
                              <p className='fit'>Order number</p>
                              <p className='fit'>203875876455390938764 <img src={ordernumber} alt="" /></p>
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
                        <Button  type='large' text='Proceed to pay'/>
                        <Button  type='large' text='Cancel order' color='grey'/>
                       </div>
                    </div>
            </div>
         </div>
         <div className="chats">
          <div className="chat-pertition">
           <div className="chat-main">
            <div className="chat-caption">
              <p className='chat-text'>Chat</p>
            </div>
           <div className="interval">
             <img src={interval} alt="" />
            </div>
            <div className="fiat-proceed">
              <div className="fiat-amt">
                <div className="merg-fiat">
                <p className='iat-amount'>Fiat amount</p>
                <p className='nai-fig'>#5,000.00</p>
                </div>
              </div>
              <div className="fiat-btn">
                <Button  type='small' text="Proceed to pay" route='/app/Makepayment'/>
              </div>
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

export default Order;
