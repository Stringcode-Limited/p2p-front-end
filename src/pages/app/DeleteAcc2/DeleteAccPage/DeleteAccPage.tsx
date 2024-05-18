import DeleteAcc from "../DeleteAcc/DeleteAcc"
import DeleteAccBody from "../DeleteAccBody/DeleteAccBody"
import "./DeleteAccPage.css"

const DeleteAccPage = () => {
  return (
    <>
      <div className="deleteAcc">
        <DeleteAccBody/>
        <DeleteAcc/>
      </div>
    </>
  )
}

export default DeleteAccPage
