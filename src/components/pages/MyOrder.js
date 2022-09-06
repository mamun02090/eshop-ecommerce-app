import Order from '../Order'
import classes from '../../styles/MyOrder.module.css';
import useOrderItem from '../../hooks/useOrderItem'
import { useAuth } from '../../contexts/AuthContext';
import Headings from '../Headings';
const MyOrder = () => {
  const {currentUser}= useAuth();
  const {orderItem}= useOrderItem(currentUser?.uid);
  
  return (
    <div className={classes.order_section}>
      <Headings heading='Orders' className={classes.heading}/>
      {orderItem && orderItem.length>0 && orderItem.map((item, index)=>{
        return (
            <Order orderItemsArr={orderItem} key={index} orderId={item.orderId} orderItems={item.cartItems} />
        )
      })}
      {currentUser? orderItem.length<=0 && <p className='info'>No order Found</p>: <p className={classes.login_error}>You must be logged in to see the orders!</p>}
    </div>
  )
}

export default MyOrder