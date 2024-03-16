import React from "react";
import { BsCardList } from "react-icons/bs"; // Import Bootstrap icons
import UserDashboard from "./UserDashboard";
export default function () {
  return (
    <div className="userhome">
      {/* Assuming UserDashboard is a valid component */}
      <UserDashboard />
      <div className="container-fluid scroll">
        <header className="text-center mb-4 m-5">
          <h2 className="display-4">Hello! Seller</h2>
          <p className="lead">Kindly fill out this invoice form</p>
        </header>
        <div className="row justify-content-center align-items-center">
          <div className="col-md-6">
            <div className="card"style={{ border: '2px solid #000000' }}>
              <div className="card-body" >
                <form>
                  {/* Other form fields ... */}
                  {/* Seller Name */}
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
                    <label htmlFor="buyerName" className="form-label">
                      <BsCardList className="me-2" /> Buyer Name
                    </label>
                    <input style={{ border: '2px solid #000000' }}
                      type="text"
                      className="form-control"
                      id="buyerName"
                      name="buyerName"
                      required
                    />
                  </div>
                  {/* Category Dropdown */}
                  <div className="mb-3">
                    <label htmlFor="category" className="form-label">
                      <BsCardList className="me-2" /> Category
                    </label>
                    <select
                    style={{ border: '2px solid #000000' }}
                      className="form-select"
                      id="category"
                      name="category"
                      required
                    >
                      <option value="category1">Category 1</option>
                      <option value="category2">Category 2</option>
                      {/* Add more options as needed */}
                    </select>
                  </div>
                  {/* Product Dropdown */}
                  <div className="mb-3">
                    <label htmlFor="productName" className="form-label">
                      <BsCardList className="me-2" /> Product Name
                    </label>
                    <select
                      style={{ border: '2px solid #000000' }}
                      className="form-select"
                      id="productName"
                      name="productName"
                      required
                    >
                      <option value="product1">Product 1</option>
                      <option value="product2">Product 2</option>
                      {/* Add more options as needed */}
                    </select>
                  </div>{" "}
                  {/* Quantity */}
                  <div className="mb-3">
                    <label htmlFor="quantity" className="form-label">
                      <BsCardList className="me-2" /> Quantity
                    </label>
                    <input
                    style={{ border: '2px solid #000000' }}
                      type="number"
                      className="form-control"
                      id="quantity"
                      name="quantity"
                      required
                    />
                  </div>
                  {/* Unit Price */}
                  <div className="mb-3">
                    <label htmlFor="unitPrice" className="form-label">
                      <BsCardList className="me-2" /> Unit Price
                    </label>
                    <div className="input-group">
                      <span className="input-group-text"style={{ border: '2px solid #000000' }}>$</span>
                      <input
                      style={{ border: '2px solid #000000' }}
                        type="number"
                        className="form-control"
                        id="unitPrice"
                        name="unitPrice"
                        required
                      />
                    </div>
                  </div>
                  {/* Total Amount (calculated) */}
                  <div className="mb-3">
                    <label htmlFor="totalAmount" className="form-label">
                      <BsCardList className="me-2" /> Total Amount
                    </label>
                    <input
                    style={{ border: '2px solid #000000' }}
                      type="text"
                      className="form-control"
                      id="totalAmount"
                      name="totalAmount"
                      readOnly
                      // You can calculate and set this value using JavaScript
                    />
                  </div>
                  {/* Due Date */}
                  <div className="mb-3">
                    <label htmlFor="dueDate" className="form-label">
                      <BsCardList className="me-2" /> Due Date
                    </label>
                    <input
                    style={{ border: '2px solid #000000' }}
                      type="date"
                      className="form-control"
                      id="dueDate"
                      name="dueDate"
                      required
                    />
                  </div>
                  <div className="text-center">
                    <button type="submit" className="btn btn-success">
                      Generate Invoice
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
