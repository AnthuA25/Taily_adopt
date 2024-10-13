import { NavbarAdop } from "./NavbarAdop.jsx";
import "../../styles/adopt/HomeAdop.css";
import patitas from "../../assets/patitas.png";
// import puppy from "../../assets/puppy.jpeg";
import { FaHeart } from "react-icons/fa";
import { useState, useEffect } from "react";

// const pets = [
//   { id: 1, name: "Fluffy", image: puppy, liked: false },
//   { id: 2, name: "Peep", image: puppy, liked: false },
//   { id: 3, name: "Bubbles", image: puppy, liked: false },
//   { id: 4, name: "Spot", image: puppy, liked: false },
//   { id: 5, name: "Mittens", image: puppy, liked: false },
//   { id: 6, name: "Kitty", image: puppy, liked: false },
//   { id: 7, name: "Golden", image: puppy, liked: false },
// ];

export const HomeAdop = () => {
  const [petList, setPetList] = useState([]);

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
      console.log(data)
    } catch (error) {
      console.error("Error al obtener las mascotas:", error.message);
    }
  };
  // Usar useEffect para llamar fetchPets cuando el componente se monte
  useEffect(() => {
    fetchPets();
  }, []);

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
                <img src={pet.photo_url} alt={pet.name} />
                <div className="pet-info">
                  <h3>{pet.name}</h3>
                  <FaHeart />
                </div>
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
