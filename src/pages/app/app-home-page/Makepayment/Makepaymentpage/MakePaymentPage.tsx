import MakePaymentBody from '../Makepaymentbody/MakePaymentBody';
import Chat from '../../Chat/Chat';
import "./MakePaymentPage.css"

function MakePaymentPage() {
  return (
    <div className='makepaymentpage'>
      <MakePaymentBody />
      <Chat label='Your crypto has been released'  type='paragraph' timertype='time' displayimage='show'/>
    </div>
  );
}

export default MakePaymentPage;
