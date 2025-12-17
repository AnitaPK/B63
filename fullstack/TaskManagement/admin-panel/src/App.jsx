import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import { ToastContainer } from 'react-toastify'
import Dashboard from './pages/Dashboard'
import ProtectedRoute from './components/ProtectedRoute'
import UserList from './components/UserList'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage />}></Route>
        <Route path='/register' element={<RegisterPage />}></Route>
            {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path='/dashboard/users' element={<UserList />}></Route>
        </Route>

      </Routes>
      <ToastContainer />
    </BrowserRouter>

  )
}

export default App
