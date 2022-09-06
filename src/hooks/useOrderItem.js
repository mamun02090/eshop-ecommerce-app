import { getDatabase, orderByKey, query, ref, get } from "firebase/database";
import React, { useEffect, useState } from "react";


const useOrderItem=(uid)=>{
    const [loading, setLoading]= useState();
    const [error, setError]= useState();
    const [orderItem, setOrderItems]= useState([]);
    

    useEffect(()=>{
        async function getOrderItems(){
            const db= getDatabase();
            const orderRef= ref(db, `Orders/${uid}/CurentOrders`);
            const orderQuery= query(orderRef, orderByKey());
            try{
                setError("");
                setLoading(true);
                 const snapshot= await get(orderQuery)
                 setLoading(false);
                 if(snapshot.exists()){
                     setOrderItems( [...Object.values(snapshot.val())])
                 }
            }catch(err){
                setError(true);
                setLoading(false)
            }
        }
        getOrderItems();
    }, [uid])
    
    return {
        loading,
        error,
        orderItem
    }
}
export default useOrderItem