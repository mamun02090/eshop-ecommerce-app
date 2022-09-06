import classes from '../styles/Product.module.css';
import CartButton from './CartButton';
import LinkedImage from './LinkedImage';
import useProductDetails from '../hooks/useProductDetails'
import { useState } from 'react';

export default function Product({img, name, price, moq, id, cart, addToCart}){
    const {productDetails}= useProductDetails(id);
    const [checkStock, setCheckStock]= useState(false);
    
    
    return (
      <div className={classes.product}>
        <LinkedImage
          image={img}
          link={`/product_description/${id}`}
          classname={classes.img}
        />

        <div className={classes.product_details}>
          <h2 className={`${classes.product_name}`}>{name}</h2>
          <p className={`${classes.product_price}`}>
            Price: <b>BDT {price}</b>
          </p>
          <p className={`${classes.product_moq}`}>
            MOQ: <b>{moq}</b>
          </p>
          {checkStock&& <p className={classes.outofstock}>Out of Stock</p>}
        </div>
        <div>
          {/* <button className='cart-btn btn' style={id===newID?style: null} onClick={() => addToCart(id)} type="">
            {btnText}
          </button> */}
          <CartButton id={id} cart={cart} d={productDetails} addToCart={addToCart} setCheckStock={setCheckStock}/>
        </div>
      </div>
    );
} 