import "../../styles/rescuer/HomeRes.css";
import patitas from "../../assets/patitas.png";
import { FaUserCircle, FaPlus, FaPencilAlt } from "react-icons/fa";
import { Link,useNavigate} from "react-router-dom";
import { useState,useEffect} from "react";
import { CiLogout } from "react-icons/ci";
import { FaRegTrashCan } from "react-icons/fa6";
import { deletePet, fetchPets } from "../../services/petService";

export const HomeRes = () => {
  const [pets, setPets] = useState([]);
  const navigate = useNavigate();

  const handleLogout = async () => {
    localStorage.removeItem("token");

    navigate("/login");
  };

  const loadPets = async () => {
    try {
      const petsData = await fetchPets();
      setPets(petsData);
    } catch (error) {
      console.error("Error al cargar mascotas:", error.message);
    }
  };
  
  const handleDeletePet = async (pet_id) =>{
    if (window.confirm("¿Estás seguro de que deseas eliminar esta mascota?")) {
      try {
        await deletePet(pet_id); // Llama a la función para eliminar la mascota
        setPets((prevPets) => prevPets.filter((pet) => pet.pet_id !== pet_id)); // Actualiza el estado para eliminarla visualmente
      } catch (error) {
        console.error("Error al eliminar la mascota:", error.message);
      }
    }
  }

  // Cargar mascotas al cargar el componente
  useEffect(() => {
    loadPets();
  }, []);

  return (
    <div className="admin">
      <div className="nav-admin">
        <div className="btn-admin">
          <Link to="/nueva-publicacion">
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
            <CiLogout className="logout" onClick={handleLogout} style={{ cursor: "pointer" }} />
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
              <div className="card-image">
                <img src={pet.photo_url || 'https://via.placeholder.com/246x360'} alt={pet.name} />
              </div>
              <div className="card-info">
              <FaRegTrashCan 
                className="icon"
                onClick={() => handleDeletePet(pet.pet_id)}
                />
                <FaPencilAlt className="icon"  />
              </div>
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
