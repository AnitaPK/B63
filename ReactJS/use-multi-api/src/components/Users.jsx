import React from 'react'
import useCustomAPI from  '../hooks/useCustomAPI'

const Users = () => {
  const {products,error,loading} = useCustomAPI('https://jsonplaceholder.typicode.com/users')
    if(loading) return <p>Loading...</p>
    if(error) return <p>Error while loading fruits...{error.message}</p>
  return (
    <div>
        <ul>
            {products.map((u,i)=>(
                <li key={i}>
                    {u.name}
                    <ul>
                        <li>{u.email}</li>
                        <li>{u.website}</li>
                    </ul>
                </li>
            ))}
        </ul>
    </div>

)}

export default Users
