import React, { useContext, useState, useEffect } from "react";
import useCartItemCheck from "../hooks/useCartItemCheck";
import { useAuth } from "./AuthContext";
import { getDatabase, ref, set, update, remove } from "firebase/database";
const CartContext= React.createContext();
export function useCartHandle(){
    return useContext(CartContext)
}
export function CartProvider({children}){
    const [cartQuantity, setCartQuantity]= useState(0);
    const [itemQuantity, setItemQuantity]= useState(1)
    const [cartItemArr, setCartItemArr]= useState([]);
    const [totalprice, setTotalPrice]= useState(0)
    const [newId, setNewId] = useState(0);
    const {currentUser}= useAuth();
    const uid= currentUser?.uid;   
    const {loading, error, cartValue}= useCartItemCheck(currentUser?.uid || 0, newId, itemQuantity, cartQuantity);
    useEffect(()=>{
        if(!loading && !error){
            setCartItemArr([...cartValue]);
            setCartQuantity(cartItemArr.length);
            priceCalculation();
        }
        
    },[cartItemArr.length, cartValue]);
    function increment(id, d, quantity, color){
        priceCalculation()
        quantity=quantity+1
        updateCart(id, d, quantity, color);
        setItemQuantity(quantity);
    }
    
    function decrement(id, d, quantity, color){
        priceCalculation();
        quantity=quantity-1;
        updateCart(id, d, quantity, color);
        setItemQuantity(quantity)
    }

    async function updateCart(id, product, quantity, color){
        setNewId(id);
        if( cartItemArr){
            const db= getDatabase();
            const cartRef= ref(db, `cartItems/${uid}/currentCart/${id}`);
            if(Object.values(product).length>0){
                await update(cartRef, {
                    "selectedColor": color, 
                    "amount": quantity?quantity: 1
                });
            }
        }
        
    }
    const addToCart =async (id, d, e) => {
        e.preventDefault();
        setNewId(id);   
        
        if( cartItemArr){
            const db= getDatabase();
            const cartRef= ref(db, `cartItems/${uid}/currentCart/${id}`);
            if(Object.values(d).length>0){
                await set(cartRef, {
                    "productID": id,
                    "name": d.name,
                    "price": d.price,
                    "MOQ": d.MOQ,
                    "imgLink": d.imgLink,            
                    "stock": d.stock,
                    "color": d.color, 
                    "selectedColor": d.color[0],
                    "amount": 1,
                    "description": d.description,
                    'status': 'Order Placed'
                });
            }
        }
        priceCalculation();
    }
    const priceCalculation=()=>{
        const price= cartValue.map((item)=>{
            return Number(item.amount)*item.price
        });
        setTotalPrice(price.reduce((total, num)=> total+num, 0));
        
    }
    const deleteCart=(id)=>{
        const db= getDatabase();
        let deleteRef = ref(db, `cartItems/${uid}/currentCart/${id}`);
        remove(deleteRef);
        const cartIndex= cartValue.map((item, index)=> item.productID===id? index: -1).filter((num)=> num!==-1);
        cartValue.splice(cartIndex[0], 1);
        setCartItemArr(cartValue)
    }
    
    const value={
        cartItemArr,
        setCartItemArr,
        newId,
        cartQuantity,
        setCartQuantity,
        addToCart,
        increment,
        decrement,
        deleteCart,
        updateCart,
        itemQuantity,
        totalprice,
        loading,
        error
    }


    return(
        <CartContext.Provider value={value}>
            {!loading && !error && children}
        </CartContext.Provider>
    )
}