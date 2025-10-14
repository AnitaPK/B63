import "./App.css";
import GreetingClassBased from "./components/GreetingClassBased";
import GreetingFunctionalBased from "./components/GreetingFunctionalBased";
import TributePage from "./components/TributePage";
import GreetingDiwaliFunctional from "./components/GreetingDiwaliFunctional";
import Fruits from "./components/Fruits";
import UserProfile from "./components/UserProfile";
import Counter from "./components/Counter";
import ChangeHeading from "./components/ChangeHeading";
import Calculator from "./components/Calculator";
import ConditionalRendering from "./components/ConditionalRendering";
import "./App.css";
import { useState } from "react";
import ConditionalRenderingAssignments from "./components/ConditionalRenderingAssignments";
import Villains from "./components/Villains";
import {singleUserData} from "./data/singleUser.js"
import UserCard from "./components/UserCard.jsx";
import UserList from "./components/UserList.jsx";
import users from './data/users.js'
import ProjectDetails from "./components/ProjectDetails.jsx";

function App() {
  const fruitList = ["Apple", "Banana", "Orange", "Watermelon"];
  const userData = {
    name: "Salman Khan",
    city: "Mumbai",
    FavoriteMovie: "Radhe",
    Award: "Filmfare 2030",
    Age: 60,
  };
  const [theme, setTheme] = useState("light");
  function handleTheme() {
    console.log(theme);
    if (theme == "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }

  return (
    <>
    <ProjectDetails />
    <UserList data={users}/>
    <UserCard userData={singleUserData}/>
    <Villains />
    <ConditionalRenderingAssignments />
      <button className={`btn btn-warning`} onClick={handleTheme}>
        ChangeTheme
      </button>
      <div className={`${theme == "dark" ? "darkTheme" : "lightTheme"} `}>
        <ConditionalRendering />
        <Calculator />
        <ChangeHeading />
        <Counter />
        <UserProfile hero={userData} />
        <Fruits fruitList={fruitList} />
        <GreetingDiwaliFunctional
          nameUser="Shubham "
          surname="Nikam"
          age={20}
        />
        <GreetingDiwaliFunctional nameUser="Rohan" surname="Mainderkar" />
        <GreetingDiwaliFunctional nameUser="Harsh" surname=" Chouhan" />

        <GreetingClassBased user="Ravan" />
        <GreetingClassBased user="Kumbhkaran" />
        <GreetingClassBased user="Surpanakha" />

        <hr></hr>
        <GreetingFunctionalBased />
        <TributePage />
      </div>
    </>
  );
}

export default App;
