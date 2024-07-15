import React, { useState, useEffect } from 'react';
import AdminLayout from '../adminLayout/AdminLayout';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Details() {
  const { orderId } = useParams();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const fetchOrderDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/order/${orderId}`);
        setOrder(response.data);
      } catch (error) {
        console.error('Error fetching order details:', error);
      }
    };

    fetchOrderDetails();
  }, [orderId]);

  return (
    <AdminLayout>
      <div className="App">
        <h1>Order Details</h1>
        {order && (
          <div>
            <p>Order ID: {order._id}</p>
            <p>Status: {order.status}</p>
            <p>Payment Method: {order.payment}</p>
            <p>Buyer: {order.buyer && order.buyer.name}</p>
            <p>Products:</p>
            <ul>
              {order.products.map(product => (
                <li key={product._id}>
                  <p>Product ID: {product._id}</p>
                  <p>Title: {product.productTitle}</p>
                  <p>Description: {product.productDescription}</p>
                  <p>Price: {product.productPrice}</p>
                  <p>Image: <img src={product.productImg} alt={product.productTitle} /></p>
                  <p>Category: {product.productCategorie}</p>
                  <p>Rating: {product.productRating}</p>
                  {/* Add other product details as needed */}
                </li>
              ))}
            </ul>
            {/* Add other order details as needed */}
          </div>
        )}
      </div>
    </AdminLayout>
  );
}

export default Details;
