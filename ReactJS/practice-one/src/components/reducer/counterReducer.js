import React from "react";


//initial state 
export const initialState = {count:0}


// functions 
export const counterReducer = (state, action)=>{
    switch (action.type) {
        case 'increament':
            return {count : state.count + 1}
        case 'decreament':
            return {count :  state.count - 1}
        default:
            return state
    }
}