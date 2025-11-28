import React, { useEffect, useState } from "react";
import { getUniqueConti, getDataByConti } from "../API/services";

const AllContinent = () => {
  const [continents, setContinents] = useState([]);
    const [cName, setCName] = useState()
  async function fetchData() {
    try {
      const res = await getUniqueConti();
      if (res.data.success) {
        setContinents(res.data?.dTwo);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  console.log(continents);


  async function fetchContiData(cName){
    console.log("Cliked**********", cName)
    try {
          const res = await getDataByConti(cName)
          console.log(res.data.success,"*************")
    } catch (error) {
        
    }
  }


  return (
    <div>
      <select class="form-select" aria-label="Default select example"       onChange={(e) => {
          setCName(e.target.value);
          fetchContiData(e.target.value);
        }}>
             <option value="">Select Continent</option>
        {continents.map((c)=>(
        <option  value={c.continent} >{c.continent}</option>
        ))}
        
      </select>
    </div>
  );
};

export default AllContinent;
