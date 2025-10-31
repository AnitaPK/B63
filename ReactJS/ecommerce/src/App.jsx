import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'
import RegisterPage from './pages/RegisterPage'
import Login from './pages/LoginPage'
import Cart from './pages/Cart'
import { useState } from 'react'
import ThemeProvider from './hooks/ThemeProvider'


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [loggedUser, setLoggedUser] = useState()
  return (
    <BrowserRouter>
    <ThemeProvider>

        <Navbar setIsLoggedIn={setIsLoggedIn} loggedUser={loggedUser} setLoggedUser={setLoggedUser} />
        <Routes>
          <Route path='/' element={<Dashboard />} ></Route>
          <Route path='/login' element={<Login setIsLoggedIn={setIsLoggedIn} setLoggedUser={setLoggedUser} />} ></Route>
          <Route path='/register' element={<RegisterPage />}></Route>
          <Route path='/cart' element={<Cart />}></Route>
        </Routes>
    </ThemeProvider>

    </BrowserRouter>
  )
}

export default App
