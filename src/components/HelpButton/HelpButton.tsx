import './HelpButton.css'
import question from '../../assets/images/question.svg'
interface Ihelp{
  classes: string 

}
function HelpButton({classes}:Ihelp) {
  return (
    <>
    {/* btn grey large2 helpButton */}
    <div  className= {classes} >
        <img src={question}/>
        <p>Help</p>
    </div>
    </>
  )
}

export default HelpButton