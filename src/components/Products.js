
import Product from "./Product";
import classes from '../styles/Products.module.css';
import useProductList from "../hooks/useProductList";
import { useCartHandle } from "../contexts/CartHandleContext";
export default function Products({click}){
    const { loading, error, products } = useProductList();
    const {cartItemArr, addToCart}= useCartHandle();  
    return(
        !loading && !error && <div className={classes.product_main}>
            {products.length>0 && products.map((product)=>{
              
                return (
                  <div className={classes.products} key={product.productID}>
                    <Product
                      addToCart={addToCart}
                      img={product.imgLink}
                      name={product.name}
                      price={product.price}
                      moq={product.MOQ}
                      id={product.productID}
                      cart={cartItemArr}
                    />
                  </div>
                )
            })}
            {!loading && error && <p className="error">An Error Occured</p>}
            {!loading && products.length<=0 && <p>No Data Found</p>}
            {loading && <p>Loading....</p>}
        </div>
    )
}