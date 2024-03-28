import './PaymentCard.css'
import copy from '../../assets/images/copy.svg'

function PaymentCard() {
  return (
    <>
    <div className="paymentCard">
        <div className="det">
            <div className="title">
            Fiat amount
            </div>
            <div className="value1">
            ₦5,000.00
            </div>
        </div>
        <div className="det">
            <div className="title">
Price
            </div>
            <div className="value2">
            ₦1,430.00
            </div>
        </div>
        <div className="det">
            <div className="title">
Total quantity
            </div>
            <div className="value2">
            69.93 USDT
            </div>
        </div>
        <div className="det">
            <div className="title">
Order number
            </div>
            <div className="value4">
            203875876455390938764
            <img src={copy}/>
            </div>
        </div>
    </div>
    </>
  )
}

export default PaymentCard