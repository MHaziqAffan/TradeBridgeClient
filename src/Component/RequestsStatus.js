import React, { useEffect, useState } from "react";
import UserDashboard from "./UserDashboard";
import axios from "axios";
import { useSelector } from "react-redux";

export default function ShipperHome() {
  const [requests, setRequests] = useState([]);
  const logedUser = useSelector((state) => state.login.user);

  useEffect(() => {
    // Fetch requests for the specific logged-in user
    try {
      axios
        .get("http://localhost:8080/shipper/requests", {
          params: { id: logedUser._id,find:'t',status:'all' },
        })
        .then((res) => {
          if (res.status === 200) {
            setRequests(res.data.requests);
          } else {
            alert(res.data.message);
          }
        })
        .catch((err) => {
          console.error("Error fetching requests:", err);
        });
    } catch (error) {
      alert("Error in useEffect:");
    }
  }, [logedUser._id]);

  return (
    <div className="userhome">
      <UserDashboard />
      <div className="container-fluid center-content">
        <div className="center-icons">
          <div className="messageDisplay mb-3">
            <p className="text-success">Here are requests.</p>
          </div>
          <div className="row row-cols-1 row-cols-md-2 g-4">
            {requests.map((request, index) => (
              <div className="col" key={index}>
                <div className="card h-100">
                  <div className="card-body d-flex justify-content-between">
                    <div>
                      <h5 className="card-title text-primary">Receiver: {request.shipperId.companyName}</h5>
                      <p className="card-text text-secondary">Status: {request.status}</p>
                    </div>
                    <div>
                      {/* Add buttons or other actions here if needed */}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
