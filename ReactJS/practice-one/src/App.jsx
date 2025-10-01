import './App.css'
import GreetingClassBased from './components/GreetingClassBased'
import GreetingFunctionalBased from './components/GreetingFunctionalBased'
import TributePage from './components/TributePage'
import GreetingDiwaliFunctional from './components/GreetingDiwaliFunctional'
import Fruits from './components/Fruits'
import UserProfile from './components/UserProfile'

function App() {
  const fruitList = ["Apple", "Banana", 'Orange']
  const userData={
    name:"Salman Khan",
    city:"Mumbai",
    FavoriteMovie:"Radhe",
    Award:"Filmfare 2030",
    Age:60
  }
  return (
    <>
    <UserProfile hero={userData}/>
    <Fruits fruitList={fruitList}/>
    <GreetingDiwaliFunctional  nameUser='Shubham ' surname="Nikam" age={20} />
    <GreetingDiwaliFunctional nameUser="Rohan" surname="Mainderkar" />
    <GreetingDiwaliFunctional nameUser="Harsh" surname=" Chouhan"/>


    <GreetingClassBased user="Ravan" />
    <GreetingClassBased user="Kumbhkaran" />
    <GreetingClassBased user="Surpanakha" />

    <hr></hr>
    <GreetingFunctionalBased />
      <TributePage />
    </>
  )
}

export default App
