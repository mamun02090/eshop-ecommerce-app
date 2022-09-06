import classes from '../styles/Cart.module.css'
import Textinput from './Textinput';
import Button from './Button';
import {  useEffect, useState } from 'react';
import Dropdown from './Dropdown';
import { useCartHandle } from '../contexts/CartHandleContext';
export default function CartItems({product}){
    const [quantity, setQuantity]= useState(1);
    const [selectedColor, setSelectedColor]= useState(product.color[0]);
    const {increment, decrement, deleteCart, updateCart}= useCartHandle();
    useEffect(()=>{
        setQuantity(product.amount)
    },[product.amount])
    const colorDropdown=(e)=>{
        setSelectedColor(e.target.value);
        updateCart(product.productID, product, quantity, e.target.value);

    }
    function cartQuanIncrement(e){
        setQuantity((prevQuantity)=> prevQuantity+1);
        increment(product.productID, product, quantity, selectedColor);
        
    }
    function cartQuanDecrement(e){
        decrement(product.productID, product, quantity, selectedColor)
        setQuantity((prevQuantity)=> prevQuantity-1)
    }
    
    return(

            <>
                <div className={classes.cart_content}>
                    <div className={classes.product_description}>
                        <img src={product.imgLink} alt='' />
                        <div className={classes.product_details}>
                            <h4>{product.name}</h4>
                            <span className='stock'>Stock: {product.stock}</span>
                            {product && <div className={classes.color}>
                                <p>Color:</p>
                                <Dropdown option={product.color} value={selectedColor} onChange={(e)=>colorDropdown(e)} className={classes.dropdown}/>
                            </div> }
                            <div className={classes.quantity}>
                                <span>Qty</span>
                                <Button buttonclickhandle={cartQuanDecrement} disable={quantity<=1? true: false} btnText='&minus;'></Button>
                                <Textinput className={classes.quantity_input} type='number' value={product.amount} min={1} max={product.stock} onChange={(e)=>(setQuantity(e.target.value))}/>
                                <Button buttonclickhandle={cartQuanIncrement} disable={quantity>=product.stock? true: false} btnText='&#43;' ></Button>
                            </div>
                            <Button classname={classes.delete_button} buttonclickhandle={()=> deleteCart(product.productID)} btnText='Delete'/>
                        </div>
                    </div>
                    <div className={classes.price}>
                        <p><b>{product.price*product.amount} BDT</b></p>
                    </div>
                </div>
            </> 
        
    )
}