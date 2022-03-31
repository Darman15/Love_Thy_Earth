import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Header = () => {
  // navigate variable
  const navigate = useNavigate();
  // sets state variable
  const [signInUser, setSignInUser] = useState({ email: "", password: "" });

  const changeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    const tempSignIn = { ...signInUser };

    tempSignIn[name] = value;
    setSignInUser(tempSignIn);
  };

  const signInSubmitHandler = () => {
    axios
      .post("http://localhost:8080/loginUser", signInUser)
      .then((response) => {
        localStorage.setItem("loggedInUser", response.data.id);

        navigate("/home");
      })
      .catch((error) => {
        console.log(" in the future add logic");
      });
  };

  const signOut = () => {
    localStorage.removeItem("loggedInUser");
    navigate("/sign-up");
  };

  const toggleDisplay = () => {
    if (localStorage.getItem("loggedInUser")) {
      return (
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/trade">
                Trade!
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about-us">
                About Us
              </Link>
            </li>
          </ul>
          <form className="d-flex">
            <button
              onClick={signOut}
              to="/sign-up"
              className="btn btn-outline-success"
              type="button"
            >
              Sign Out
            </button>
          </form>
        </div>
      );
    } else {
      return (
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/sign-up">
                Sign Up
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about-us">
                About Us
              </Link>
            </li>
          </ul>
          <form className="d-flex">
            <input
              value={signInUser.email}
              onChange={changeHandler}
              className="form-control me-2"
              type="email"
              name="email"
              placeholder="email"
              aria-label="Search"
            />
            <input
              value={signInUser.password}
              onChange={changeHandler}
              className="form-control me-2"
              type="password"
              name="password"
              placeholder="password"
              aria-label="Search"
            />
            <button
              onClick={signInSubmitHandler}
              to="/home/"
              className="btn btn-outline-success"
              type="button"
            >
              Sign in
            </button>
          </form>
        </div>
      );
    }
  };

  return (
    <div className="mb-5">
      <header>
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark mb-5">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/home">
              Love Thy Earth
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
              aria-controls="navbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            {toggleDisplay()}
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
