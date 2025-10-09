import React from 'react'
import characters from "../data/villains"
const Villains = () => {
    
console.log(characters)

  return (
    <div>
      <ul>
        {characters.map((v,i)=>(
          <li key={i}>{v}</li>
        ))}
      </ul>
    </div>
  )
}

export default Villains
