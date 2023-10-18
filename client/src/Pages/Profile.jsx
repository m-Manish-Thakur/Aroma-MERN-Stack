import React, { useContext, useEffect, useState } from "react";
import "./Style.css";
import axios from "axios";
import { Link } from "react-router-dom";
import UserContext from "../Contexts/UserContext";

const Profile = () => {
  const { user } = useContext(UserContext);
  const [addrFrom, setAddrForm] = useState(false);
  const [address, setAddress] = useState([]);

  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [country, setCountry] = useState("");

  useEffect(() => {
    if (user) {
      axios
        .get(`http://localhost:8000/address/user-addresses/${user._id}`)
        .then((response) => {
          setAddress(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } 
  }, [user, address]);

  // Handle Add Address From ------------------

  const handleAddrForm = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/address/add-address", {
        user: user._id,
        street,
        city,
        state,
        postalCode,
        country,
      })
      .then((response) => {
        setAddress(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
      setAddrForm(false);
  };

  return (
    <>
      <div id="userProfile">
        <h1>My Account</h1>
        <div className="container">
          {user ? (
            <div className="details">
              <div className="img">
                {user.username.match(/\b(\w)/g).join("")}
              </div>
              <div>
                <h4>{user.username}</h4>
                <p>{user.email}</p>
              </div>
            </div>
          ) : (
            <h1>Loading...</h1>
          )}

          <div className="address">
            {address.length > 0 ? (
              <>
                <h4>Manage Address:</h4>
                <p>
                  {address[0].street},
                  <br /> {address[0].city}, {address[0].postalCode},
                  <br /> {address[0].state}, {address[0].country}
                </p>
                <button>Update Address</button>
              </>
            ) : (
              <>
                <h4>Manage Address:</h4>
                <p>
                  You currently don't have any saved delivery addresses.Add an
                  address here to be pre-filled for quicker checkout.
                </p>
                <button onClick={() => setAddrForm(true)}>Add Address</button>
              </>
            )}
          </div>
          <div className="address">
            <h4>Manage Your Orders:</h4>
            <p>
              You currently don't have any order. <span>Order Now</span>
            </p>
          </div>
          <div className="logout">
            <i
              class="fa-solid fa-arrow-right-from-bracket"
              style={{ marginRight: "10px" }}
            ></i>{" "}
            Logout
          </div>
        </div>
      </div>

      <div
        id="addrform"
        style={addrFrom ? { display: "flex" } : { display: "none" }}
      >
        <div className="container">
          <h2>Manage Address</h2>
          <form onSubmit={handleAddrForm}>
            <input
              type="text"
              placeholder="Street.."
              value={street}
              onChange={(e) => setStreet(e.target.value)}
            />
            <input
              type="text"
              placeholder="City.."
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <input
              type="text"
              placeholder="State.."
              value={state}
              onChange={(e) => setState(e.target.value)}
            />
            <input
              type="text"
              placeholder="Postal Code.."
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
            />
            <input
              type="text"
              placeholder="Country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
            <button type="submit">Add Address</button>
            <button className="close" onClick={() => setAddrForm(false)}>
              Close
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Profile;
