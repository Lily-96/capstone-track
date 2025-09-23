import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const mete = [
  {
    titolo: "Parigi",
    descrizione: "La città dell'amore, famosa per la Torre Eiffel e i musei.",
    img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=400&q=60",
    price: 1200,
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

export default function DettaglioViaggio() {
  const { id } = useParams();
  const navigate = useNavigate();
  const viaggio = mete[id];
  const [stato, setStato] = useState("in attesa");
  const [prenotato, setPrenotato] = useState(false);
  const [postiDisponibili, setPostiDisponibili] = useState(10);

  if (!viaggio) return <div>Viaggio non trovato</div>;

  const acconto = viaggio.price ? (viaggio.price * 0.1).toFixed(2) : null;
  const handlePrenota = () => {
    if (postiDisponibili > 0) {
      setPrenotato(true);
      setStato("in attesa");
      setPostiDisponibili(postiDisponibili - 1);
    }
  };

  return (
    <div style={{ maxWidth: 600, margin: "40px auto", background: "#f9f9f9", borderRadius: 8, padding: 24, position: "relative" }}>
      <button
        onClick={() => navigate("/cerca-viaggi")}
        style={{
          position: "absolute",
          top: -35,
          right: -35,
          background: "#fff",
          border: "1px solid #ccc",
          borderRadius: "50%",
          fontSize: 24,
          cursor: "pointer",
          color: "#888",
          boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
          width: 36,
          height: 36,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 10,
        }}
        aria-label="Chiudi"
      >
        ×
      </button>
      <img src={viaggio.img} alt={viaggio.titolo} style={{ width: "100%", borderRadius: 8 }} />
      <h2>{viaggio.titolo}</h2>
      <p>{viaggio.descrizione}</p>
      <p>
        <strong>Prezzo totale:</strong> {viaggio.price ? viaggio.price + "€" : "N/A"}
      </p>
      <p>
        <strong>Stato:</strong> {stato}
      </p>
      <p>
        <strong>Posti disponibili:</strong> {postiDisponibili}
      </p>
      {!prenotato ? (
        <button className="button" style={{ marginTop: 16 }} onClick={handlePrenota} disabled={postiDisponibili === 0}>
          {postiDisponibili === 0 ? "Posti esauriti" : "Prenota"}
        </button>
      ) : (
        <div style={{ marginTop: 16 }}>
          <p>
            Acconto da pagare: <strong>{acconto}€</strong>
          </p>
          <button className="button" onClick={() => setStato("confermato")} style={{ background: "#28a745", color: "#fff" }}>
            Paga Acconto
          </button>
          <button className="button" onClick={() => setStato("cancellato")} style={{ background: "#dc3545", color: "#fff", marginLeft: 8 }}>
            Cancella Viaggio
          </button>
        </div>
      )}
    </div>
  );
}
