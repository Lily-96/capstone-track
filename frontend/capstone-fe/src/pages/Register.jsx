import React, {useState} from 'react'
import api from '../api/axios'
import { useNavigate } from 'react-router-dom'

export default function Register(){
  const [fullName,setFullName] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const navigate = useNavigate()

  const handle = async (e) => {
    e.preventDefault()
    try {
      await api.post('/api/users', { fullName, email, password })
      alert('Registrazione effettuata. Effettua il login.')
      navigate('/login')
    } catch (err) {
      alert(err.response?.data?.message || 'Errore registrazione')
    }
  }

  return (
    <div style={{maxWidth:480, margin:'20px auto'}}>
      <h2>Registrati</h2>
      <form onSubmit={handle}>
        <input placeholder="Nome e Cognome" value={fullName} onChange={e=>setFullName(e.target.value)} style={{width:'100%',padding:8,marginBottom:8}} />
        <input placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} style={{width:'100%',padding:8,marginBottom:8}} />
        <input type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} style={{width:'100%',padding:8,marginBottom:8}} />
        <button className="button" type="submit">Registrati</button>
      </form>
    </div>
  )
}
