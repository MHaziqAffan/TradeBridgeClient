// UserHome.jsx

import React from "react";
import AdminDashboard from "./AdminDashboard";
import { Link } from "react-router-dom";
export default function AdminHome() {
  return (
    <div className="userhome">
      <div>
        <AdminDashboard />
      </div>
      <div className="container-fluid  center-content">
        <div className="center-icons">
          <h2>Welcome to Admin Dashboard</h2>
          
          <div className="icon-container">
          <Link to='/viewseller'style={{color:"black"}}>
            <div className="icon">
              <i className="bi bi-search"></i> 
              <p>View Seller</p>
            </div>
          </Link>

          <Link to='/viewshipper' style={{color:"black"}}>
            <div className="icon">
              <i className="bi bi-search"></i>
              <p>View Shipper</p>
            </div>
          </Link>
            <Link to='' style={{color:"black"}}>
            <div className="icon">
              <i className="bi bi-search"></i>
              <p>View Shipments</p>
            </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
