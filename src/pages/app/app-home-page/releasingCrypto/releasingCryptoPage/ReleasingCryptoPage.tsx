import Chat from '../../Chat/Chat'
import ReleasingCryptoBody from '../releasingCryptoBody/ReleasingCryptoBody'
import './ReleasingCryptoPage.css'

function ReleasingCryptoPage() {
  return (
    <>
    <div className="releasingCryptoPage">
      <ReleasingCryptoBody/>
      <Chat/>
      </div>
    </>
  )
}

export default ReleasingCryptoPage