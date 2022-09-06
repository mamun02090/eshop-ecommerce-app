import { getDatabase, ref, remove, set, update } from "firebase/database"
import React, { useContext } from "react"
import { useAuth } from "./AuthContext";

const OrderContext= React.createContext()
export function useOrderHandle(){
    return useContext(OrderContext)
}
export function OrderProvider({children}){
    const db= getDatabase();
    const {currentUser}= useAuth();
    const uid = currentUser?.uid;

    const orderItemHandle=async (cartItem, phoneNumber, address, orderId, setCartQuantity, setCartItemArr)=>{
        setCartQuantity(0);
        
        const deleteRef = ref(db, `cartItems`);
        remove(deleteRef);
        const orderItemRef= ref(db, `Orders/${uid}/CurentOrders/${orderId}`);
        await set(orderItemRef, {
            'orderId': orderId,
            'cartItems': cartItem,
            'mobileNumber': phoneNumber,
            'address': address,
            'date': new Date().toDateString(), 
        });
        cartItem.map(async (item)=>{
            return await update(ref(db, `product-details/${item.productID}`), {
                "stock": item.stock-item.amount
            })
            
        });
    }
    const value= {
        orderItemHandle,
        
    }
    return(
        <OrderContext.Provider value={value}>
            {children}
        </OrderContext.Provider>
    )
}