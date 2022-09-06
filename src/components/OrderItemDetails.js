import React from 'react'
import classes from '../styles/OrderItemDetails.module.css'

const OrderItemDetails = ({cartItem, orderItem}) => {
  return (
    <div className={classes.order_item}>
                <img alt='product' src={cartItem.imgLink}/>
                <div className={classes.order_item_spec}>
                    <h4 className={classes.order_item_name}>{cartItem.name}</h4>
                    <p><b>Color:</b> {cartItem.selectedColor}</p>
                </div>
                <div className={classes.order_item_spec}>
                    <p><b>Unit Price:</b>{cartItem.price}</p>
                    <p><b>Quantity: </b>{cartItem.amount}</p>
                    <p><b>Total Price:</b> {cartItem.amount*cartItem.price}</p>
                </div>
                <div className={`${classes.address} ${classes.order_item_spec}`}>
                    <p><b>Order Date: </b>{orderItem.date}</p>
                    <p><b>Address: </b>{orderItem.address}</p>
                    <p><b>Mobile: </b>{orderItem.mobileNumber}</p>
                </div>
                <div className={classes.order_item_status}>
            <p><b>Status</b></p>
            <p className={classes.order_status}>{cartItem.status}</p>
        </div>
        </div>
  )
}

export default OrderItemDetails