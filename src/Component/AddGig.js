import React from 'react';
import UserDashboard from './UserDashboard';
import { BsCardList } from 'react-icons/bs'; // Import Bootstrap icons

export default function AddGig() {
  return (
    <div className='userhome'>
      <div>
        <UserDashboard />
      </div>

      <div className='container-fluid'>
      <header className='text-center mb-4'>
                  <h2 className='display-4'>Hello! Seller</h2>
                  <p className='lead'>Kindly fill this form</p>
    </header>
        <div className='row justify-content-center align-items-center'>
          <div className='col-md-6'>
            <div className="card" style={{ border: '2px solid #000000' }}>
              <div className="card-body">
                <form>
                  <div className="mb-3">
                    <label htmlFor="category" className="form-label">
                      <BsCardList className="me-2"  /> Category
                    </label>
                    <select className="form-select"style={{ border: '2px solid #000000' }} id="category" name="category">
                      {/* Add your category options here */}
                      <option value="category1">Category 1</option>
                      <option value="category2">Category 2</option>
                      {/* Add more options as needed */}
                    </select>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="productName" className="form-label">
                      <BsCardList className="me-2" /> Product Name
                    </label>
                    <select className="form-select"style={{ border: '2px solid #000000' }} id="productName" name="productName">
                      {/* Add your product name options here */}
                      <option value="product1">Product 1</option>
                      <option value="product2">Product 2</option>
                      {/* Add more options as needed */}
                    </select>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="perKiloPrice" className="form-label">
                      <BsCardList className="me-2" /> Per KG Price
                    </label>
                    <div className="input-group">
                      <span className="input-group-text"style={{ border: '2px solid #000000' }}>$</span>
                      <input type="number" className="form-control"style={{ border: '2px solid #000000' }} id="perKiloPrice" name="perKiloPrice" />
                    </div>
                  </div>
                  <div className="text-center">
                    <button type="submit" className="btn btn-success">
                      Add Gig
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
