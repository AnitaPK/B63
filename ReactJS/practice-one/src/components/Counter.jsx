import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount]  = useState(0)

    function handleIncreament(){
        setCount(count+1)
    }
    const handleDecreament = ()=>{
        setCount(count-1)
    }
  return (
    <div>
      <h1>Counter</h1>
      <h2>Count : {count}</h2>
      <button onClick={()=>setCount(count+1)}>Increament</button>
      <button onClick={()=>setCount(count-1)}>Decreament</button>
      <button onClick={handleIncreament}>Increament By Function</button>
      <button onClick={handleDecreament}>Decreament By Function</button>
    </div>
  )
}

export default Counter
