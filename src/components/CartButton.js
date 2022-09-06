
import Button from "./Button";
import classes from '../styles/CartBtn.module.css'
import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import useProductDetails from '../hooks/useProductDetails'
// import { useCartHandle } from "../contexts/CartHandleContext";

export default function CartButton({id, addToCart, cart,d, setCheckStock, classname}){
    const [cartText, setCartText]= useState('Add to Cart');
    const {productDetails}= useProductDetails(id)
    const [style, setStyle ]= useState({});
    const {currentUser}= useAuth();
    const navigate= useNavigate();
    // const {addToCart}= useCartHandle();
    
    function btn(e, stock){
        if(stock<=0){
            return setCheckStock(true)
        }
        if(currentUser){
            addToCart(id, productDetails, e);
            setCartText('Added to Cart');
            setStyle({'backgroundColor': 'green', 'color': '#fff', 'border': 'none'});
        }else{
            navigate('/login')
        }
        
    }


    return(
        <Button style={cart.map((item)=> item.productID).includes(id)?{'backgroundColor': 'green', 'color': '#fff', 'border': 'none'}: style} type='button' disable={cart.map((item)=> item.productID).includes(id)? true: false} classname={`${classname} ${classes.button}`} btnText={cart.map((item)=> item.productID).includes(id) ?'Added to Cart': cartText} buttonclickhandle={btn} stock={d.stock}></Button>
    )
}