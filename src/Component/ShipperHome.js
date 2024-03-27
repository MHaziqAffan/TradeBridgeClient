import React, { useEffect, useState } from "react";
import ShipperDashboard from "./ShipperDashboard";
import axios from "axios";
import { useSelector } from "react-redux";

export default function ShipperHome() {
  const [requests, setRequests] = useState([]);
  const logedUser = useSelector((state) => state.login.user);
  const [action, setaction] = useState(false);

  useEffect(() => {
    // Fetch requests for the specific logged-in user
    try {
      axios
        .get("http://localhost:8080/shipper/requests", {
          params: { id: logedUser._id ,find:'s',status:'p'},
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
  }, [action]);
  const acceptRequest = (e) => {
    try {
      axios
        .patch(`http://localhost:8080/shipper/accept/${e.target.id}`, {
          status: "a",
        })
        .then((res) => {
          if(res.status==200)
          {
            alert("Accept has been moved to managed shipement section")
          }
          else
          {
            alert("cannot perfrom action")
          }
          if (action) {
            setaction(false);
          } else {
            setaction(true);
          }
        })
        .catch((err) => {
          console.error("Error fetching requests:", err);
        });
    } catch (error) {
      alert("Error :");
    }
  };
  const rejectRequest = (e) => {
    try {
      axios
        .patch(`http://localhost:8080/shipper/accept/${e.target.id}`, {
          status: "d",
        })
        .then((res) => {
          if(res.status==200)
          {
            alert("Request has been rejected successfully")
          }
          else
          {
            alert("cannot perfrom action")
          }
          if (action) {
            setaction(false);
          } else {
            setaction(true);
          }
        })
        .catch((err) => {
          console.error("Error fetching requests:", err);
        });
    } catch (error) {
      alert("Error :");
    }
  };
  return (
    <div className="userhome">
      {/* Assuming ShipperDashboard contains the shipper's navigation and information */}
      <div>
        <ShipperDashboard />
      </div>
      <div className="container-fluid center-content">
        <div className="center-icons">
          <h2>Welcome to Shipper Dashboard</h2>
          <div className="messageDisplay mb-3">
            <p className="text-success">
              Here are some of your pending requests. Take action accordingly.
            </p>
          </div>
          <div className="showRequests">
            {requests.map((request, index) => (
              <div className="shipmentRequest border p-3 mb-3" key={index}>
                <p>
                  <strong>Sender:</strong> {request.traderId.companyName}
                </p>
                <div className="requestButtons">
                  <button
                    className="btn btn-success me-2"
                    id={request._id}
                    onClick={acceptRequest}
                  >
                    Accept
                  </button>
                  <button
                    className="btn btn-danger me-2"
                    id={request._id}
                    onClick={rejectRequest}
                  >
                    Reject
                  </button>
                  <button id={request._id} className="btn btn-primary">
                    View
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
