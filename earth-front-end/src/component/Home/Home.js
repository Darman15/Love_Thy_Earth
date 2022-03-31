import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Outlet, Route, Routes, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import AllUsers from "./AllUsers";

const Home = () => {
  const navigate = useNavigate();

  // user state variable
  const [user, setUser] = useState({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    address: { street: "", city: "", zip: "", state: "" },
  });

  useEffect(() => {
    const params = {
      id: localStorage.getItem("loggedInUser"),
    };
    axios
      .get("http://localhost:8080/findUserById", { params })
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {});
  }, []);
  // End of listing user info

  // to list user stock info
  const [stocks, setStocks] = useState([]);

  const [refresh, setRefresh] = useState(0);

  useEffect(() => {
    const params = {
      userId: localStorage.getItem("loggedInUser"),
    };
    axios
      .get("http://localhost:8080/getStockByUserId", { params })
      .then((response) => {
        setStocks(response.data);
      })
      .catch((error) => {});
  }, [refresh]);
  // --------------------
  // end of listing stock by user
  // -----------------------------

  //
  // update functionality
  const [stockQuantity, setStockQuantity] = useState({
    id: "",

    quantity: "",
  });

  const quantityChangeHandler = (event, stockId) => {
    const name = event.target.name;
    const value = event.target.value;

    const tempStockQuantity = { ...stockQuantity };
    tempStockQuantity.quantity = value;
    setStockQuantity(tempStockQuantity);
  };

  const changeQuantitySubmitHandler = (stockId) => {
    const tempStockQuantity = { ...stockQuantity };
    tempStockQuantity.id = stockId;
    console.log(stockQuantity.quantity);
    axios
      .put("http://localhost:8080/updateStock", tempStockQuantity)
      .then((response) => {
        console.log("Reached Here" + response);
        const count = refresh + 1;
        setRefresh(count);
      })

      .catch((error) => {
        console.log("In the future add logic");
      });
  };
  // ------------------
  // End of update quantity

  // start of delete stock logic
  // state variable
  // const [stockToDelete, setStockToDelete] = useState({
  //   id: "",
  // });

  const deleteStockSubmitHandler = (stockId) => {
    const params = {
      id: stockId,
    };

    axios
      .delete("http://localhost:8080/deleteStock", { params })

      .then((response) => {
        console.log("reached here" + response);
        const count = refresh + 1;
        setRefresh(count);
      })
      .catch((error) => {
        console.log("error, in the future add logic");
      });
  };
  // -----------------------
  // End of Delete logic

  // function for looping and displaying rows by user
  const tableRows = stocks.map((stock, index) => {
    return (
      <tr key={index}>
        <td>{stock.id}</td>
        <td>{stock.itemId.item}</td>
        <td>{stock.quantity}</td>

        <td>
          <button
            onClick={() => changeQuantitySubmitHandler(stock.id)}
            type="button"
            class="btn btn-primary mb-2"
          >
            Update
          </button>
          <input
            onChange={quantityChangeHandler}
            className="form-control me-2 updateInput"
            type="number"
            name="quantity"
            placeholder="Quantity"
            aria-label="Search"
          />
        </td>
        <td>
          <button
            onClick={() => deleteStockSubmitHandler(stock.id)}
            type="button"
            class="btn btn-danger"
          >
            Delete
          </button>
        </td>
      </tr>
    );
  });
  // end of list stock by user

  // start of add stock Items
  // state variable
  const [stock, setStock] = useState({
    userId: {
      id: localStorage.getItem("loggedInUser"),
    },
    itemId: {
      id: "",
      item: "",
    },
    quantity: "",
  });

  const itemChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    const tempStock = { ...stock };
    tempStock.itemId[name] = value;
    setStock(tempStock);
  };

  const stockChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    const tempStock = { ...stock };
    tempStock[name] = value;
    setStock(tempStock);
  };

  const addItemSubmitHandler = () => {
    axios
      .post("http://localhost:8080/saveStock", stock)
      .then((response) => {
        console.log("Reached Here" + response);
        const count = refresh + 1;
        setRefresh(count);
      })

      .catch((error) => {
        console.log("In the future add logic");
      });
  };
  // -------------------------
  // end of add Item logic

  //  --------------------
  // front-end
  return (
    <div className="container-fluid">
      <div class="table-responsive">
        <table class="shadow-lg table table-success table-bordered table-striped table-hover mt-5 fw-bold text-center">
          <thead class="table-primary">
            <tr>
              <th>Stock Id Number</th>
              <th>Item</th>
              <th>Quantity</th>

              <th>Update Quantity</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>{tableRows}</tbody>
        </table>
      </div>

      <form className="d-flex mt-5">
        <input
          onChange={itemChangeHandler}
          value={stock.itemId.item}
          className="form-control me-2"
          type="text"
          name="item"
          placeholder="Item Name"
          aria-label="Search"
        />

        <input
          onChange={stockChangeHandler}
          value={stock.quantity}
          className="form-control me-2 "
          type="number"
          name="quantity"
          placeholder="Quantity"
          aria-label="Search"
        />
      </form>
      <button onClick={addItemSubmitHandler} type="button" class="btn btn-success mt-3">
        Add Item
      </button>

      <Outlet />
    </div>
    // </div>
  );
};

export default Home;
