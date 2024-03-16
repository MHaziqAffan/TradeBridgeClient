import React from "react";
import ShipperDashboard from "./ShipperDashboard";
import { BsCardList } from "react-icons/bs";
export default function SendDocuments() {
  return (
    <div className="userhome">
      {/* Assuming ShipperDashboard contains the shipper's navigation and information */}
      <div>
        <ShipperDashboard />
      </div>
      <div className="container-fluid center-content">
        <div className="send-documents-page">
          <h2>Send Documents to Government</h2>
          <p>Here you can send necessary documents to the government for trade processing.</p>

          <form>
          <div className="mb-3">
                    <label htmlFor="seller" className="form-label">
                      <BsCardList className="me-2" /> Seller Name
                    </label>
                    <select style={{ border: '2px solid #000000' }}
                      className="form-select"
                      id="seller"
                      name="seller"
                      required
                    >
                      <option value="category1">seller 1</option>
                      <option value="category2">seller 2</option>
                      {/* Add more options as needed */}
                    </select>
                  </div>
                  {/* Buyer Name */}
                  <div className="mb-3">
                  <label htmlFor="seller" className="form-label">
                      <BsCardList className="me-2" /> Seller Name
                    </label>
                    <select style={{ border: '2px solid #000000' }}
                      className="form-select"
                      id="seller"
                      name="seller"
                      required
                    >
                      <option value="category1">buyer 1</option>
                      <option value="category2">buyer 2</option>
                      {/* Add more options as needed */}
                    </select>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="doc" className="form-label">
                      <BsCardList className="me-2" /> upload documents
                    </label>
                    <input style={{ border: '2px solid #000000' }}
                      type="file"
                      className="form-control"
                      id="buyerName"
                      name="buyerName"
                      required
                    />
                  </div>


            <button type="button" className="btn btn-success">
              Send Documents
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
