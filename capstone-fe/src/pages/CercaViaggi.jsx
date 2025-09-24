import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import mete from "../data/mete";

const PAGE_SIZE = 5;

export default function CercaViaggi() {
  const [pagina, setPagina] = useState(1);
  const pageCount = Math.ceil(mete.length / PAGE_SIZE);
  const metePagina = mete.slice((pagina - 1) * PAGE_SIZE, pagina * PAGE_SIZE);
  const navigate = useNavigate();

  const handlePrenotaDiretta = (viaggio) => {
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
    <div>
      <h2 style={{ textAlign: "center", color: "#46dacdff", borderBottom: "2px solid #46dacdff", paddingBottom: "8px" }}>Cerca Viaggi</h2>
      <div>
        {metePagina.map((meta, idx) => {
          const realIdx = (pagina - 1) * PAGE_SIZE + idx;
          return (
            <div
              key={meta.titolo}
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "20px",
                background: "#f9f9f9",
                borderRadius: "8px",
                padding: "10px",
                position: "relative",
              }}
            >
              <img
                src={meta.img}
                alt={meta.titolo}
                style={{
                  width: "120px",
                  height: "80px",
                  objectFit: "cover",
                  borderRadius: "8px",
                  marginRight: "16px",
                }}
              />
              <div
                style={{
                  display: "flex",
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "space-between",
                  height: "80px",
                }}
              >
                <div>
                  <h3 style={{ margin: "0 0 8px 0" }}>{meta.titolo}</h3>
                  <p style={{ margin: 0 }}>{meta.descrizione}</p>
                  <button
                    className="button"
                    style={{ marginTop: "8px", marginRight: "8px", color: "black" }}
                    onClick={() => navigate(`/dettaglio-viaggio/${realIdx}`)}
                  >
                    Dettagli
                  </button>
                  <button className="button" style={{ marginTop: "8px", color: "black" }} onClick={() => handlePrenotaDiretta(meta)}>
                    Prenota
                  </button>
                </div>
                <p style={{ fontWeight: "bold", margin: 0 }}>{meta.price}€</p>
              </div>
            </div>
          );
        })}
      </div>
      {/* Paginazione */}
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        {Array.from({ length: pageCount }, (_, i) => (
          <button
            key={i}
            className="button"
            style={{
              margin: "0 4px",
              background: pagina === i + 1 ? "#007bff" : "#e0e0e0",
              color: pagina === i + 1 ? "#fff" : "#333",
            }}
            onClick={() => setPagina(i + 1)}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
