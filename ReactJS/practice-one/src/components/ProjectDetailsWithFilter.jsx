import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

const ProjectDetails = () => {
  const [projects, setProjects] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [sortBy, setSortBy] = useState('')
  const [filterDept, setFilterDept] = useState('')
  const [loading, setLoading] = useState(true)

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

  // Filter + Search + Sort (simplified)
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
        <div className="d-flex justify-content-center align-items-center" style={{ height: '300px' }}>
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        /* --- Table --- */
        <div style={{ height: '500px', overflowY: 'scroll' }}>
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
              {filteredProjects.length > 0 ? (
                filteredProjects.map((project, i) => (
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
      )}
    </div>
  )
}

export default ProjectDetails
