import React from 'react'
import { useLocation, useParams } from 'react-router-dom';
import classes from '../../styles/OrderDetails.module.css'
import OrderItemDetails from '../OrderItemDetails';
const OrderDetails = () => {
    const location= useLocation();
    const {orderId}= useParams();
    const itemIndex= location.state.index;
    const orderItem= location.state.orderItemsArr;
    const order= orderItem.length>0?orderItem.filter((item)=> orderId===item.orderId): null;
    const cart= order!==null?order[0].cartItems.filter((item, index)=> index===itemIndex): null;
  return (
    cart!==null && <div className={classes.order_details_main}>
        <div className={classes.order_details_container}>
          {cart.map((item, index)=> <OrderItemDetails orderItem={order[0]} cartItem={item} key={index}/>)}
        </div>
    </div>
  )
}

export default OrderDetails