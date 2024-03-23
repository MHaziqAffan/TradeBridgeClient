import React, { useEffect, useState } from "react";
import UserDashboard from './UserDashboard';
import { BsCardList } from 'react-icons/bs'; // Import Bootstrap icons
import axios from "axios";
import { useSelector } from "react-redux";
export default function AddGig() {
  const logedUser = useSelector((state) => state.login.user);
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/category/allcategories")
      .then((res) => {
        if (res.status === 200) {
          setCategories(res.data.categories);
        } else {
          alert(res.data.message);
        }
      })
      .catch((err) => {
        console.error("Error fetching categories:", err);
      });
  }, [logedUser.username]);

  const handleCategoryChange = (e) => {
    const selectedCategoryId = e.target.value;
    axios
      .get(
        `http://localhost:8080/product/productbycategoryid/${selectedCategoryId}`
      )
      .then((res) => {
        if (res.status === 200) {
          setProducts(res.data.products);
        } else {
          alert(res.data.message);
        }
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
      });
  };
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
            <div className="card" style={{ border: '4px solid #000000' }}>
              <div className="card-body">
                <form>
                  <div className="mb-3">
                    <label htmlFor="category" className="form-label">
                      <BsCardList className="me-2"  /> Category
                    </label>
                    <select className="form-select"style={{ border: '3px solid #000000' }} id="category" name="category" onChange={handleCategoryChange} required>
                      {/* Add your category options here */}
                      {categories.map((category) => (
                        <option
                          key={category.categoryId}
                          value={category.categoryId}
                        >
                          {category.categoryName}
                        </option>
                      ))}
                      {/* Add more options as needed */}
                    </select>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="productName" className="form-label">
                      <BsCardList className="me-2" /> Product Name
                    </label>
                    <select className="form-select"style={{ border: '3px solid #000000' }} id="productName" name="productName">
                      {/* Add your product name options here */}
                      {products.map((product) => (
                        <option
                          key={product.productId}
                          value={product.productId}
                        >
                          {product.productName}
                        </option>
                      ))}
                      {/* Add more options as needed */}
                    </select>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="perKiloPrice" className="form-label">
                      <BsCardList className="me-2" /> Per KG Price
                    </label>
                    <div className="input-group">
                      <span className="input-group-text"style={{ border: '3px solid #000000' }}>$</span>
                      <input type="number" className="form-control"style={{ border: '3px solid #000000' }} id="perKiloPrice" name="perKiloPrice" />
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
