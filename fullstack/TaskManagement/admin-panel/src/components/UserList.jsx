import React, { useEffect, useState } from 'react'
import { getAllUserList } from '../api/userAPI'

const UserList = () => {
    const [users,setUsers] = useState([])
    const [users10,setUsers10] = useState([])

 const [currentPage, setCurrentPage] = useState(1);
 const usersPerPage = 10;

   async function fetchData() {
    const res = await getAllUserList()
    if(res.data.success){
        setUsers(res.data.users)
    }
   }


   useEffect(()=>{
    fetchData()
   },[])

// 🔹 Load users after component mounts
  useEffect(() => {
    // Dummy users (replace with API later)
    const dummyUsers = Array.from({ length: 45 }, (_, index) => ({
      id: index + 1,
      name: `User ${index + 1}`,
    }));

    setUsers10(dummyUsers);
  }, []);

  // 🔹 Pagination logic
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(
    indexOfFirstUser,
    indexOfLastUser
  );

  const totalPages = Math.ceil(users.length / usersPerPage);
   console.log(users)

  return (
     <div className="container mt-4">
      <h4 className="mb-3">Users List</h4>

      <table className="table table-bordered table-striped">
        <thead className="table-dark">
          <tr>
            <th>User ID</th>
            <th>User Name</th>
          </tr>
        </thead>
        <tbody>
          {currentUsers.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* 🔹 Pagination */}
      <nav>
        <ul className="pagination">
          {Array.from({ length: totalPages }, (_, index) => (
            <li
              key={index}
              className={`page-item ${
                currentPage === index + 1 ? "active" : ""
              }`}
            >
              <button
                className="page-link"
                onClick={() => setCurrentPage(index + 1)}
              >
                {index + 1}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default UserList
