import React from 'react'
import classes from '../styles/Order.module.css';
import OrderItem from './OrderItem';
const Order = ({orderItems, orderId, orderItemsArr}) => {
  return (
      orderItems.length>0 && orderItems.map((item, index)=>{
        return (
          <div key={index} className={classes.order_main}>
            <div className={classes.order_container}>
                <OrderItem orderItemsArr={orderItemsArr} orderItems={item} index={index} orderId={orderId} />
            </div>
          </div>
        )
      })
  )
}

export default Order