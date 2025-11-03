import React, { createContext } from "react";

export const CartContext = createContext({
    cart : [],
    cartLength:[],
    addToCart:()=>{},
    removeFromCart:()=>{}
});
