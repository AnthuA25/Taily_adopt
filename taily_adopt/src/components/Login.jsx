import "../styles/Login.css";
import lineTop from "../assets/line-top.png";
import lineBottom from "../assets/line-bottom.png";
import { Link } from "react-router-dom";
import { useState } from 'react';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');


  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8000/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      const data = await response.json();

      if (response.ok) {
        // Guardar el token en localStorage
        localStorage.setItem('token', data.data.token);

        // Establece la URL de redirección basada en el rol
        if (data.data.rol === 'adoptant') {
          window.location.href = '/adoptante';
        } else if (data.data.rol === 'rescuer' || data.data.rol === 'shelter') {
          window.location.href = '/rescatista';
        }
      } else {
        setError(data.message || 'Error al iniciar sesión.');
      }
    } catch (error) {
      setError('Error de conexión.');
    }
  };
  return (
    <div className="login">
      <img src={lineTop} alt="line" className="line-top" />
      <div className="container-login">
        <h2 className="login-text">Iniciar Sesión</h2>
        <p>¿No tienes una cuenta? <Link to="/register">Registrate</Link></p>

        <form className="form" onSubmit={handleLogin}>
          <div className="form-group">
            <input 
              type="text" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
               />
            <label className="lb-name">
              <span className="text-name">Correo Electrónico</span>
            </label>
          </div>
          <div className="form-group">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
               />
            <label className="lb-name">
              <span className="text-name">Contraseña</span>
            </label>
          </div>
          <p className="forgot-password">
            <a href="#">¿Olvidaste tu contraseña?</a>
          </p>
          <button type="submit" className="login-button">
            Iniciar Sesión
          </button>
        </form>
      </div>
      <img src={lineBottom} alt="line" className="line-bottom" />
    </div>
  );
};
