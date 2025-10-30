import { useState } from 'react'
import './App.css'
import ProductList from './components/ProductList'
import FruitList from './components/FruitList'
import Users from './components/Users'

function App() {

  return (
    <>
    <Users />
    <FruitList />
     <ProductList />
    </>
  )
}

export default App
