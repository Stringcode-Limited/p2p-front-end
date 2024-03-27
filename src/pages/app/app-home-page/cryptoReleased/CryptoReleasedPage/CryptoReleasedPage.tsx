import Chat from '../../Chat/Chat'
import './CryptoReleasedPage.css'
import CryptoReleasedBody from '../CryptoReleasedBody/CryptoReleasedBody'

function CryptoReleasedPage() {
  return (
    <>
    <div className="cryptoReleasedPage">
      <CryptoReleasedBody/>
      <Chat/>
    </div>
    </>
  )
}

export default CryptoReleasedPage