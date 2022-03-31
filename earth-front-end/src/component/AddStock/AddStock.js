import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// State Variable
const [stock, setStock] = useState({ item: "", quantity: "" });

// TODO ask about how to keep all other data feilds and only update these. 

const AddStock = () => {

    return (
            <form className="d-flex">
                <input className="form-control me-2" type="text" name="item" placeholder="Item Name" aria-label="Search" />
                <input className="form-control me-2" type="number" name="quantity"  placeholder="Quantity" aria-label="Search" />
                <button to="/home/" className="btn btn-outline-success" type="button">Add Item</button>
            </form>
    )
}

export default AddStock