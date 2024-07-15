import React, { useState, useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash,faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import toast from "react-hot-toast";
import AdminLayout from '../adminLayout/AdminLayout';

const ListProduct = () => {
  const navigate = useNavigate();
  

  

  const [data, setData] = useState([]);
  useEffect(() => {
    getProduct();
  });

  const getProduct = async () => {
    const res = await axios.get('http://localhost:5000/product');
    if (res.status === 200) {
      setData(res.data);
    }
  };

  const handleAddProduct = () => {
    // Navigate to the "/admin/addProduct" route
    navigate('/admin/addProduct');
  };

  const handleDelete = async (id) => {
    try {
      if (window.confirm('Are you sure you want to delete this product')) {
        const res = await axios.delete(`http://localhost:5000/product/${id}`);
        console.log('aaaaaaaaaaaaaaaaaa', id);
        console.log('aaaaaaaaaaaaaaaaaa', res);
  
        if (res.status === 200) {
          // toast.success(res.body);
          Navigate('admin/listProduct');
        } else {
          // Handle other status codes if needed
          console.error('Unexpected response status:', res.status);
        }
      }
    } catch (error) {
      // Handle any errors that occur during the asynchronous operation
      console.error('Error deleting product:', error.message);
      // You can also show a user-friendly error message here if needed
      // Example: toast.error('Failed to delete product');
    }
  };
  

  return (
    <AdminLayout>
      <div>
        <h2>Product List</h2>
        <div>
          <table className="styled-table">
            <thead>
              <tr>
                <th style={{ textAlign: 'center' }}>No</th>
                <th style={{ textAlign: 'center' }}>Image</th>
                <th style={{ textAlign: 'center' }}>Title</th>
                <th style={{ textAlign: 'center' }}>Price</th>
                <th style={{ textAlign: 'center' }}>categorie</th>
                <th style={{ textAlign: 'center' }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {data &&
                data.map((item, index) => {
                  return (
                    <tr key={index}>
                      <th scope="row">{index + 1}</th>
                      <td>
                        {' '}
                        <img
                          src={item.productImg}
                          alt="image"
                          style={{ width: '80px', height: '60px' }}
                        ></img>
                      </td>
                      <td>{item.productTitle}</td>
                      <td>${item.productPrice}</td>
                      <td>{item.productCategorie}</td>
                      <td>
                        {' '}
                        <FontAwesomeIcon
                          onClick={() => handleDelete(item._id)}
                          icon={faTrash}
                        />{' '}
                        <FontAwesomeIcon
                        //  onClick={() => handleUpdate(item._id)}
                          icon={faPenToSquare} />
                       
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
        <button onClick={handleAddProduct}>Add Product</button>
      </div>
    </AdminLayout>
  );
};

export default ListProduct;
