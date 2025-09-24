import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store/authSlice";

export default function Navbar() {
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <nav className="nav">
      <div>
        <Link to="/" className="button logo">
          <strong>Lily Travels ✈️</strong>
        </Link>
      </div>
      <div className="links">
        <Link to="/cerca-viaggi" className="button">
          Cerca Viaggi
        </Link>
        <Link to="/prenota-viaggi" className="button">
          Prenota Viaggi
        </Link>
        {!token ? (
          <>
            <Link to="/login">
              <button className="button">Accedi</button>
            </Link>
            <Link to="/register">
              <button className="button" style={{ background: "#28a745" }}>
                Registrati
              </button>
            </Link>
          </>
        ) : (
          <button className="button" onClick={handleLogout}>
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}
