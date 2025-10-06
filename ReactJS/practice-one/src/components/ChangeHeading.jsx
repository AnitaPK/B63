import React, { useState } from 'react'

const ChangeHeading = () => {
    const [heading, setHeading] = useState('Hello World')
  return (
    <div>
      <h1>{heading}</h1>
      <button onClick={()=>setHeading("Welcome to React")}>Change Heading</button>
    </div>
  )
}

export default ChangeHeading
