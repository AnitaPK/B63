import React, { useEffect, useState } from 'react'

const ProjectDetails = () => {
    const [projects,setProjects] = useState()

    function fetchData(){
        fetch('https://674e84f1635bad45618eebc1.mockapi.io/api/v1/projects')
        .then(responce=>responce.json())
        .then(data=>setProjects(data))
        .catch(err=>console.log(err))
    }

    useEffect(()=>{
        fetchData();
    })



  return (
    <div className='container' style={{height:"500px",overflow:"scroll"}}>
      <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Project Name</th>
      <th scope="col">Details</th>
      <th scope="col">Department</th>
      <th scope="col">status</th>
      <th scope="col">priority</th>
      <th scope="col">startDate</th>
      <th scope="col">EndDate</th>
    </tr>
  </thead>
  <tbody>
    {projects?.length > 0 ? (<>{projects.map((project,i)=>(
        <tr key={i}>
            <th >{project.id}</th>
            <td>{project.ProjectName}</td>
            <td>{project.Details}</td>
            <td>{project.Department}</td>
            <td>{project.status}</td>
            <td>{project.priority}</td>
            <td>{project.startDate}</td>
            <td>{project.EndDate}</td>

        </tr>
    ))}</>) : (
        <tr>No project found</tr>
    )}
    
    
  </tbody>
</table>
    </div>
  )
}

export default ProjectDetails
