import "./MakePaymentCard.css";
import copy from '../../assets/images/copy.svg';

const MakePaymentCard = () => {
    return (
        <>
            <div className="makePaymentCard">
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
                        Account name
                    </div>
                    <div className="value2">
                        JACK DOE
                    </div>
                </div>
                {/* <div className="det">
                    <div className="title">
                        Total quantity
                    </div>
                    <div className="value2">
                        69.93 USDT
                    </div>
                </div> */}

                <div className="det">
                    <div className="title">
                        Account number
                    </div>
                    <div className="value4">
                        0123456789
                        <img src={copy} />
                    </div>
                </div>

                <div className="det">
                    <div className="title">
                        Bank name
                    </div>
                    <div className="value4">
                        Access bank
                        <img src={copy} />
                    </div>
                </div>
                

                <div className="det">
                    <div className="title">
                        Ref number
                    </div>
                    <div className="value4">
                        203875876455390938764
                        <img src={copy} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default MakePaymentCard
