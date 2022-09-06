import { Link } from "react-router-dom";

// import {Link} from 'react-router-dom'
export default function LinkedImage({image, link, classname}){
    return(
            <Link to={`${link}`}>
                <img className={classname} alt='' src={image}></img>
            </Link>
            
    )
}