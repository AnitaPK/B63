import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SlLogout } from "react-icons/sl";
import { FaRegUserCircle, FaCartPlus, FaSun, FaMoon } from "react-icons/fa";
import ThemeContext from "../hooks/ThemeContext";
import { CartContext } from "../hooks/CartContext";

const Navbar = ({ setIsLoggedIn, loggedUser, setLoggedUser }) => {
  const { cartLength } = useContext(CartContext);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const navigate = useNavigate();

  function handleLogout() {
    setIsLoggedIn(false);
    setLoggedUser(null);
    navigate("/login");
  }

  return (
    <nav
      className={`navbar navbar-expand-lg shadow-lg sticky-top ${
        theme === "light" ? "navbar-light bg-white" : "navbar-dark bg-dark"
      }`}
    >
      <div className="container">
        {/* Brand / Logo */}
        <Link
          className={`navbar-brand fw-bold fs-4 ${
            theme === "light" ? "text-dark" : "text-light"
          }`}
          to="/"
        >
          🛒 ShopEase
        </Link>

        {/* Toggler for Mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Items */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarContent">
          <ul className="navbar-nav align-items-center">

            {/* Cart Icon */}
            <li className="nav-item mx-2 position-relative">
              <Link to="/cart" className="nav-link d-flex align-items-center">
                <FaCartPlus size={22} />
                {cartLength > 0 && (
                  <span
                    className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                    style={{ fontSize: "0.7rem" }}
                  >
                    {cartLength}
                  </span>
                )}
              </Link>
            </li>

            {/* Theme Toggle */}
            <li className="nav-item mx-2">
              <button
                onClick={toggleTheme}
                className={`btn btn-sm ${
                  theme === "light"
                    ? "btn-outline-dark"
                    : "btn-outline-light"
                } rounded-circle d-flex align-items-center justify-content-center`}
                style={{ width: "36px", height: "36px" }}
                title={theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
              >
                {theme === "light" ? (
                  <FaMoon size={16} />
                ) : (
                  <FaSun className="text-warning" size={18} />
                )}
              </button>
            </li>

            {/* Auth Buttons */}
            <li className="nav-item ms-3">
              {loggedUser ? (
                <div className="d-flex align-items-center gap-2">
                  <FaRegUserCircle
                    className="text-warning"
                    size={22}
                    title="User Profile"
                  />
                  <span
                    className={`fw-semibold ${
                      theme === "light" ? "text-dark" : "text-light"
                    }`}
                  >
                    {loggedUser.name}
                  </span>
                  <button
                    className="btn btn-sm btn-outline-danger d-flex align-items-center"
                    onClick={handleLogout}
                  >
                    <SlLogout className="me-1" /> Logout
                  </button>
                </div>
              ) : (
                <div className="d-flex gap-2">
                  <Link className="btn btn-sm btn-outline-success" to="/login">
                    Login
                  </Link>
                  <Link className="btn btn-sm btn-success" to="/register">
                    Register
                  </Link>
                </div>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
