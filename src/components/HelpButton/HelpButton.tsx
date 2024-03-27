import './HelpButton.css'
import question from '../../assets/images/question.svg'

function HelpButton() {
  return (
    <>
    <div className="btn grey large2 helpButton">
        <img src={question}/>
        <p>Help</p>
    </div>
    </>
  )
}

export default HelpButton