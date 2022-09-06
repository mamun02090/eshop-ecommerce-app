

import { useNavigate } from 'react-router-dom';
import classes from '../styles/OrderItem.module.css';
import Button from './Button';


export default function OrderItem({orderItems, orderId, index, orderItemsArr}){
    const navigate= useNavigate();
    const orderDetailsHandle=()=>{
        navigate(`my_order_details/${orderId}`, {state:{index, orderItemsArr}})
    }
    return(  
        <div className={classes.order_item}>
            <img alt='product' src={orderItems.imgLink}/>
            <p className={classes.order_item_name}>{orderItems.name}</p>
            <div className={classes.order_item_des}>
                <div className={`${classes.order_item_spec} ${classes.order_item_color}`}>
                    <p><b>Color</b></p>
                    <p>{orderItems.selectedColor}</p>
                </div>
                <div className={`${classes.order_item_spec} ${classes.order_item_qauntity}`}>
                    <p><b>Qty</b></p>
                    <p>{orderItems.amount}</p>
                </div>
                <div className={`${classes.order_item_spec} ${classes.order_item_price}`}>
                    <p><b>Unit Price</b></p>
                    <p>{orderItems.price}</p>
                </div>
                <div className={`${classes.order_item_spec} ${classes.order_item_status}`}>
                    <p><b>Status</b></p>
                    <p>{orderItems.status}</p>
                </div>
            </div>
            <Button btnText='More Details' buttonclickhandle={orderDetailsHandle} classname={classes.details_button}/>

        </div>                                                         
            

    )
}