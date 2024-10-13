import { NavbarAdop } from "./NavbarAdop.jsx";
import "../../styles/adopt/HomeAdop.css";
import patitas from "../../assets/patitas.png";
// import puppy from "../../assets/puppy.jpeg";
import { FaHeart } from "react-icons/fa";
import { useState, useEffect } from "react";
import { Loading } from "../Loading.jsx";
import { Link } from "react-router-dom";


export const HomeAdop = () => {
  const [petList, setPetList] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPets = async () => {
    try {
      const response = await fetch("http://localhost:8000/account", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("Error al obtener las mascotas");
      }
      const data = await response.json();
      setPetList(data); // Ajusta según el formato de tu respuesta
      console.log(data);
    } catch (error) {
      console.error("Error al obtener las mascotas:", error.message);
    } finally {
      setLoading(false); // Cambia el estado de carga al finalizar
    }
  };
  // Usar useEffect para llamar fetchPets cuando el componente se monte
  useEffect(() => {
    fetchPets();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="home-adop">
      <NavbarAdop />
      <h3 className="titlepet">
        Mascotas en adopción <img src={patitas} alt="" />{" "}
      </h3>
      <div className="container">
        <div className="all-pets">
          {petList.length > 0 ? (
            petList.map((pet) => (
              <div key={pet.id} className="photo">
                <Link to={`/pet/${pet.pet_id}`}>
                  <img src={pet.photo_url} alt={pet.name} />
                  <div className="pet-info">
                    <h3>{pet.name}</h3>
                    <FaHeart />
                  </div>
                </Link>
              </div>
            ))
          ) : (
            <p>No hay mascotas disponibles para adopción.</p>
          )}
        </div>
      </div>
    </div>
  );
};
