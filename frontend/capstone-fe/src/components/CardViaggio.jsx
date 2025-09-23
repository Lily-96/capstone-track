import React from 'react'

export default function CardViaggio({title, desc, img, onClick}){
  return (
    <div className="card">
      <img src={img} alt={title} />
      <h3>{title}</h3>
      <p>{desc}</p>
      <button className="button" onClick={onClick}>Scopri di più</button>
    </div>
  )
}
