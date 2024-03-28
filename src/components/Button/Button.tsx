import { NavLink } from 'react-router-dom'
import './Button.css'

interface IButton {
  text: string
  color?: "green" | "red" | "grey" | "white" | "grey2"
  type?: "mini" | "mini2" | "small" | "small2" | "normal" | "normal2" | "large" | "large2" | "large3"
  route?: string
}

function Button({ text, color = "green", type = "normal", route }: IButton) {
  const btnStyle = `btn ${type} ${color}`

  const buttonContent = route ? (
    <NavLink to={route}>
      <div className={btnStyle}>{text}</div>
    </NavLink>
  ) : (
    <div className={btnStyle}>{text}</div>
  );

  return buttonContent;
}

export default Button