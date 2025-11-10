import React from 'react'
import ProductList from '../components/ProductList'

const Dashboard = ({onApplyClick}) => {
  return (
    <>
     <ProductList onApplyClick={onApplyClick} /> 
    </>
  )
}

export default Dashboard
