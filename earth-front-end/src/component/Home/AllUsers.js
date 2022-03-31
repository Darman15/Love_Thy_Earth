import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Outlet, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";

const AllUsers = () => {
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/getAllUsers")
      .then((response) => {
        setAllUsers(response.data);
      })
      .catch((error) => {});
  }, []);

  return (
    <div>
      {allUsers.map((user, index) => {
        return (
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <div className="col">
              <div className="card shadow-sm">
                <svg
                  className="bd-placeholder-img card-img-top"
                  width="100%"
                  height="225"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Placeholder: Thumbnail"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                >
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="#55595c"></rect>
                  <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                    Thumbnail
                  </text>
                </svg>
                <div className="card-body">
                  <p className="card-text">First Name: {user.firstName} </p>
                  <p className="card-text">Last Name: {user.lastName} </p>
                  <p className="card-text">Email: {user.email} </p>
                  <p className="card-text">State: {user.address.street} </p>
                  <p className="card-text">State: {user.address.city} </p>
                  <p className="card-text">State: {user.address.zip} </p>
                  <p className="card-text">State: {user.address.state} </p>

                  {/* toDo find out how to access address data within user */}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AllUsers;
