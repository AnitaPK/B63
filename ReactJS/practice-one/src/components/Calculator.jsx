import React, { useState } from 'react'

function Calculator(){
    const [num1, setNum1] = useState()
    const [num2, setNum2] = useState()
    const [result, setResult] = useState(0)
    console.log(num1, "num1")
    console.log(num2, "num2")

    function handleAddition(){
        const add = Number(num1)+Number(num2)
        console.log(add)
        setResult(add)
        setNum1('')
        setNum2('')

    }
function handleSubtraction(){
    const sub = Number(num1)-Number(num2)
        setResult(sub)
}
function handleMultiplication(){
    const multi = Number(num1)*Number(num2)
        setResult(multi)
}
function handleDivision(){
    if(num2 == 0){
        setResult(0)
    }else{
    const divi = Number(num1)/Number(num2)
        setResult(divi)
    }
}
    return(
        <>
        <h1 className='text-center '>Calculator</h1>
        <div className="container w-50 text-center">
            <input type='number' onChange={(e)=>setNum1(e.target.value)}/>
            <input type='number' onChange={(e)=>setNum2(e.target.value)}/>


            <div style={{height:"30px"}}>{result}</div>

            <div className='d-flex justify-content-between w-25 mx-auto my-2'>
            <button className='btn btn-primary' onClick={handleAddition}>+</button>
            <button className='btn btn-primary' onClick={handleSubtraction}>-</button>
            <button className='btn btn-primary' onClick={handleMultiplication}>*</button>
            <button className='btn btn-primary' onClick={handleDivision}>/</button>
            </div>
        </div>
        </>
    )
}


export default Calculator