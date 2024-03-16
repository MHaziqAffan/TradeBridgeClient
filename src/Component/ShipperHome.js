import React from 'react';
import ShipperDashboard from './ShipperDashboard';

export default function ShipperHome() {
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
            <div className="shipmentRequest border p-3 mb-3">
              <p>
                <strong>Sender:</strong> Sender 1 | <strong>Product:</strong> Product A
              </p>
              <div className="requestButtons">
                <button className="btn btn-success me-2">Accept</button>
                <button className="btn btn-danger me-2">Reject</button>
                <button to="/viewRequest/1" className="btn btn-primary">
                  View
                </button>
              </div>
            </div>
            <div className="shipmentRequest border p-3 mb-3">
              <p>
                <strong>Sender:</strong> Sender 2 | <strong>Product:</strong> Product B
              </p>
              <div className="requestButtons">
                <button className="btn btn-success me-2">Accept</button>
                <button className="btn btn-danger me-2">Reject</button>
                <button to="/viewRequest/2" className="btn btn-primary">
                  View
                </button>
              </div>
            </div>
            {/* Add more request blocks as needed */}
          </div>
        </div>
      </div>
    </div>
  );
}
