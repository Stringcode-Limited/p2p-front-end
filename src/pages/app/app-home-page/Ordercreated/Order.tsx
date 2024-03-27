import React from 'react';
import "./Order.css"
import left from "../../../../assets/images/left.png"
import doe from "../../../../assets/images/doe.png"
import badge from "../../../../assets/images/badge.png"
import right from "../../../../assets/images/right.png"
import interval from "../../../../assets/images/interval.png"
import esc from "../../../../assets/images/asc.png"
import ordernumber from "../../../../assets/images/ordernumber.png"

function Order() {
  return (
    <div className='ordercreated'>
         <div className="order1">
          <div className="order-caption">
            <div className="arrow">
              <img src={left} alt="" />
              <h2>Order Created</h2>
            </div>
           
          </div>
            <div className="customer-info">
            <div className="jhn-d">
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
                        <div className="make-payment">
                            <div className="interval">
                              <img src={interval} alt="" />
                            </div>
                            <div className="esc">
                               <img src={esc} alt="" />
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
                    </div>
            </div>
         </div>
    </div>
  );
}

export default Order;
