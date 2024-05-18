import DeleteAccount from "../DeleteAccount/DeleteAccount"
import DeleteAccountBody from "../DeleteAccountBody/DeleteAccountBody"
import "./DeleteAccountPage.css"

const DeleteAccountPage = () => {
    return (
        <>
            <div className="deleteAccount">
                <DeleteAccountBody />
                <DeleteAccount/>
            </div>
        </>
    )
}

export default DeleteAccountPage
