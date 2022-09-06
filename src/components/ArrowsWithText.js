import ArrowButton from "./ArrowButton";
import classes from '../styles/InventoryFooter.module.css'
export default function ArrowsWithText({classProp, text, arrow}){
    return(
        <div className={`${classes.arrows_with_text} ${classProp}`}>
            {text===''? null: <p className={classes.text}>{text}</p>}
            <ArrowButton arrow={arrow}/>
        </div>
    )
}