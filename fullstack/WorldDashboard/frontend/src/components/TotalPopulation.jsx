import React, { useEffect, useState } from "react";
import { getTotPopulation } from "../API/services";

const TotalPopulation = () => {
  const [tPOP, setTPOP] = useState();

  async function fetchData() {
    try {
      const res = await getTotPopulation();
      if (res.data.success) {
        setTPOP(res.data?.tPop);
      }
    } catch (error) {}
  }

  useEffect(() => {
    fetchData();
  }, []);

  console.log(tPOP);

  return <div>Total Population : {tPOP && <span>{tPOP.tPop}</span>}</div>;
};

export default TotalPopulation;
