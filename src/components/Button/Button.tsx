import './Button.css'

interface IButton{
    text:string
    color?:"green" | "red" | "grey" | "white"
    type?:"mini" | "mini2" | "small" | "small2" | "normal" | "normal2" | "large" | "large2"
}

function Button({text, color="green", type="normal"}:IButton) {
    const btnStyle = `btn ${type} ${color}`
  return (
    <>
    <div className={btnStyle}>{text}</div>
    </>
  )
}

export default Button