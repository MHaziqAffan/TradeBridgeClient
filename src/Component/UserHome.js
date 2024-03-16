// UserHome.jsx

import React from "react";
import UserDashboard from "./UserDashboard";
import { Link } from "react-router-dom";
export default function UserHome() {
  return (
    <div className="userhome">
      <div>
        <UserDashboard />
      </div>
      <div className="container-fluid  center-content">
        <div className="center-icons">
          <h2>Welcome to User Dashboard</h2>
          
          <div className="icon-container">
          <Link to='/findseller'style={{color:"black"}}>
            <div className="icon">
              <i className="bi bi-search"></i> 
              <p>Find Seller</p>
            </div>
          </Link>

          <Link to='/findshipper' style={{color:"black"}}>
            <div className="icon">
              <i className="bi bi-search"></i>
              <p>Find Shipper</p>
            </div>
          </Link>
            <Link to='/addgig' style={{color:"black"}}>
            <div className="icon">
              <i className="bi bi-plus-circle"></i>
              <p>Add Gig</p>
            </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
