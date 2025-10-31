import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { SlLogout } from "react-icons/sl";
import { FaRegUserCircle } from "react-icons/fa";
import ThemeContext from '../hooks/ThemeContext';

const Navbar = ({setIsLoggedIn, loggedUser, setLoggedUser}) => {
  // console.log(loggedUser)

  const{theme,toggleTheme} = useContext(ThemeContext)
// console.log(theme, "in navbar")
  const navigate = useNavigate()

  function handleLogout(){
    setIsLoggedIn(false)
    setLoggedUser(null)
    navigate('/login')
  }

  return (
 <nav className={`navbar ${theme == 'light' ? 'navbar-light bg-light' : 'navbar-dark bg-dark'}`}>
  <div className="container-fluid">
    <a className="navbar-brand">Navbar</a>
    <form className="d-flex">
      <div className=" me-2" >
   

      {loggedUser ? (<>
      <FaRegUserCircle className=' text-warning ' />
      <span className='fw-bold text-warning mx-2'>
        {loggedUser.name}
        </span>
      <button className='btn btn-outline-danger' onClick={handleLogout}>
        <SlLogout/>
        <span  className='ps-2'>Logout</span>
        </button></>
      )    : (  
      <> <Link className="btn btn-outline-success" to="/register">Register</Link>
      <Link className="btn btn-outline-success" to="/login">Login</Link></>)}

      <button onClick={toggleTheme}>Change Theme</button>
      {/* <b>{theme}</b> */}
      </div>
    </form>
  </div>
</nav>
  )
}

export default Navbar
