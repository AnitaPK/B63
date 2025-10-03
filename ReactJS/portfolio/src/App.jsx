import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import ProjectList from './pages/ProjectList'
import AboutMePage from './pages/AboutMePage'
import ContactMePage from './pages/ContactMePage'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

function App() {

  return (
    <Router>
      <Navbar />
      <Routes >
        <Route path='/' element={<HomePage ></HomePage>}></Route>
        <Route path='/projects' element={<ProjectList />}></Route>
        <Route path='/about-me' element={<AboutMePage />}></Route>
        <Route path='/contact-me' element={<ContactMePage /> }></Route>
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
