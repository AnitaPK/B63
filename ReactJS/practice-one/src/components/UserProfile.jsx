import React from 'react'

const UserProfile = ({hero}) => {
  return (
    <div>
      <h1>{hero.Name}</h1>
      <h2>{hero.city}</h2>
      <p>{hero.FavoriteMovie}</p>
      <p>{hero.Award}</p>
      <p>{hero.Age}</p>


    </div>
  )
}

export default UserProfile
