import React, { useEffect, useState } from 'react'
import UserCard from './UserCard'
import users from '../user.js'
import { Link } from 'react-router-dom'

const UserList = () => {
    const [allUsers, setAllUsers] = useState()

    useEffect(()=>{
        setAllUsers(users)
    },[])

  return (
    <div className='container'>
        <div className="row mx-auto ">
            {allUsers ? <>{ allUsers.map((user, i)=>(
            <div className="col-12 col-md-6" key={i}>
                <Link to={`/${user.id}`}>
                <UserCard userData={user}/>
                </Link>
            </div>
       ))}</>   : <>No users</>}
       
       </div>
    </div>
  )
}

export default UserList
