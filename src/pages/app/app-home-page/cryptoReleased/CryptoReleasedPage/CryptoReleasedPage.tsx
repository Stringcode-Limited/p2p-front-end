import Chat from '../../Chat/Chat'
import './CryptoReleasedPage.css'
import CryptoReleasedBody from '../CryptoReleasedBody/CryptoReleasedBody'

function CryptoReleasedPage() {
  return (
    <>
    <div className="cryptoReleasedPage">
      <CryptoReleasedBody/>
      <Chat label='Your crypto will be released within' time='09:00' type='paragraph' timertype='time' displayimage='show'/>
    </div>
    </>
  )
}

export default CryptoReleasedPage