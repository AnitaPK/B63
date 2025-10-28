import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import users from "../user.js";

const UserDetails = () => {
  const [user, setUser] = useState();
  const { userId } = useParams();

  console.log(userId);

  function fetchUserData() {
    let foundUser = users.find((u) => (userId == u.id));
    setUser(foundUser);
  }

  useEffect(() => {
    fetchUserData();
  }, [userId]);

  return (
    <div>
      <h1>User Details</h1>

      {user ? (
        <>
          <p className="card-text">Contact : {user.phoneNumber}</p>
          <p className="card-text">Email : </p>

          <p className="card-text">
            Address : <address className="text-muted"></address>
          </p>
        </>
      ) : (
        <>No such user</>
      )}
    </div>
  );
};

export default UserDetails;
