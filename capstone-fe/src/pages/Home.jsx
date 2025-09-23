import React from "react";
import CardViaggio from "../components/CardViaggio";
import bgImg from "./assets/Testo del paragrafo.png";

export default function Home() {
  const proposals = [
    {
      title: "Parigi Romantica",
      desc: "Weekend romantico a Parigi: tour della città, crociera sulla Senna e visite ai musei.",
      img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=60",
    },
    {
      title: "Tokyo Tradizione & Futuro",
      desc: "Un mix perfetto: templi antichi, quartieri hi-tech e cucina straordinaria.",
      img: "https://plus.unsplash.com/premium_photo-1661914240950-b0124f20a5c1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dG9reW98ZW58MHx8MHx8fDA%3D",
    },
    {
      title: "New York Metropoli",
      desc: "Scopri musei, Broadway e la skyline: esperienza metropolitana indimenticabile.",
      img: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bmV3JTIweW9ya3xlbnwwfHwwfHx8MA%3D%3D",
    },
  ];

  return (
    <div
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <div className="card-grid">
        {proposals.map((p, idx) => (
          <CardViaggio key={idx} title={p.title} desc={p.desc} img={p.img} onClick={() => alert(p.title)} />
        ))}
      </div>
    </div>
  );
}
