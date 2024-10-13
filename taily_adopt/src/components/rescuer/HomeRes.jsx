import "../../styles/rescuer/HomeRes.css";
import patitas from "../../assets/patitas.png";
import { FaUserCircle, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState,useEffect} from "react";

export const HomeRes = () => {
  const [pets, setPets] = useState([]);

  const fetchPets = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await fetch(
        "http://localhost:8000/rescuer/announcement",{
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
          }
        });
      if (!response.ok) {
        throw new Error("Error al obtener las mascotas");
      }
      const data = await response.json();
      if (data && data.data) {
        setPets(data.data);
      } else {
        console.error("Error: la respuesta no tiene el formato esperado.");
      }
    } catch (error) {
      console.error("Error al hacer fetch:", error.message);
    }
  };
  // Cargar mascotas al cargar el componente
  useEffect(() => {
    fetchPets();
  }, []);

  return (
    <div className="admin">
      <div className="nav-admin">
        <div className="btn-admin">
          <Link to="/rescatista/nueva-publicacion">
            <button>
              <FaPlus /> Publicar nueva mascota
            </button>
          </Link>
        </div>
        <div className="profile-admin">
          <h3>Perfil</h3>
          <h3>Seguimiento</h3>
          <div className="profile-user">
            <div className="profile-date">
              <h3>Juan Velazquez</h3>
              <span>rescatista</span>
            </div>
            <FaUserCircle className="logoicon" />
          </div>
        </div>
      </div>
      <h1 className="title-publ">
        Publicaciones Actuales
        <img src={patitas} alt="" />
      </h1>
      <div className="pet-list">
        {pets.length > 0 ? (
          pets.map((pet) => (
            <div key={pet.pet_id} className="pet-card">
              <h3>{pet.name}</h3>
              <img src={pet.photo_url} alt={pet.name} />
              <p>{pet.description}</p>
            </div>
          ))
        ) : (
          <p>No hay mascotas publicadas aún.</p>
        )}
      </div>
      <div></div>
    </div>
  );
};
