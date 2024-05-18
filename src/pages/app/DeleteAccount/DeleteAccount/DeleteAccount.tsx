import "./DeleteAccount.css";
import reset from "../../../../assets/images/reset.svg";
import DeleteInstruction from "../../../../components/DeleteInstruction/DeleteInstruction";
import Arrowdown from "../../../../assets/images/arrowdown.jpg";
import Transfer from "../../../../assets/images/transfers.png";


const DeleteAccount = () => {
    return (
        <>
            <div className="deleteAccounts">
                <div className="deleteAccountsHeader">
                    <img src={reset} alt="" />
                    <p>Delete account</p>
                </div>
                <DeleteInstruction notes="Before proceeding with the deletion of your account, kindly ensure that all your assets have been transferred out of the account. Once the deletion process is initiated, any remaining assets may be irrecoverably lost." />

                <div className="walletContent">
                    <div className="walletCard">
                        <p className="total">Total balance</p>
                        <p className="amount">$31.56</p>
                        <div className="usd">
                            <p>USD</p>
                            <img src={Arrowdown} alt="" />
                        </div>
                        <div className="transactions">
                            <div>
                                <img src={Transfer} alt="" />
                                <p>Transfer</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default DeleteAccount
