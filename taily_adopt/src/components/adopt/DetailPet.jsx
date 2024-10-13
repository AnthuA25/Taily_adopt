import { useState, useEffect } from "react";
import { NavbarAdop } from "./NavbarAdop";
import { useParams } from "react-router-dom";
import { Loading } from "../Loading";

export const DetailPet = () => {
  const { pet_id } = useParams(); // ID de la URL
  const [pet, setPet] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPetDetails = async () => {
    try {
      const response = await fetch(`http://localhost:8000/pet/${pet_id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("Error al obtener los detalles de la mascota");
      }
      console.log(response);
      const data = await response.json();
      console.log("data", data);
      setPet(data);
    } catch (error) {
      console.error(
        "Error al obtener los detalles de la mascota:",
        error.message
      );
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPetDetails();
  }, [pet_id]);

  if (loading) {
    return <Loading />;
  }

  if (!pet) {
    return <p>No se encontraron detalles de la mascota.</p>;
  }

  return (
    <div>
      <NavbarAdop />
      <h1>{pet.name}</h1>
      <img src={pet.photo_url} alt={pet.name} />

      <p>{pet.description}</p>
    </div>
  );
};
