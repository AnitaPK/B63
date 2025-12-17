import React, { useEffect, useState } from 'react'
import { FaSignOutAlt, FaTasks, FaUsers, FaPlus } from "react-icons/fa";
import { Link, replace, useNavigate } from "react-router-dom";
import { getLoggedUser } from '../api/userAPI';
import UserList from '../components/UserList';
import AddTask from '../components/AddTask';
import TaskList from '../components/TaskList';

const DashboardNavbar = () => {
  const [user,setUser] = useState()
  const navigate = useNavigate()

 const [activePage, setActivePage] = useState("dashboard");


  function handleLogout(){
    localStorage.removeItem('token6163')
    navigate('/',replace)
  }

async function fetchUser(){
  const res = await getLoggedUser()
  if(res.data.success){
    setUser(res.data.user)
  }
}
  useEffect(()=>{
    fetchUser()
  },[])

 const renderContent = () => {
    switch (activePage) {
      case "addTask":
        return <AddTask />;
      case "users":
        return <UserList />;
      case "tasks":
        return <TaskList />;
      default:
        return <h4>Welcome to Dashboard</h4>;
    }
  };



  return (
 <div className="container-fluid">
      <div className="row" style={{ minHeight: "100vh" }}>
        
        {/* Sidebar */}
        <div className="col-md-3 col-lg-2 bg-dark text-white p-3">
          <h5 className="text-center mb-4">👤 {user? user.name : 'user'}</h5>

          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <button
                className="btn btn-dark w-100 text-start"
                onClick={() => setActivePage("addTask")}
              >
                <FaPlus className="me-2" />
                Add Task
              </button>
            </li>

            <li className="nav-item mb-2">
              <button
                className="btn btn-dark w-100 text-start"
                      onClick={() => setActivePage("users")}
              >
                <FaUsers className="me-2" />
                Users List
              </button>
            </li>

            <li className="nav-item mb-2">
              <button
                className="btn btn-dark w-100 text-start"
                onClick={() => setActivePage("tasks")}
              >
                <FaTasks className="me-2" />
                Task List
              </button>
            </li>

            <hr />

            <li className="nav-item">
              <button
                className="btn btn-danger w-100 text-start"
                onClick={handleLogout}
              >
                <FaSignOutAlt className="me-2" />
                Logout
              </button>
            </li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="col-md-9 col-lg-10 p-4 bg-light">
          {renderContent()}
        </div>

      </div>
    </div>
  )
}

export default DashboardNavbar
