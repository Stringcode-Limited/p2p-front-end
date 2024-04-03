import React from 'react';
import "./transactiondetails.css"
import left from "../../../../assets/images/left.png"
import succ from "../../../../assets/images/succ.svg"
import Button from '../../../../components/Button/Button';
import q2 from "../../../../assets/images/q2.svg"
function TransactionDetails() {
  return (
    <div className='transaction-details'>
      <div className="transaction-usdt">
        <div className="wrappers">
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
            <div className="transaction-hero">
               <div className="transaction-hero1">
                 <div className="us-fig">
                  <h1>14.54</h1>
                  <p className='usdt-changes'>USDT</p>
                  </div>
                 <div className="Eth">
                  <p>(Ethereum)</p>
                  </div>
                 <div className="success-emblem">
                  <img src={succ} alt="" />
                 </div>
               </div>
               <div className="jrn-hero">
               <div className="transaction-hero2">
                  <div className="inner-hero2">
                    <p className='from'>From</p>
                    <p className='spanish'>TV7fRasWWEJj4PUQg<br></br>VRW2LT9MTPWKUB8h4</p>
                  </div>
                </div>
                <div className="transaction-hero2">
                  <div className="inner-hero2">
                    <p className='from'>To</p>
                    <p className='spanish'>1FfmbHfnpaZjKFvyi1okT<br></br>jJJusN455paPH</p>
                  </div>
                </div>
                <div className="transaction-hero3">
                  <div className="inner-hero2">
                    <p className='from'>Transaction ID</p>
                    <p className='spanish'>1Jh78nW92kqe87P923N<br></br>h528subfy40oKw9037en</p>
                  </div>
                </div>
                <div className="transaction-hero4">
                  <div className="inner-hero2">
                    <p className='from'>Confirmation</p>
                    <p className='number'>20</p>
                  </div>
                </div>
                <div className="transaction-hero4">
                  <div className="inner-hero2">
                    <p className='from'>Network fee</p>
                    <p className='number'>1.2 USDT</p>
                  </div>
                </div>
                <div className="transaction-hero4">
                  <div className="inner-hero2">
                    <p className='from'>Date/Time</p>
                    <p className='number'>17-02/2024 | 09:18:43</p>
                  </div>
                </div>
               </div>
                <Button  text='Share' type='large2'/>
                <div className="help-center">
                  <div className="question-symbol">
                  <img src={q2} alt="" />
                  <p className='center'>Help Center</p>
                    </div>
                </div>
            </div>
            </div>
            
   </div>
   <div className="recent-transaction">
      
   </div>
   </div>
  );
}

export default TransactionDetails;
