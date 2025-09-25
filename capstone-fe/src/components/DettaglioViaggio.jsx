import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import mete from "../data/mete";

export default function DettaglioViaggio() {
  const { id } = useParams();
  const navigate = useNavigate();
  const viaggio = mete[id];

  if (!viaggio) return <div>Viaggio non trovato</div>;

  const handlePrenota = () => {
    console.log("Prenotazione avviata per", viaggio.titolo);
    const prenotati = JSON.parse(localStorage.getItem("viaggiPrenotati") || "[]");
    if (!prenotati.some((v) => v.titolo === viaggio.titolo)) {
      prenotati.push({
        titolo: viaggio.titolo,
        img: viaggio.img,
        price: viaggio.price,
        stato: "in attesa",
      });
      localStorage.setItem("viaggiPrenotati", JSON.stringify(prenotati));
    }
    navigate("/prenota-viaggi");
  };

  return (
    <div style={{ maxWidth: 600, margin: "40px auto", background: "#f9f9f9", borderRadius: 8, padding: 24, position: "relative" }}>
      <img src={viaggio.img} alt={viaggio.titolo} style={{ width: "100%", borderRadius: 8 }} />
      <span className="close-btn" onClick={() => navigate(-1)}>
        &times;
      </span>
      <h2>{viaggio.titolo}</h2>
      <p>{viaggio.descrizione}</p>
      <p>
        <strong>Prezzo totale:</strong> {viaggio.price}€
      </p>
      <button
        className="button"
        style={{
          marginTop: 16,
          background: "#28a745",
          color: "#fff",
          fontWeight: "bold",
        }}
        onClick={handlePrenota}
      >
        Prenota
      </button>
    </div>
  );
}
