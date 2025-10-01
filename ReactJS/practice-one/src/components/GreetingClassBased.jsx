import React from 'react'
import './GreetingFunctionalBased.css'

class GreetingClassBased extends React.Component{
    render(){
        console.log(this.props)
        return(
            <>
            <h1 className='headingOne'>Happy Dusshra {this.props.user}</h1>
            </>
        )
    }
}



export default GreetingClassBased