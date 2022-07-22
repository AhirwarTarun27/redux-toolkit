import React from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../store/auth-store";
import Cart from "./Cart";
import "./Header.css";
const Header = () => {
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(authActions.setLoggedOut());
  };
  return (
    <header>
      <nav className="header-nav">
        <ul className="header-ul">
          <li>
            <h2
              className="header-h2"
              style={{ fontFamily: "monospace", fontSize: "30px" }}
            >
              Redux Shopping App
            </h2>
          </li>
          <li>
            <Cart />
          </li>
          <li>
            <button onClick={onLogout} className="logoutBtn">
              Logout
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
