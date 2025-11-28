const mysql = require("mysql");

const connection = require("../config/db");

async function totalPopulation(req, res) {
  try {
    console.log("***************");
    queryOne = "select SUM(Population) as tPop from country;";
    await connection.query(queryOne, (error, results) => {
      if (error) throw error;
      console.log(results[0]);
      res.status(200).send({ success: true, tPop: results[0] });
    });
  } catch (error) {
    res.status(500).send({ msg: "Server error", success: false });
  }
}

function topTENPOpContries(req, res) {
  try {
    const q2 =
      "SELECT Name, Population FROM country ORDER BY Population DESC LIMIT 10;";
    connection.query(q2, (error, results) => {
      if (error) throw error;
      console.log(results);
      res.status(200).send({ success: true, dOne: results });
    });
  } catch (error) {
    res.status(500).send({ msg: "Server error" });
  }
}

function getUniqueCont(req, res) {
  try {
    const q7 =
      "select distinct continent from country order by continent asc; ";
    connection.query(q7, (error, results) => {
      if (error) throw error;
      console.log(results);
      res.status(200).send({ success: true, dTwo: results });
    });
  } catch (error) {
    res.status(500).send({ msg: "Server error" });
  }
}

function dataOfContinent(req, res) {
  const {contiName} = req.query;
  try {
    q8 = `SELECT 
    COUNT(*) as total_countries,
    SUM(population) as total_population,
    sum(SurfaceArea) as SurfaceArea,
    sum(Capital) as Capital,
    avg(LifeExpectancy) as avg_LifeExpectancy,
    Region
    FROM country 
WHERE continent = ? 
GROUP BY Region
ORDER BY Region ASC; `;
    connection.query(q8,[contiName], (error, results) => {
      if (error) throw error;
      console.log(results);
      res.status(200).send({ success: true, dThree: results });
    });
  } catch (error) {
    res.status(500).send({ msg: "Server error" });
  }
}

// SELECT Name, Population FROM country ORDER BY Population DESC LIMIT 10;

module.exports = {
  totalPopulation,
  topTENPOpContries,
  getUniqueCont,
  dataOfContinent
};
