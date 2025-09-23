import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../store/authSlice'
import { useNavigate } from 'react-router-dom'

export default function Login(){
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await dispatch(login({email,password})).unwrap()
      navigate('/')
    } catch (err) {
      alert('Credenziali non valide')
    }
  }

  return (
    <div style={{maxWidth:480, margin:'20px auto'}}>
      <h2>Accedi</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} style={{width:'100%',padding:8,marginBottom:8}} />
        <input type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} style={{width:'100%',padding:8,marginBottom:8}} />
        <button className="button" type="submit">Accedi</button>
      </form>
    </div>
  )
}
