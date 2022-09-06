import classes from '../styles/Searchbar.module.css'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
export default function Search({className}){

    return(
        <div className={`${classes.searchbar} ${className}`}>
            <FontAwesomeIcon className={classes.icon} icon={faMagnifyingGlass}/>
            <input className={classes.search} type="text" placeholder="Search"/>
        </div>
        
    )
}