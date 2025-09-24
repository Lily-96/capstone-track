import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function PrenotaViaggi() {
  const [prenotati, setPrenotati] = useState([]);
  const [metodoPagamento, setMetodoPagamento] = useState("carta");
  const navigate = useNavigate();

  // Carica i viaggi prenotati da localStorage SOLO al primo render
  useEffect(() => {
    const stored = localStorage.getItem("viaggiPrenotati");
    console.log("Carico da localStorage:", stored);
    if (stored) {
      try {
        setPrenotati(JSON.parse(stored));
      } catch (err) {
        console.error("Errore parsing JSON:", err);
      }
    }
  }, []);

  // Aggiorna localStorage solo se ci sono viaggi
  useEffect(() => {
    if (prenotati.length > 0) {
      localStorage.setItem("viaggiPrenotati", JSON.stringify(prenotati));
    }
  }, [prenotati]);

  const eliminaViaggio = (idx) => {
    const nuovi = prenotati.filter((_, i) => i !== idx);
    setPrenotati(nuovi);

    // Se elimino tutti i viaggi, svuoto anche localStorage
    if (nuovi.length === 0) {
      localStorage.removeItem("viaggiPrenotati");
    }
  };

  const confermaPrenotazione = () => {
    alert(`Prenotazione confermata con pagamento: ${metodoPagamento}`);
    setPrenotati([]);
    localStorage.removeItem("viaggiPrenotati");
    navigate("/cerca-viaggi");
  };

  return (
    <div style={{ color: "white" }}>
      <h2>Prenota Viaggi</h2>
      <p>Qui trovi i tuoi viaggi selezionati. Puoi aggiungere altri viaggi o completare la prenotazione.</p>

      {prenotati.length === 0 ? (
        <p>
          Nessun viaggio selezionato. <Link to="/cerca-viaggi">Aggiungi ora!</Link>
        </p>
      ) : (
        <div>
          {prenotati.map((v, idx) => (
            <div
              key={idx}
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: 16,
                background: "#dfd2d2ff",
                borderRadius: 8,
                padding: 12,
              }}
            >
              <img src={v.img} alt={v.titolo} style={{ width: 80, borderRadius: 8, marginRight: 16 }} />
              <div style={{ flex: 1 }}>
                <h4>{v.titolo}</h4>
                <p>Prezzo: {v.price}€</p>
                <p>Stato: {v.stato || "in attesa"}</p>
                <button className="button" onClick={() => eliminaViaggio(idx)} style={{ background: "#dc3545", color: "#fff" }}>
                  Elimina
                </button>
              </div>
            </div>
          ))}

          <div style={{ marginTop: 24 }}>
            <label>
              Metodo di pagamento:{" "}
              <select value={metodoPagamento} onChange={(e) => setMetodoPagamento(e.target.value)}>
                <option value="carta">Carta di credito</option>
                <option value="paypal">PayPal</option>
                <option value="bonifico">Bonifico</option>
              </select>
            </label>
            <button className="button" style={{ marginLeft: 16, background: "#28a745", color: "#fff" }} onClick={confermaPrenotazione}>
              Conferma Prenotazione
            </button>
          </div>
        </div>
      )}

      <div style={{ marginTop: 32 }}>
        <Link to="/cerca-viaggi" className="button" style={{ background: "#007bff", color: "#fff" }}>
          Aggiungi altri viaggi
        </Link>
      </div>
    </div>
  );
}
