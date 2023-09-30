import React, { useState } from 'react';
import BackIcon from '../../src/assets/img/back.svg';
import EditIcon from '../../src/assets/img/edit.svg';
import ShareIcon from '../../src/assets/img/share.svg';
import Navbar from '../components/Navbar';
import ProductsData from '../data/myproducts.json';
import { Link } from 'react-router-dom';

const MyOrders = () => {
    const ppUrl = "https://img.imgyukle.com/2023/09/30/rAJNjP.jpeg";

    const products = ProductsData.products;

    // State to track the selected button (default to "shared")
    const [selectedButton, setSelectedButton] = useState("shared");

    // Function to handle button click and update selectedButton state
    const handleButtonClick = (buttonName) => {
        setSelectedButton(buttonName);
    };

    // Check if products is an array before filtering
    const filteredProducts = Array.isArray(products)
        ? selectedButton === "shared"
            ? products.filter((product) => product.saved === 1)
            : products
        : [];

    // Create a variable to map through the filtered products and display each product
    const productElements = filteredProducts.map((product) => (
        <div key={product.id} className="product">
            {/* Display product information */}
            <div className="image">
            <img src={product.img} alt={product.title} className="product-image" />
            </div>
            <div className="desc">
            <h2 className="product-price">{product.price} ₼</h2>
            <p className="product-title">{product.title}</p>
            </div>
            <div className="action">
            {product.saved === 1 ? (
                <div className="added">
                    <img src={EditIcon} alt="" />
                    <p>Edit your share</p>
                </div>
            ) : (
                <div className="add">
                    <img src={ShareIcon} alt="" />
                    <p>Share with users</p>
                </div>
            )}
        </div>
        </div>
    ));

    return (
        <div className="myorders">
            <div className="header">
                <img src={BackIcon} alt="" />
                <h5>My Orders</h5>
                <img src={ppUrl} alt="" className="pp" />
            </div>
            <div className="switch-div">
                {/* Buttons to toggle between shared and all products */}
                <button
                    name="shared"
                    className={selectedButton === "shared" ? 'active' : ''}
                    onClick={() => handleButtonClick("shared")}
                >
                    Shared Products
                </button>
                <button
                    name="all"
                    className={selectedButton === "all" ? 'active' : ''}
                    onClick={() => handleButtonClick("all")}
                >
                    All Products
                </button>
            </div>
            <Link to="/feed" className="feedlink">
               <p className="feed-url">View Feed</p>
            </Link>
            <div className="products">
                {/* Display products */}
                {productElements}
            </div>
            <br />
            <br />
            <br />
            <Navbar />
        </div>
    );
};

export default MyOrders;
