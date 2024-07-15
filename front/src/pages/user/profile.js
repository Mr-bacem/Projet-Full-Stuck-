import React, { useState, useEffect } from "react";
import axios from "axios";
import UserLayout from "./userLayout/userLayout";
import "../profile.css"
const Profile = () => {
  const [usersData, setUsersData] = useState([]);
  const id = localStorage.getItem("userId");

  useEffect(() => {
    const fetchUsers = async () => {
      console.log('eeeeeeeeeeeeeeeeeeeee',id);
      try {
        const UsersResponse = await axios.get(`http://localhost:5000/user/${id}`);
        setUsersData(UsersResponse.data);
        console.log(UsersResponse.data);
      } catch (error) {
        console.error("Error fetching user ", error);
      }
    };
    fetchUsers();
  }, []);

  return (
    <UserLayout>
      {usersData && (
        <div className="row gutters-sm">
          <div className="col-md-4 mb-3">
            <div className="card">
              <div className="card-body">
                <div className="d-flex flex-column align-items-center text-center">
                  <img
                    src="https://bootdey.com/img/Content/avatar/avatar7.png"
                    alt="Admin"
                    className="rounded-circle"
                    width={150}
                  />
                  <div className="mt-3">
                    <h4> Admin : {usersData.name}</h4>
                    <p className="text-secondary mb-1">My Profile</p>
                  </div>
                </div>
              </div>
              <div className="col-md-8">
                <div className="card mb-3">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Full Name</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        {usersData.name}
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Email</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        {usersData.email}
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Phone</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        {usersData.phone}
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Address</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        {usersData.address}
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-12">
                        <button
                          className="btn btn-info"
                          target="__blank"
                          href="https://www.bootdey.com/snippets/view/profile-edit-data-and-skills"
                        >
                          Edit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </UserLayout>
  );
};

export default Profile;
