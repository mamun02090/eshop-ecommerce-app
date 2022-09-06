import classes from '../styles/Dropdown.module.css'

export default function Dropdown({option, className, onChange, value}){
    return(
        <div className={className}>
            <select name="select" className={`${classes.dropdown}`} onChange={(event)=>onChange(event)} value={value}>
                {/* <option value='color'>color</option> */}
                {option.map((item)=>(<option key={item} value={item}>{item}</option>))}
            </select>
        </div>
    )
}