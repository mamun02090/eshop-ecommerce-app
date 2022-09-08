import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "../styles/Textinput.module.css";
export default function Textinput({ type, placeholder, name, icon, onChange, value, className, max, label }) {
  return (
    
    <div className={`${classes.textInput} ${className} input_icon`}>
      {max? <input type={type} placeholder={placeholder} name={name} required onChange={onChange} value={value} max={max}/>: <input type={type} placeholder={placeholder} name={name} required onChange={onChange} value={value}/>}
      
      {icon? (<FontAwesomeIcon icon={icon}/>): null}
    </div>
  );
}
