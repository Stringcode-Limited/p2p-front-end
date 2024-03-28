import Chat from '../../Chat/Chat'
import ReleasingCryptoBody from '../releasingCryptoBody/ReleasingCryptoBody'
import './ReleasingCryptoPage.css'

function ReleasingCryptoPage() {
  return (
    <>
    <div className="releasingCryptoPage">
      <ReleasingCryptoBody/>
      <Chat label="Your crypto will be released within" time="09:00" type="paragraph" timertype="timer" displayimage="show"/>
      </div>
    </>
  )
}

export default ReleasingCryptoPage