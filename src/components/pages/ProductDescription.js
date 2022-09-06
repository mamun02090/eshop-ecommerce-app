import CartButton from "../CartButton";
import classes from '../../styles/ProductDescription.module.css';
import { useParams } from "react-router-dom";
import useProductDetails from "../../hooks/useProductDetails";
// import useCartItem from "../../hooks/useCartItem";
import useCartItemCheck from "../../hooks/useCartItemCheck";
import { useAuth } from "../../contexts/AuthContext";
import { useState } from "react";
import { useCartHandle } from "../../contexts/CartHandleContext";

export default function ProductDescription(){
    const {id}= useParams();
    const {loading, error, productDetails}= useProductDetails(id);
    const [checkStock, setCheckStock]= useState(false);
    const [newId, setNewId] = useState(0);
    const { currentUser } = useAuth();
    const uid = currentUser?.uid;
    const {addToCart}= useCartHandle(uid, id)
    const {cartValue}= useCartItemCheck(uid, newId);

    return(
        <div className={classes.main_div}>
            
            {productDetails!== undefined?Object.values(productDetails).length>0?(<>
                    <img className={classes.img} src={productDetails.imgLink} alt=''/>
                        <h4 className={classes.product_name}>{productDetails.name}</h4>
                        <div className={classes.product_description}>
                            <p className={classes.description}>{productDetails.description}</p>
                            
                        </div>
                    <div className={classes.product_details_cart}>
                        <p>Price: <b>BDT {productDetails.price}</b></p>
                        {productDetails && <div className={classes.color}>
                            <p>Color:</p>
                            {productDetails.color.map((color)=>{
                                return <span key={color} style={{ 'backgroundColor': color}}></span>
                            })}
                        </div> }
                        <p>MOQ: {productDetails.MOQ}</p>
                        <p>Delivery Time: <b>{productDetails.deliveryTime} days</b></p>
                        {productDetails.stock>0?(<p className={classes.instock}>In Stock</p>):(<p className={classes.outofstock}>Out of Stock</p>)}
                        <CartButton id={id} classname={classes.description_cart_btn} cart={cartValue} addToCart={addToCart} setCheckStock={setCheckStock} d={productDetails}/>
                        
                    </div>
                </>
   ):(
       <p>No Data Found</p>
   ):(
       <p>No Data Found</p>
   )            
                
            }
        </div>
    )
}