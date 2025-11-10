import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const LoginPage = ({setIsLoggedIn, setLoggedUser}) => {
  const [email,setEmail] = useState()
  const [password,setPassword] = useState()
  const [registerUser, setRegisterUser] = useState()

  const navigate = useNavigate()

  function getDataFromLocalStorage(){
   const savedUser = JSON.parse(localStorage.getItem('b63User'))
   setRegisterUser(savedUser)
  }


  const inputRef11 = useRef(null)
  function handleFocus(){
     inputRef11.current.focus()
  }

  useEffect(()=>{
      getDataFromLocalStorage()
      handleFocus()
  },[])



  function handleLogin(e){
    e.preventDefault()

    console.log(registerUser)

    if(email != registerUser.email){
      toast.error("email not registered")
    }else{
      if(password != registerUser.password){
        toast.error("Invalid password")
      }else{
        setLoggedUser(registerUser)
        setIsLoggedIn(true)
        navigate('/')
      }
    }

  }

  return (
    <section>
      <div className="container py-5 mt-5">
        <div className="row mx-auto">
          <div className="col-12  col-md-6">
            <div className="w-50 mx-auto bg-secondary h-100 rounded-circle"></div>
          </div>
          <div className="col-12 col-md-6 ">
            <form className="w-75 border rounded p-5 bg-warning" onSubmit={handleLogin}>
              <h3 className="mb-4">Login here</h3>
              <div className="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  onChange={(e)=>setEmail(e.target.value)}
                  ref={inputRef11}
                />
              {/* <button onClick={()=>inputRef11.current.focus()}>Click for focus</button> */}
              </div>
              <div className="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  onChange={(e)=>setPassword(e.target.value)}
                />
              </div>

              <button type="submit" className="btn btn-primary">
                Login
              </button>
              <Link to="/register" className="ms-3">
                If not register
              </Link>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default LoginPage;
