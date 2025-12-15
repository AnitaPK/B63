import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import { ToastContainer } from 'react-toastify'
import Dashboard from './pages/Dashboard'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage />}></Route>
        <Route path='/register' element={<RegisterPage />}></Route>
        {/* <ProtectedRoute>
          <Route  path='/dahsboard' element={<DashboardNavbar />} ></Route>
        </ProtectedRoute> */}
          <Route  path='/dashboard' element={<Dashboard />} ></Route>

      </Routes>
      <ToastContainer />
    </BrowserRouter>

  )
}

export default App
