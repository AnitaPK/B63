import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'
import RegisterPage from './pages/RegisterPage'
import Login from './pages/LoginPage'
import Cart from './pages/Cart'


function App() {

  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Dashboard />} ></Route>
          <Route path='/login' element={<Login />} ></Route>
          <Route path='/register' element={<RegisterPage />}></Route>
          <Route path='/cart' element={<Cart />}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
