import React from 'react';
import OrderBody from '../OrderBody/OrderBody';
import "./OrderBodyPage.css"
import Chat2 from '../../chat2/Chat2';

function OrderBodyPage() {
  return (
    <div className='orderbodypage'>
      <OrderBody />
      <Chat2  label='This order will be cancelled in' time='10:00'  type='paragraph' timertype='timer' displayimage='show'/>
    </div>
  );
}

export default OrderBodyPage;
