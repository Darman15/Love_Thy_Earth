import { useState } from "react";
import { useEffect } from "react";
import axios, { Axios } from "axios";
import { Outlet, Route, Routes, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Home from "../Home/Home";
import { Navigate } from "react-router-dom";

const Trade = () => {
  const navigate = useNavigate();

  const toMaps = () => {
    navigate("/map");
  };
  // List all users and stock
  const [trades, setTrades] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/getAllStock")
      .then((response) => {
        setTrades(response.data);
        console.log("reached Here");
        console.log(trades[4].quantity);
      })
      .catch((error) => {
        console.log("error, in the future add logic");
      });
  }, []);

  const tableRows = trades.map((trade, index) => {
    return (
      <tr key={index}>
        <td>{trade.id}</td>
        <td>{trade.itemId.item}</td>
        <td>{trade.quantity}</td>
        <td>{trade.userId.firstName}</td>
        <td>{trade.userId.lastName}</td>
        <td>{trade.userId.address.street}</td>
        <td>{trade.userId.email}</td>
        <td>{trade.userId.address.city}</td>
        <td>{trade.userId.address.state}</td>
        <td>{trade.userId.address.zip}</td>
        <td>
          <button onClick={toMaps} to="/map" className="btn btn-success" type="button">
            Trade
          </button>
        </td>
      </tr>
    );
  });

  // -------------------------------
  // End of list all stock

  return (
    <div>
      <h1 className="d-flex justify-content-center mt-5 ">All Users</h1>

      <div class="table-responsive">
        <table class="table table-success table-bordered table-striped table-hover text-center fw-bold">
          <thead class="table-primary">
            <tr>
              <th>Stock Id Number</th>
              <th>Item</th>
              <th>Quantity</th>
              <th>firstName</th>
              <th>lastName</th>
              <th>Street Address</th>
              <th>Email</th>
              <th>City</th>
              <th>State</th>
              <th>Zip</th>
              <th>Trade</th>
            </tr>
          </thead>
          <tbody>{tableRows}</tbody>
        </table>
      </div>
    </div>
  );
};

export default Trade;
