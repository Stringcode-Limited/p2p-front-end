import React from 'react';
import "./transaction.css"
import left from "../../../../assets/images/left.png"
function transactionDetails() {
  return (
    <div className='transaction-details'>
      <div className="transaction-usdt">
          <div className="transaction-caption">
            <div className="trans-letter">
                <div className="left-img">
                    <img src={left} alt="" />
                </div>
                <p>Transaction details</p>
            </div>
          </div>
        </div>
        <div className="recent-transaction">
          
        </div>

        </div>
    
  );
}

export default transactionDetails;
