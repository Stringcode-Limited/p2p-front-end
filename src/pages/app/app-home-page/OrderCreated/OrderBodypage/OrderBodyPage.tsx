import React from 'react';
import OrderBody from '../OrderBody/OrderBody';
import Chat from '../../Chat/Chat';
import "./OrderBodyPage.css"

function OrderBodyPage() {
  return (
    <div className='orderbodypage'>
      <OrderBody />
      <Chat  label='Your crypto has been released'  type='paragraph' timertype='timer' displayimage='show'/>
    </div>
  );
}

export default OrderBodyPage;
