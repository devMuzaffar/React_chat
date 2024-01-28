import { signOut } from "firebase/auth";
import React, { useContext } from "react";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";

export const Navbar = () => {
  const navigate = useNavigate();
  const {
    currentUser: { photoURL, displayName },
  } = useContext(AuthContext);

  const handleLogout = () => {
    signOut(auth);
    navigate("/login");
  };

  return (
    <div className="navbar">
      <span className="logo">MK Chat</span>
      <div className="user">
        <img src={photoURL} alt="" />
        <span>{displayName}</span>
        <button onClick={handleLogout}>logout</button>
      </div>
    </div>
  );
};
