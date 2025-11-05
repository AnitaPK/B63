import React, { useReducer } from 'react'
import { counterReducer, initialState } from './counterReducer.js'

const CounterComponent = () => {
    const [state, dispatch] = useReducer(counterReducer,initialState)
console.log(state)
  return (
    <div>
    <h1>Reducer counter</h1>

      Count : {state.count}
      <button onClick={()=>dispatch({type:'increament'})}>Increament</button>
      <button onClick={()=>dispatch({type:'decreament'})}>Decreament</button>
    </div>
  )
}

export default CounterComponent
