import React from 'react';
import "./OrderBody.css"
import left from "../../../../../assets/images/left.png"
import doe from "../../../../../assets/images/doe.png"
import badge from "../../../../../assets/images/badge2.svg"
import clock from "../../../../../assets/images/clock.svg"
import right from "../../../../../assets/images/rightarro.svg"
import question2 from "../../../../../assets/images/question.svg"
import ordernum from "../../../../../assets/images/ordernums.png"
import Button from '../../../../../components/Button/Button';
function OrderBody() {
  return (
    <div className='ordercreated'>
    <div className="top">
<img src={left} alt="" />
<p className="order-created-text">Order Created</p>
   </div>
   <div className="customer-info">
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
                 </div>
               
              
               <div className="fiat-amount">
                 <div className="inner-fiat">
                   <div className="fiat1">
                     <p className='fit'>Fiat amount</p>
                     <p className='fit'>5,000.00</p>
                   </div>
                   <div className="fiat1">
                     <p className='fit'>Price</p>
                     <p className='fit'>1,430.00</p>
                   </div>
                   <div className="fiat1">
                     <p className='fit'>Total quantity</p>
                     <p className='fit'>69.93 USDT</p>
                   </div>
                   <div className="fiat1">
                     <p className='fit'>Order number</p>
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
               <Button  type='large' text='Proceed to pay'/>
               <Button  type='large' text='Cancel order' color='grey'/>
              </div>
           
   </div>



</div>

  )
}

export default OrderBody;
