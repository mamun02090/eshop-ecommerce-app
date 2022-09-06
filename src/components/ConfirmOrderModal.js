import React, { useState } from 'react'
import Button from './Button';
import classes from '../styles/ConfirmOrderModal.module.css';
import Textinput from './Textinput'
import { useNavigate } from 'react-router-dom';
import Form from './Form';
import { useCartHandle } from '../contexts/CartHandleContext';
import { useOrderHandle } from '../contexts/OrderHandleContext';

const ConfirmOrderModal = ({isOpen, setIsOpen}) => {
    const [address, setAddress]= useState('');
    const [phoneNumber, setPhoneNumber]= useState('');
    const {cartItemArr, setCartQuantity, setCartItemArr}= useCartHandle();
    const {orderItemHandle}= useOrderHandle();
    const navigate= useNavigate();
    const confirmOrderHandle=(e)=>{
      e.preventDefault();
      const orderId= `order_${Math.floor(Math.random()*100)}${Math.floor(Math.random()*100)}`;
      
      orderItemHandle(cartItemArr, phoneNumber, address, orderId, setCartQuantity, setCartItemArr)
      navigate('/my_order');
      
      // window.location.reload(false);
    }
  return (
    isOpen && <div className={classes.modal}>
        <Button classname={classes.close_btn} classnamediv={classes.close_btn_div} btnText='&#10006;' buttonclickhandle={()=> setIsOpen(false)}/>
        <Form onSubmit={confirmOrderHandle}>
          <div className={classes.confirm_order_form}>
          <Textinput className={classes.order_input} placeholder='Delivery Address' label='Delivery Address' type='text' value={address} onChange={(e)=>(setAddress(e.target.value))}/>
          <Textinput className={classes.order_input} placeholder='Phone Number' type='number' value={phoneNumber} onChange={(e)=>(setPhoneNumber(e.target.value))}/>
          </div>
            <Button btnText='Place Order' link='/my_order' classname={classes.place_order_btn} classnamediv={classes.order_btn_div} type='submit'/>
        </Form>
        
    </div>
  )
}

export default ConfirmOrderModal