import React from "react";
import { useNavigate } from "react-router-dom";
import "./UserDashboard.css";

function UserDashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authToken");

    navigate("/");
  };

  return (
    <div className="user-dashboard">
      <header>
        <h1>Welcome to Your Dashboard</h1>
      </header>
      <main>
        <div className="content">
          {/* space for extra adding any contents */}
          <p>This is your user dashboard content.</p>
        </div>
      </main>
      <footer>
        <button onClick={handleLogout}>Logout</button>
      </footer>
    </div>
  );
}

export default UserDashboard;
