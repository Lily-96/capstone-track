# Capstone Frontend (React + Vite + Redux)

This project is a minimal frontend tailored to your Spring Boot backend running on **http://localhost:3001**.

## Quick start

1. Install dependencies
```bash
cd capstone-fe
npm install
```

2. Start dev server
```bash
npm run dev
```
Open http://localhost:5173

3. Start your backend (Spring Boot) on port 3001.

## Notes about proxy and API calls
The Vite dev server is configured to proxy `/auth` and `/api` to `http://localhost:3001`. That means you can call endpoints like `/auth/login` and `/api/users` from the frontend code and during development they will be forwarded to your backend.

## Login flow
- POST `/auth/login` with JSON `{ "email": "...", "password": "..." }`.
- The backend should return `{ "token": "..." }`.
- The frontend saves the token in **localStorage** and in Redux state.

## Example request with JWT
```js
const token = localStorage.getItem('token');
fetch('/api/users', {
  headers: {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json'
  }
});
```

## Files of interest
- `src/api/axios.js` – axios instance (calls to /auth and /api)
- `src/store/store.js` – Redux store setup
- `src/store/authSlice.js` – auth slice (login/register)
- `src/pages/Home.jsx` – home with 3 travel proposals (static)
- `src/pages/Login.jsx` and `src/pages/Register.jsx` – forms connected to backend
- `vite.config.js` – proxy configuration to backend:3001

## CORS (backend)
If you run into CORS errors, add a CORS config to your Spring Boot backend allowing `http://localhost:5173` (instructions provided in project chat).

