import React from 'react'
import './GreetingFunctionalBased.css'

// const GreetingDiwaliFunctional = (props) => {
const GreetingDiwaliFunctional = ({nameUser, surname}) => {

    // console.log(props)
    // const firstName = props.nameUser
    // const lastName = props.surname
  return (
    <div>
      <h1 className='headingOne'> Happy Diwali {nameUser} {surname} </h1>
      {/* <h2>{`${firstName} ${lastName}`}</h2> */}
    </div>
  )
}

export default GreetingDiwaliFunctional
