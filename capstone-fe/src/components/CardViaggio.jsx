import React from "react";

export default function CardViaggio({ title, desc, img, onClick }) {
  return (
    <div className="card">
      <div style={{ position: "relative" }}>
        <img src={img} alt={title} />
        <div className="card-title-overlay">{title}</div>
      </div>
      <p>{desc}</p>
      <button className="button" onClick={onClick}>
        Scopri di più
      </button>
    </div>
  );
}
