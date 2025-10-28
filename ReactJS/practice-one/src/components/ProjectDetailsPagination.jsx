import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

const ProjectDetailsPagination = () => {
  const [projects, setProjects] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [sortBy, setSortBy] = useState('')
  const [filterDept, setFilterDept] = useState('')
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10

  // Fetch data
  function fetchData() {
    setLoading(true)
    fetch('https://674e84f1635bad45618eebc1.mockapi.io/api/v1/projects')
      .then((response) => response.json())
      .then((data) => {
        setProjects(data)
        setLoading(false)
      })
      .catch((err) => {
        console.log(err)
        setLoading(false)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  // Extract unique departments
  const departments = [...new Set(projects.map((p) => p.Department))]

  // Filter + Search + Sort
  const filteredProjects = projects
    .filter(
      (p) =>
        p.ProjectName.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (!filterDept || p.Department === filterDept)
    )
    .sort((a, b) => {
      switch (sortBy) {
        case 'priority':
          return a.priority.localeCompare(b.priority)
        case 'status':
          return a.status.localeCompare(b.status)
        case 'endDate':
          return new Date(a.EndDate) - new Date(b.EndDate)
        default:
          return 0
      }
    })

  // Pagination logic
  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage)
  //           3 ==      23 / 10
  const startIndex = (currentPage - 1) * itemsPerPage
  //start index of firstpage   (1-1) * 10   =0
  //startIndex of second page   (2-1) * 10  =10 
  const currentProjects = filteredProjects.slice(
    startIndex,
    startIndex + itemsPerPage
  )

  // arr1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
  //totalPages = 2
  // startIndex of first page = 0
  // currentRollnumber = arr1.slice(startIndex, itemsPerPage + startIndex)
                      //  [1,2,3 ,4 ,5 ,6 ,7 ,8 ,9, 10]

  // Reset page to 1 when filters/search change
  useEffect(() => {
    setCurrentPage(1)
  }, [searchTerm, filterDept, sortBy])

  return (
    <div className="container mt-4">
      {/* --- Top Controls --- */}
      <div className="row mb-3">
        <div className="col-md-4">
          <input
            type="text"
            className="form-control"
            placeholder="Search by Project Name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="col-md-4">
          <select
            className="form-select"
            value={filterDept}
            onChange={(e) => setFilterDept(e.target.value)}
          >
            <option value="">All Departments</option>
            {departments.map((dept, i) => (
              <option key={i} value={dept}>
                {dept}
              </option>
            ))}
          </select>
        </div>

        <div className="col-md-4 text-end">
          <select
            className="form-select w-auto d-inline"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="">Sort By</option>
            <option value="priority">Priority</option>
            <option value="status">Status</option>
            <option value="endDate">End Date</option>
          </select>
        </div>
      </div>

      {/* --- Loading Spinner --- */}
      {loading ? (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: '300px' }}
        >
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <>
          {/* --- Table --- */}
          <div>
            <table className="table table-striped table-bordered">
              <thead className="table-light">
                <tr>
                  <th>#</th>
                  <th>Project Name</th>
                  <th>Details</th>
                  <th>Department</th>
                  <th>Status</th>
                  <th>Priority</th>
                  <th>Start Date</th>
                  <th>End Date</th>
                </tr>
              </thead>
              <tbody>
                {currentProjects.length > 0 ? (
                  currentProjects.map((project, i) => (
                    <tr key={i}>
                      <th>{project.id}</th>
                      <td>{project.ProjectName}</td>
                      <td>{project.Details}</td>
                      <td>{project.Department}</td>
                      <td>{project.status}</td>
                      <td>{project.priority}</td>
                      <td>{new Date(project.startDate).toLocaleDateString()}</td>
                      <td>{new Date(project.EndDate).toLocaleDateString()}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="8" className="text-center">
                      No project found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* --- Pagination --- */}
          {filteredProjects.length > 10 && (
            <nav className="d-flex justify-content-center mt-3">
              <ul className="pagination">
                <li className={`page-item ${currentPage === 1 && 'disabled'}`}>
                  <button
                    className="page-link"
                    onClick={() => setCurrentPage(currentPage - 1)}
                  >
                    Previous
                  </button>
                </li>

                {Array.from({ length: totalPages }, (_, i) => (
                  <li
                    key={i}
                    className={`page-item ${
                      currentPage === i + 1 ? 'active' : ''
                    }`}
                  >
                    <button
                      className="page-link"
                      onClick={() => setCurrentPage(i + 1)}
                    >
                      {i + 1}
                    </button>
                  </li>
                ))}

                <li
                  className={`page-item ${
                    currentPage === totalPages && 'disabled'
                  }`}
                >
                  <button
                    className="page-link"
                    onClick={() => setCurrentPage(currentPage + 1)}
                  >
                    Next
                  </button>
                </li>
              </ul>
            </nav>
          )}
        </>
      )}
    </div>
  )
}

export default ProjectDetailsPagination
