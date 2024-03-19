import "./Input.css";

interface Iinput{
    label:string
    type: "text" | "password" | "email" | "number" 
}

function Input({label, type}:Iinput) {
  return (
    <>
      <div className="input">
        <label htmlFor={label}>{label}</label>
        <input type={type} name={label}/>
      </div>
    </>
  );
}

export default Input;
