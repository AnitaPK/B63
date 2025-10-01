import React from 'react'

const Fruits = ({fruitList}) => {
  return (
    <div>
        <ul>
            {fruitList.map((f)=>(
                <li>{f}</li>
            ))}
        </ul>
    </div>
  )
}

export default Fruits
