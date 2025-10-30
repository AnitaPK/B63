import React from 'react'
import useCustomAPI from '../hooks/useCustomAPI'

const FruitList = () => {
    const {products,error,loading} = useCustomAPI('https://www.fruityvice.com/api/fruit/all')
    if(loading) return <p>Loading...</p>
    if(error) return <p>Error while loading fruits...{error.message}</p>
  return (
    <div>
        <ul>
            {products.map((f,i)=>(
                <li key={i}>
                    {f.name}
                    <ul>
                        <li>{f.family}</li>
                        <li>{f.nutritions.calories}</li>
                    </ul>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default FruitList
