import React, { useContext } from "react";
import "./Style.css";
import { Link } from "react-router-dom";
import UserContext from "../Contexts/UserContext";
import Login from "./Login";

const Profile = () => { 

    const { user } = useContext(UserContext);

  return (
    <>
        {
            user ? (
                <div id="profile">
                    <h1>Username: {user.username}</h1>
                </div>
            ): (
                <Login />
            )
        }
    </>
  )
}

export default Profile
