import React from "react";
import { useState } from "react";


const CartContext = React.createContext();

const CartProvider = (props)=>{
    const [cartData, setCartData] = useState([]);
   

    const addCartData=(data)=>{
       setCartData([...cartData,data]);
      
    }
    
    const removeData =(data)=>{
      setCartData([""])
     
    }
    const getTotalCartAmount = () => {
    
        let totalAmount = 0;
        for (const item in cartData) {
      
          if (cartData[item] > 0) {
            
            let itemInfo = cartData.find((product) => product.id === Number(item));
            console.log(itemInfo);
            totalAmount += cartData[item] * itemInfo.Price;         
          }
        }
        return totalAmount;
      };
    
 
    return(
        <CartContext.Provider value={{cartData, addCartData,getTotalCartAmount, removeData}}>
            {props.children}
        </CartContext.Provider>
    )
}

export {CartContext, CartProvider};