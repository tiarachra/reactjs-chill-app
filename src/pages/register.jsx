import React from 'react';
import '../styles/register.css';
import InputField from '../components/input_field';

const Login = () => {
  return (
    <main className="register-container">
      <div className="register-card">
        <img src="/images/logo.png" alt="logo" id="icon-logo" />  
        
        <div className="register-card-title">
          <h1>Masuk</h1>
          <p>Selamat datang kembali!</p> 
        </div>

        <form onSubmit={(e) => e.preventDefault()} method="post">
          <InputField 
            label="Username" 
            type="text" 
            id="username" 
            name="username" 
            placeholder="Masukkan username" 
          />

          <InputField 
            label="Kata Sandi" 
            type="password" 
            id="password" 
            name="password" 
            placeholder="Masukkan kata sandi" 
          />

          <div className="login-card-additional-action">
            <p>Belum punya akun? <a href="#">Daftar</a></p>
            <a href="#">Lupa kata sandi</a>
          </div>

          <div className="login-card-action">
            <button type="submit" className="login-button">Masuk</button>
            <p>Atau</p>
            <button type="button" className="login-button google-login-button">
              <img src="/images/google-icon.png" alt="google-icon" />
              <p>Masuk dengan Google</p> 
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Login;