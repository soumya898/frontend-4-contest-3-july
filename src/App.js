import React, { useState } from "react";
import Login from "./Components/Login";
import Profilepage from "./Components/Profilepage";
import  "./style.css"
const App = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  
  const handleLogin = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setUser(user);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <div className="container">
      {user ? (
        <>
          <Profilepage userId={user.id} />
          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;
