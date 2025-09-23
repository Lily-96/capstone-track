import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CercaViaggi from "./pages/CercaViaggi";
import PrenotaViaggi from "./pages/PrenotaViaggi";
import { useSelector } from "react-redux";
import DettaglioViaggio from "./components/DettaglioViaggio";

function App() {
  const token = useSelector((state) => state.auth.token);

  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cerca-viaggi" element={<CercaViaggi />} />
          <Route path="/prenota-viaggi" element={token ? <PrenotaViaggi /> : <Navigate to="/login" />} />
          <Route path="/prenota-viaggi/:id" element={<DettaglioViaggio />} />
        </Routes>
      </div>
      <div className="footer">Capstone Liliya Savitska</div>
    </>
  );
}

export default App;
