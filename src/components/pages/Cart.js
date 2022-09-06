import { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useCartHandle } from '../../contexts/CartHandleContext';
import { useOrderHandle } from '../../contexts/OrderHandleContext';
import classes from '../../styles/Cart.module.css';
import Button from '../Button';
import CartItems from '../CartIems';
import ConfirmOrderModal from '../ConfirmOrderModal';
import Modal from '../Modal';
import Headings from '../Headings'
export default function Cart(){
    const [subtotal, setSubTotal]= useState(0);
    const [isOpen, setIsOpen]= useState(false)
    const {currentUser}= useAuth()
    const {loading, error, cartItemArr, totalprice} = useCartHandle();
    
  

    return(
        cartItemArr.length>0?(
            <>
            <Headings heading='Cart Items'/>
            <div className={classes.cart_main_div}>
                
                <div className={classes.cart_container}>
                    {!loading && !error && cartItemArr.length>0 &&  cartItemArr.map((item, index)=>{
                        return <CartItems key={index} index={index} setSubTotal={setSubTotal} subtotal={subtotal} itemNumber={cartItemArr.length} product={item}/>
                    })}
                </div> 
                <div className={classes.subtotal}>
                    <p><b>Subtotal: {totalprice}  BDT</b></p>
                </div>
                <Button classname={classes.checkout_btn} btnText='Checkout' classnamediv={classes.checkout_div} buttonclickhandle={()=> setIsOpen(true)}/>
                <Modal open={isOpen}>
                    <ConfirmOrderModal isOpen={isOpen} setIsOpen={setIsOpen}></ConfirmOrderModal>    
                </Modal>    
            </div>
            </>
        ):(
            <div className={classes.zero_cartitem}>
                <h3>Hi, {currentUser.displayName}</h3>
                <br/>
                <h3>No Cart Item Found!</h3>
            </div>
        )
    )
}