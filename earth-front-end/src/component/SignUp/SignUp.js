import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SignUp = () => {
  const navigate = useNavigate();

  // state variable
  const [signUpUser, setSignUpUser] = useState({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    address: { street: "", city: "", zip: "", state: "" },
  });

  // change handler for user info
  const changeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    const tempSignUp = { ...signUpUser };
    tempSignUp[name] = value;
    setSignUpUser(tempSignUp);
  };
  // ----------------------------------
  // end of change handler for user info

  // change handler for user address info
  const changeHandlerAddress = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    const tempSignUp = { ...signUpUser };
    tempSignUp.address[name] = value;
    setSignUpUser(tempSignUp);
  };
  // ---------------
  // end of change handler for user address info

  // start of sign up submit Handler

  const signUpSubmitHandler = () => {
    axios
      .post("http://localhost:8080/saveUser", signUpUser)
      .then((response) => {
        navigate("/thank-you");
      })
      .catch((error) => {
        console.log(" in the future add logic");
      });
  };

  return (
    <div className="sign-up-container">
      <div className="signUpContent">
        <h2>Love Thy Earth</h2>
        <p>
          Welcome to Love Thy Earth! Sign up today to become a trader. Find locals to
          trade items with that you grow or produce in your own space! Join us in cutting
          down on yard-based waste and helping to end the food shortage today.
        </p>
      </div>
      <div className="container">
        <section className="contact">
          <div className="container">
            <div className="contactInfo">
              <div className="box">
                <div className="icon">
                  <FontAwesomeIcon icon="fa-solid fa-seedling" />
                </div>
                <div className="text">
                  <h4>Grow</h4>
                  <p>
                    Love Thy Earth encourages the practice of using empty lawn space for
                    gardening and food production
                  </p>
                </div>
              </div>

              <div className="box">
                <div className="icon">
                  <FontAwesomeIcon icon="fa-solid fa-hands" />
                </div>
                <div className="text">
                  <h4>Trade</h4>
                  <p>
                    Find neighbors from all around growing food in their own yards. Trade
                    with them as needed to help fight food shortage and waste
                  </p>
                </div>
              </div>

              <div className="box">
                <div className="icon">
                  <FontAwesomeIcon icon="fa-solid fa-tree" />
                </div>
                <div className="text">
                  <h4>Discover</h4>
                  <p>A new hobby, new friends, new foods, and a new way of life.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <form class="row g-3">
          <h3> Sign up below!!!</h3>

          <div class="col-md-6">
            <label for="firstName" class="form-label">
              First Name
            </label>
            <input
              onChange={changeHandler}
              value={signUpUser.firstName}
              type="text"
              class="form-control"
              name="firstName"
              id="firstName"
            />
          </div>

          <div class="col-md-6">
            <label for="lastName" class="form-label">
              Last Name
            </label>
            <input
              onChange={changeHandler}
              value={signUpUser.lastName}
              type="text"
              class="form-control"
              name="lastName"
              id="lastName"
            />
          </div>

          <div class="col-md-6">
            <label for="email" class="form-label">
              Email
            </label>
            <input
              onChange={changeHandler}
              value={signUpUser.email}
              type="email"
              class="form-control"
              name="email"
              id="email"
            />
          </div>

          <div class="col-md-6">
            <label for="password" class="form-label">
              Password
            </label>
            <input
              onChange={changeHandler}
              value={signUpUser.password}
              type="password"
              class="form-control"
              name="password"
              id="password"
            />
          </div>

          {/* Address sections below */}
          <div class="col-12">
            <label for="street" class="form-label">
              Street
            </label>
            <input
              onChange={changeHandlerAddress}
              value={signUpUser.address.street}
              type="text"
              class="form-control"
              name="street"
              id="street"
              placeholder="1234 Main St"
            />
          </div>

          <div class="col-12">
            <label for="city" class="form-label">
              City
            </label>
            <input
              onChange={changeHandlerAddress}
              value={signUpUser.address.city}
              type="text"
              class="form-control"
              name="city"
              id="city"
              placeholder="Apartment, studio, or floor"
            />
          </div>

          <div class="col-md-6">
            <label for="zip" class="form-label">
              Zip
            </label>
            <input
              onChange={changeHandlerAddress}
              value={signUpUser.address.zip}
              type="text"
              name="zip"
              class="form-control"
              id="zip"
            />
          </div>

          <div class="col-md-4">
            <label for="state" class="form-label">
              State
            </label>
            <select
              onChange={changeHandlerAddress}
              value={signUpUser.address.state}
              id="state"
              name="state"
              class="form-select"
            >
              <option selected>Choose...</option>
              <option value="AL">Alabama</option>
              <option value="AK">Alaska</option>
              <option value="AZ">Arizona</option>
              <option value="AR">Arkansas</option>
              <option value="CA">California</option>
              <option value="CO">Colorado</option>
              <option value="CT">Connecticut</option>
              <option value="DE">Delaware</option>
              <option value="DC">District Of Columbia</option>
              <option value="FL">Florida</option>
              <option value="GA">Georgia</option>
              <option value="HI">Hawaii</option>
              <option value="ID">Idaho</option>
              <option value="IL">Illinois</option>
              <option value="IN">Indiana</option>
              <option value="IA">Iowa</option>
              <option value="KS">Kansas</option>
              <option value="KY">Kentucky</option>
              <option value="LA">Louisiana</option>
              <option value="ME">Maine</option>
              <option value="MD">Maryland</option>
              <option value="MA">Massachusetts</option>
              <option value="MI">Michigan</option>
              <option value="MN">Minnesota</option>
              <option value="MS">Mississippi</option>
              <option value="MO">Missouri</option>
              <option value="MT">Montana</option>
              <option value="NE">Nebraska</option>
              <option value="NV">Nevada</option>
              <option value="NH">New Hampshire</option>
              <option value="NJ">New Jersey</option>
              <option value="NM">New Mexico</option>
              <option value="NY">New York</option>
              <option value="NC">North Carolina</option>
              <option value="ND">North Dakota</option>
              <option value="OH">Ohio</option>
              <option value="OK">Oklahoma</option>
              <option value="OR">Oregon</option>
              <option value="PA">Pennsylvania</option>
              <option value="RI">Rhode Island</option>
              <option value="SC">South Carolina</option>
              <option value="SD">South Dakota</option>
              <option value="TN">Tennessee</option>
              <option value="TX">Texas</option>
              <option value="UT">Utah</option>
              <option value="VT">Vermont</option>
              <option value="VA">Virginia</option>
              <option value="WA">Washington</option>
              <option value="WV">West Virginia</option>
              <option value="WI">Wisconsin</option>
              <option value="WY">Wyoming</option>
            </select>
          </div>

          <div class="col-12"></div>
          <div class="d-grid gap-2 ">
            <button
              onClick={signUpSubmitHandler}
              class="bg-dark btn btn-outline-success"
              type="button"
            >
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
