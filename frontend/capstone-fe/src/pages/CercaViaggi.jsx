import React from "react";
import { Link } from "react-router-dom";

const mete = [
  {
    titolo: "Parigi",
    descrizione: "La città dell'amore, famosa per la Torre Eiffel e i musei.",
    img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=400&q=60",
    price: "€1200",
  },
  {
    titolo: "Tokyo",
    descrizione: "Tradizione e tecnologia si incontrano nella capitale giapponese.",
    img: "https://images.unsplash.com/photo-1549692520-acc6669e2f0c?auto=format&fit=crop&w=400&q=60",
  },
  {
    titolo: "New York",
    descrizione: "La città che non dorme mai, tra grattacieli e Broadway.",
    img: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=400&q=60",
  },
  {
    titolo: "Roma",
    descrizione: "Storia millenaria, arte e cucina italiana.",
    img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=60",
  },
  {
    titolo: "Sydney",
    descrizione: "Spiagge, surf e la famosa Opera House.",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=60",
  },
  {
    titolo: "Barcellona",
    descrizione: "Arte, spiagge e la vivace vita notturna catalana.",
    img: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=400&q=60",
  },
  {
    titolo: "Cape Town",
    descrizione: "Panorami mozzafiato tra oceano e Table Mountain.",
    img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=60",
  },
  {
    titolo: "Bangkok",
    descrizione: "Templi dorati, mercati galleggianti e street food unico.",
    img: "https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=400&q=60",
  },
  {
    titolo: "Vancouver",
    descrizione: "Natura, sport e una città moderna tra mare e montagne.",
    img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=60",
  },
  {
    titolo: "Rio de Janeiro",
    descrizione: "Spiagge famose, samba e il Cristo Redentore.",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=60",
  },
  {
    titolo: "Istanbul",
    descrizione: "Dove Oriente e Occidente si incontrano tra bazar e moschee.",
    img: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=400&q=60",
  },
  {
    titolo: "San Francisco",
    descrizione: "Il Golden Gate, le colline e la cultura tech della Silicon Valley.",
    img: "https://images.unsplash.com/photo-1465101178521-c1a4c8a0a8b5?auto=format&fit=crop&w=400&q=60",
  },
  {
    titolo: "Praga",
    descrizione: "Castelli fiabeschi, ponti storici e birra artigianale.",
    img: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=400&q=60",
  },
  {
    titolo: "Dubai",
    descrizione: "Grattacieli futuristici, shopping di lusso e deserto.",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=60",
  },
  {
    titolo: "Buenos Aires",
    descrizione: "Tango, architettura coloniale e la passione argentina.",
    img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=60",
  },
];
const PAGE_SIZE = 5;

export default function CercaViaggi() {
  const [pagina, setPagina] = useState(1);
  const pageCount = Math.ceil(mete.length / PAGE_SIZE);

  const metePagina = mete.slice((pagina - 1) * PAGE_SIZE, pagina * PAGE_SIZE);

  return (
    <div>
      <h2 style={{ textAlign: "center", color: "#46dacdff", borderBottom: "2px solid #46dacdff", paddingBottom: "8px" }}>Cerca Viaggi</h2>
      <div>
        {metePagina.map((meta, idx) => (
          <div
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
                <Link
                  to={`/prenota-viaggi/${(pagina - 1) * PAGE_SIZE + idx}`}
                  className="button"
                  style={{ marginTop: "8px", paddingBottom: "5px", display: "inline-block", color: "black" }}
                >
                  Prenota
                </Link>
              </div>
              <p style={{ fontWeight: "bold", margin: 0 }}>{meta.price}</p>
            </div>
          </div>
        ))}
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
import { useState } from "react";
