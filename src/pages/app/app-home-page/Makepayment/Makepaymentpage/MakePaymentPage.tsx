import React from 'react';
import MakePaymentBody from '../Makepaymentbody/MakePaymentBody';
import Chat from '../../Chat/Chat';
import "./MakePaymentPage.css"

function MakePaymentPage() {
  return (
    <div className='makepaymentpage'>
      <MakePaymentBody />
      <Chat label='Your crypto will be released within' time='9:00' type='paragraph' timertype='timer' displayimage='show'  />
    </div>
  );
}

export default MakePaymentPage;
