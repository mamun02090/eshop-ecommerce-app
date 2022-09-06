import { useState } from "react";
import Button from "./Button";
export default function FavouriteBtn(){
    let [style, setStyle]= useState({});
    const clickHandle=()=>{
        setStyle({'background-color': 'lightgray', 'color': 'gray' })
    }
    return(
        <Button style={style} buttonClickHandle={clickHandle}/>
    )
}