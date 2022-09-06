import { getDatabase, orderByKey, query, ref, get } from "firebase/database";
import { useEffect, useState } from "react";


export default function useCartItemCheck(userID, id, quantity, cartQuantity){
    const [loading, setLoading]= useState(true);
    const [error, setError]= useState();
    const [cartValue, setCartValue]= useState([]);
    async function getcartCheck(){
        
        const db= getDatabase();
        const refcartCheck= ref(db, `cartItems/${userID}/currentCart`);
        const cartCheckQuery= query(refcartCheck, orderByKey());
        try{
            setError("");
            
             const snapshot= await get(cartCheckQuery)
             setLoading(false);
             
             if(snapshot.exists()){
                 setCartValue(()=> {
                    return [...Object.values(snapshot.val())]
                 })
             }else{
                setCartValue(()=> {
                    return []
                 }) 
             }
        }catch(err){
            setError(true);
            setLoading(false)
        }
        
    }

    useEffect(()=>{
        getcartCheck();
    }, [userID, id, quantity, cartQuantity])
    
    return {
        loading,
        error,
        cartValue
    }
}