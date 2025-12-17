// import React from 'react'
// import { Link } from 'react-router-dom'

// const DashboardNavbar = () => {
//   return (
//  <div className="container-fluid">
//       <div className="row" style={{ minHeight: "100vh" }}>
        
//         {/* Sidebar */}
//         <div className="col-md-3 col-lg-2 bg-dark text-white p-3">
//           <h5 className="text-center mb-4">👤 {userName}</h5>

//           <ul className="nav flex-column">
//             <li className="nav-item mb-2">
//               <button
//                 className="btn btn-dark w-100 text-start"
//                 onClick={() => setActivePage("addTask")}
//               >
//                 <FaPlus className="me-2" />
//                 Add Task
//               </button>
//             </li>

//             <li className="nav-item mb-2">
//               <Link
//                 className="btn btn-dark w-100 text-start"
//                 // onClick={() => setActivePage("users")}
//                 to='/users'
//               >
//                 <FaUsers className="me-2" />
//                 Users List
//               </Link>
//             </li>

//             <li className="nav-item mb-2">
//               <button
//                 className="btn btn-dark w-100 text-start"
//                 onClick={() => setActivePage("tasks")}
//               >
//                 <FaTasks className="me-2" />
//                 Task List
//               </button>
//             </li>

//             <hr />

//             <li className="nav-item">
//               <button
//                 className="btn btn-danger w-100 text-start"
//                 onClick={handleLogout}
//               >
//                 <FaSignOutAlt className="me-2" />
//                 Logout
//               </button>
//             </li>
//           </ul>
//         </div>

//         {/* Main Content */}
//         <div className="col-md-9 col-lg-10 p-4 bg-light">
//           {renderContent()}
//         </div>

//       </div>
//     </div>
//   )
// }

// export default DashboardNavbar
