import React, { useEffect, useState } from "react";

const ConditionalRendering = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");

  function handleLogin() {
    setIsLoggedIn(true);
    setUserName("Harsh");
  }
  function hadleLogout(){
        setUserName('')
        setIsLoggedIn(false)
  }
  return (
    <div>
      <h1> Conditional Rendering </h1>
      {isLoggedIn ? <h1>Welcome to my site</h1> : <h1>Please logged in</h1>}
      <button onClick={handleLogin}>Login</button>
      {isLoggedIn && (
        <>
          <h2>welcome {userName}</h2> 
          <button onClick={hadleLogout}>logout</button>
        </>
      )}


    </div>
  );
};

export default ConditionalRendering;
