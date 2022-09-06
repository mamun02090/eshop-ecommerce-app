import classes from '../styles/Textinput.module.css'
export default function TextArea({type, placeholder, onChange, value, className}){
    return(
        <div className={`${className} ${classes.textInput}`}>
            <textarea type={type} placeholder={placeholder} required onChange={onChange} value={value}></textarea>
        </div>
    )
}