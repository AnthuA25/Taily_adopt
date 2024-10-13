import lineTop from "../assets/line-top.png";
import lineBottom from "../assets/line-bottom.png";
import "../styles/Register.css";
import { Link } from "react-router-dom";
import { useState } from "react";

export const Register = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
        rol: "",
        password: ""
      });
      const handleChange = (e) =>{
        setFormData({
            ...formData,
            [e.target.name] : e.target.value
        })
      }   
      const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:8000/users", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(formData),
            });
            
            const data = await response.json();
            console.log(data)
            
            if (response.ok) {
              alert("Usuario registrado con éxito");

              setFormData({
                name: "",
                email: "",
                phone: "",
                address: "",
                rol: "",
                password: ""
              });
            } else {
              alert(data.error);
            }
          } catch (error) {
            console.error("Error registrando el usuario:", error);
          }
      }
  return (
    <div className="login">
      <img src={lineTop} alt="line" className="line-top" />
      <div className="container-login">
        <h2 className="login-text-r">Registrate</h2>
        <p className="p-register">¿Y tienes una cuenta? <Link to="/login">Iniciar Sesión</Link></p>
        <form className="form-r" onSubmit={handleSubmit}>
          <div className="form-group">
            <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange} 
                required
            />
            <label className="lb-name">
              <span className="text-name">Nombre Completo</span>
            </label>
          </div>
          <div className="form-group">
            <input 
                type="text" 
                name="email" 
                value={formData.email}
                onChange={handleChange} 
                required />
            <label className="lb-name">
              <span className="text-name">Correo Electrónico</span>
            </label>
          </div>
          <div className="form-group">
            <input 
                type="text" 
                name="phone" 
                value={formData.phone}
                onChange={handleChange} 
                required />
            <label className="lb-name">
              <span className="text-name">Teléfono</span>
            </label>
          </div>
          <div className="form-group">
            <input 
                type="text"
                name="address" 
                value={formData.address}
                onChange={handleChange} 
                required />
            <label className="lb-name">
              <span className="text-name">Dirección</span>
            </label>
          </div>
          <div className="form-group">
            <input 
                type="text"
                name="rol"
                value={formData.rol}
                onChange={handleChange} 
                required />
            <label className="lb-name">
              <span className="text-name">Rol</span>
            </label>
          </div>
          <div className="form-group">
            <input 
                type="password"
                name="password" 
                value={formData.password}
                onChange={handleChange} 
                required />
            <label className="lb-name">
              <span className="text-name">Contraseña</span>
            </label>
          </div>
          <p className="forgot-password">
            <a href="#">¿Olvidaste tu contraseña?</a>
          </p>
          <button type="submit" className="login-button">
            Registrarse
          </button>
        </form>
      </div>
      <img src={lineBottom} alt="line" className="line-bottom" />
    </div>
  )
}
