import React, { useEffect, useState } from 'react'
import { topTENPOpContry } from '../API/services'

const TOPTenConPopulation = () => {
const [tenConPop, setTenConPop] = useState([])

  async  function fetchData(){
        try {
            const res = await topTENPOpContry()
            if(res.data.success){
                setTenConPop(res.data?.dOne)
            }
        } catch (error) {
            
        }
    }

    useEffect(()=>{
        fetchData()
    },[])

console.log(tenConPop)

  return (
    <div>
      <ul>
        {tenConPop.map((x,i)=>(
            <li><b>{x.Name}</b> : <i>{x.Population}</i></li>
        ))}
      </ul>
    </div>
  )
}

export default TOPTenConPopulation
