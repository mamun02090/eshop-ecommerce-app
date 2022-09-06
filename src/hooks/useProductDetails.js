import { getDatabase, orderByKey, query, ref, get } from "firebase/database";
import React, { useEffect, useState } from "react";


const ProductDetails=(productID)=>{
    const [loading, setLoading]= useState();
    const [error, setError]= useState();
    const [productDetails, setProductDetails]= useState({});
    

    useEffect(()=>{
        async function getProductDetails(){
            const db= getDatabase();
            const refproductDetails= ref(db, `product-details/${productID}`);
            const detailsQuery= query(refproductDetails, orderByKey());
            try{
                setError("");
                setLoading(true);
                 const snapshot= await get(detailsQuery)
                 setLoading(false)
                 if(snapshot.exists()){
                     setProductDetails( snapshot.val())
                 }
            }catch(err){
                setError(true);
                setLoading(false)
            }
        }
        getProductDetails();
    }, [productID])
    
    return {
        loading,
        error,
        productDetails
    }
}
export default ProductDetails