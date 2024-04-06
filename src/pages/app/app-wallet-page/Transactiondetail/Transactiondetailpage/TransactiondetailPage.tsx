import React from 'react';
import TransactionDetail from '../Transactiondetailbody/TransactionDetail';
import RecentTransactions from '../../../app-order-page/RecentTransactions/RecentTransactions';
import "./TransactiondetailPage.css"

function TransactiondetailPage() {
  return (
    <div className='transactiondetail'>
      <TransactionDetail />
      <RecentTransactions />
    </div>
  );
}

export default TransactiondetailPage;
