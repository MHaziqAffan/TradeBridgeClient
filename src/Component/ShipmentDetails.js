import React from "react";
import { BsCardList } from "react-icons/bs"; // Import Bootstrap icons
import UserDashboard from "./UserDashboard";

export default function () {
  return (
    <div className="userhome">
      {/* Assuming UserDashboard is a valid component */}
      <UserDashboard />
      <div className="container-fluid scroll">
        <div className="seller-to-shipper-booking">
          <div className="container-fluid">
            <header className="text-center mb-4">
              <h2 className="display-4">Book Shipment with Shipper</h2>
              <p className="lead">
                Provide shipment details to book with a shipper
              </p>
            </header>
            <div className="row justify-content-center align-items-center">
              <div className="col-md-6">
                <div className="card" style={{ border: '4px solid #000000' }}>
                  <div className="card-body">
                    <form>
                      <div className="mb-3">
                        <label htmlFor="selectShipper" className="form-label">
                          Select Shipper
                        </label>
                        <select
                          style={{ border: '3px solid #000000' }}
                          className="form-select"
                          id="selectShipper"
                          name="selectShipper"
                        >
                          <option value="">Select a Shipper</option>
                          {/* Add options for different shippers */}
                          <option value="shipper1">Shipper 1</option>
                          <option value="shipper2">Shipper 2</option>
                          <option value="shipper3">Shipper 3</option>
                        </select>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="invoiceFile" className="form-label">
                          <BsCardList className="me-2"  /> Invoice File
                        </label>
                        <input
                          style={{ border: '3px solid #000000' }}
                          type="file"
                          className="form-control"
                          id="invoiceFile"
                          name="invoiceFile"
                          accept=".pdf, .doc, .docx"
                          // Disable the input in this example (for illustration purposes)
                          
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="shipmentDetails" className="form-label">
                          <BsCardList className="me-2"  /> Shipment Details
                        </label>
                        <textarea
                          style={{ border: '3px solid #000000' }}
                          className="form-control"
                          id="shipmentDetails"
                          name="shipmentDetails"
                          
                        />
                      </div>
                      {/* Add more input fields for other details */}
                      <div className="text-center">
                        <button
                          type="button"
                          className="btn btn-success"
                          disabled
                        >
                          Book Shipment
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
