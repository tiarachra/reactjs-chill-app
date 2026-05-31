import React, { useState } from 'react';
import Home from './pages/home';
import Login from './pages/login';
import Register from './pages/register';

function App() {
  // Membuat state untuk penanda halaman aktif
  // Nilai awalnya adalah 'home'. Bisa diganti 'login' atau 'register'
  const [page, setPage] = useState('home');

  return (
    <>
      {/* Menu Navigasi Instan di pojok atas layar buat tes pindah halaman */}
      <div style={{
        position: 'fixed', 
        top: '10px', 
        left: '50%', 
        transform: 'translateX(-50%)', 
        zIndex: 9999, 
        background: 'rgba(0,0,0,0.8)', 
        padding: '10px', 
        borderRadius: '8px',
        border: '1px solid #fff'
      }}>
        <button onClick={() => setPage('home')} style={{ marginRight: '10px', cursor: 'pointer' }}>Halaman Home</button>
        <button onClick={() => setPage('login')} style={{ marginRight: '10px', cursor: 'pointer' }}>Halaman Login</button>
        <button onClick={() => setPage('register')} style={{ cursor: 'pointer' }}>Halaman Register</button>
      </div>

      {/* Sistem yang otomatis memilih halaman mana yang tampil */}
      {page === 'home' && <Home />}
      {page === 'login' && <Login />}
      {page === 'register' && <Register />}
    </>
  );
}

export default App;