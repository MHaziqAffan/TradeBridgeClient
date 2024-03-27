// UserGig.js
import React, { useState, useEffect } from "react";
import UserDashboard from "./UserDashboard";
import AdminDashboard from "./AdminDashboard";
import { useSelector } from "react-redux";
import axios from "axios";
import { useLocation } from "react-router-dom";

const UserGig = () => {
  const logedinUser = useSelector((state) => state.login.user);
  const [gigs, setGigs] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const sellerId = searchParams.get("seller");

    fetchGigs(sellerId);
  }, [location]);

  const fetchGigs = async (sellerId) => {
    try {
      const response = await axios.get(
        `http://localhost:8080/gig/showgigs?sellerId=${sellerId}`
      );
      setGigs(response.data.gigs);
    } catch (error) {
      console.error("Error fetching gigs:", error);
    }
  };

  return (
    <div className="userhome">
      {logedinUser.username === "admin" ? (
        <AdminDashboard />
      ) : (
        <UserDashboard />
      )}
      <div className="container">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {gigs.map((gig) => (
            <div className="col" key={gig._id}>
              <div className="card h-100">
                <img
                  src={gig.image}
                  className="card-img-top"
                  alt="Gig"
                  style={{ objectFit: "contain", height: "200px" }} // Adjust image styling
                />
                <div className="card-body">
                  <h5 className="card-title">{gig.product}</h5>
                  <p className="card-text">Category: {gig.category}</p>
                  <p className="card-text text-end">
                    <span className="text-success fw-bold fs-5">Starting Price: Rs{gig.price}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserGig;
