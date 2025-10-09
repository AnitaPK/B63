import React from 'react'

const UserCard = ({userData}) => {
    console.log(userData)
  return (
    <div>
      <div className="card mb-3" style={{maxWidth: "540px"}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={userData.img} className="img-fluid rounded-start w-100 pt-5" alt="..." />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{userData.name}</h5>
        <p className="card-text">Contact : {userData.phoneNumber}</p>
        <p className="card-text">Email : {userData.email}</p>

        <p className="card-text">Address : <address className="text-muted">{userData.address}</address></p>
        <h4 className="card-text">companyName : {userData.companyName}</h4>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default UserCard
