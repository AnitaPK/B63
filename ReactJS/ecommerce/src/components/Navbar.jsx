import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { SlLogout } from "react-icons/sl";
import { FaRegUserCircle } from "react-icons/fa";

const Navbar = ({setIsLoggedIn, loggedUser, setLoggedUser}) => {
  console.log(loggedUser)

  const navigate = useNavigate()

  function handleLogout(){
    setIsLoggedIn(false)
    setLoggedUser(null)
    navigate('/login')
  }

  return (
 <nav class="navbar navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand">Navbar</a>
    <form class="d-flex">
      <div class=" me-2" >

     

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
      <> <Link class="btn btn-outline-success" to="/register">Register</Link>
      <Link class="btn btn-outline-success" to="/login">Login</Link></>)}
      </div>
    </form>
  </div>
</nav>
  )
}

export default Navbar
