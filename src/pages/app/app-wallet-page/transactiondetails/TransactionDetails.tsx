import React from 'react';
import "./transactiondetails.css"
import left from "../../../../assets/images/left.png"
import succ from "../../../../assets/images/succ.svg"
function TransactionDetails() {
  return (
    <div className='transaction-details'>
      <div className="transaction-usdt">
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
            </div>
            
   </div>
   </div>
  );
}

export default TransactionDetails;
