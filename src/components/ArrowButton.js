import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../styles/style.css'
export default function ArrowButton({arrow}){
    return(
        <button className="arrow_button"><FontAwesomeIcon icon={arrow}></FontAwesomeIcon></button>
    )
}