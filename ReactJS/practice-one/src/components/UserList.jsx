import React from 'react'
import UserCard from './UserCard'

const UserList = ({data}) => {
  return (
    <div className='container'>
        <div className="row mx-auto ">
       { data.map((user, i)=>(
            <div className="col-12 col-md-6" key={i}>
                <UserCard userData={user}/>
            </div>
       ))}
       </div>
    </div>
  )
}

export default UserList
