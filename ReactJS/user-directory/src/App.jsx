import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UserList from './components/UserList'
import UserDetails from './components/UserDetails'

function App() {

  return (
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<UserList />}></Route>
      <Route path='/:userId' element={<UserDetails />}></Route>
     </Routes>
    </BrowserRouter>
  )
}

export default App
