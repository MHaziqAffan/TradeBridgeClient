import React, { useEffect, useState } from "react";
import { BsCardList } from "react-icons/bs"; // Import Bootstrap icons
import UserDashboard from "./UserDashboard";
import axios from "axios";
import { useSelector } from "react-redux";

export default function () {
  const logedUser = useSelector((state) => state.login.user);
  const [sellers, setSellers] = useState([]);
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [quantity, setQuantity] = useState(0);
  const [perPrice, setPerPrice] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    // Fetch sellers
    axios
      .get("http://localhost:8080/user/showsellers", {
        params: { username: logedUser.username },
      })
      .then((res) => {
        if (res.status === 202) {
          setSellers(res.data.sellers);
        } else {
          alert(res.data.message);
        }
      })
      .catch((err) => {
        console.error("Error fetching sellers:", err);
      });

    // Fetch categories
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

  // Update total price when quantity or price changes
  useEffect(() => {
    const totalPrice = quantity * perPrice;
    setTotal(totalPrice);
  }, [quantity, perPrice]);

  // Fetch products based on selected category
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
            <div className="card" style={{ border: "2px solid #000000" }}>
              <div className="card-body">
                <form>
                  {/* Seller Name */}
                  <div className="mb-3">
                    <label htmlFor="seller" className="form-label">
                      <BsCardList className="me-2" /> Seller Name
                    </label>
                    <select
                      style={{ border: "2px solid #000000" }}
                      className="form-select"
                      id="seller"
                      name="seller"
                      required
                    >
                      {sellers.map((seller) => (
                        <option key={seller.username}>
                          {seller.companyName}
                        </option>
                      ))}
                    </select>
                  </div>
                  {/* Buyer Name */}
                  <div className="mb-3">
                    <label htmlFor="buyerName" className="form-label">
                      <BsCardList className="me-2" /> Buyer Name
                    </label>
                    <input
                      style={{ border: "2px solid #000000" }}
                      type="text"
                      className="form-control"
                      id="buyerName"
                      name="buyerName"
                      value={logedUser.companyName}
                      disabled
                    />
                  </div>
                  {/* Category Dropdown */}
                  <div className="mb-3">
                    <label htmlFor="category" className="form-label">
                      <BsCardList className="me-2" /> Category
                    </label>
                    <select
                      style={{ border: "2px solid #000000" }}
                      className="form-select"
                      id="category"
                      name="category"
                      onChange={handleCategoryChange}
                      required
                    >
                      {categories.map((category) => (
                        <option
                          key={category.categoryId}
                          value={category.categoryId}
                        >
                          {category.categoryName}
                        </option>
                      ))}
                    </select>
                  </div>
                  {/* Product Dropdown */}
                  <div className="mb-3">
                    <label htmlFor="productName" className="form-label">
                      <BsCardList className="me-2" /> Product Name
                    </label>
                    <select
                      style={{ border: "2px solid #000000" }}
                      className="form-select"
                      id="productName"
                      name="productName"
                      required
                    >
                      {products.map((product) => (
                        <option
                          key={product.productId}
                          value={product.productId}
                        >
                          {product.productName}
                        </option>
                      ))}
                    </select>
                  </div>{" "}
                  {/* Quantity */}
                  <div className="mb-3">
                    <label htmlFor="quantity" className="form-label">
                      <BsCardList className="me-2" /> Quantity
                    </label>
                    <input
                      style={{ border: "2px solid #000000" }}
                      type="number"
                      className="form-control"
                      id="quantity"
                      name="quantity"
                      value={quantity}
                      onChange={(e) => setQuantity(Math.max(0, parseInt(e.target.value)))}
                      min="0"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="unitPrice" className="form-label">
                      <BsCardList className="me-2" /> Unit Price
                    </label>
                    <div className="input-group">
                      <span
                        className="input-group-text"
                        style={{ border: "2px solid #000000" }}
                      >
                        $
                      </span>
                      <input
                        style={{ border: "2px solid #000000" }}
                        type="number"
                        className="form-control"
                        id="unitPrice"
                        name="unitPrice"
                        value={perPrice}
                        onChange={(e) => setPerPrice(Math.max(0, parseFloat(e.target.value)))}
                        min="0"
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="totalAmount" className="form-label">
                      <BsCardList className="me-2" /> Total Amount
                    </label>
                    <input
                      style={{ border: "2px solid #000000" }}
                      type="text"
                      className="form-control"
                      id="totalAmount"
                      name="totalAmount"
                      value={total}
                      readOnly
                    />
                  </div>
                  {/* Due Date */}
                  <div className="mb-3">
                    <label htmlFor="dueDate" className="form-label">
                      <BsCardList className="me-2" /> Due Date
                    </label>
                    <input
                      style={{ border: "2px solid #000000" }}
                      type="date"
                      className="form-control"
                      id="dueDate"
                      name="dueDate"
                      min={new Date().toISOString().split("T")[0]}
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
