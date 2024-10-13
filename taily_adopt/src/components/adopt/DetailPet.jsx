import { useState, useEffect } from "react";
import { NavbarAdop } from "./NavbarAdop";
import { useParams } from "react-router-dom";
import { Loading } from "../Loading";
import "../../styles/adopt/DetailPet.css";

export const DetailPet = () => {
  const { pet_id } = useParams(); // ID de la URL
  const [pet, setPet] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [rescuer, setRescuer] = useState(null);

  const fetchRescuerDetails = async (user_id) => {
    const token = localStorage.getItem("token");

    try {
      const response = await fetch(`http://localhost:8000/users/${user_id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        throw new Error("Error al obtener los detalles del rescatista");
      }
      const userData = await response.json();
      console.log("userpe",userData)
      setRescuer(userData); // Guardar los detalles del rescatista
    } catch (error) {
      console.error(
        "Error al obtener los detalles del rescatista:",
        error.message
      );
    }
  };

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

      const data = await response.json();
      console.log("data_", data);
      setPet(data);
      fetchRescuerDetails(data.user_id);
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

  //envia el correo
  const handleEmailClick = () => {
    const subject = `Interesado en adoptar a ${pet.name}`;
    window.open(`mailto:${rescuer.email}?subject=${encodeURIComponent(subject)}`, '_blank');
  };

  return (
    <div className="detailPet">
      <NavbarAdop />
      <img src={pet.photo_url} alt={pet.name} />
      <h1>{pet.name}</h1>
      <p>{pet.description}</p>
      {rescuer && (
        <div className="rescuer-info">
          <h2>Información del Rescatista</h2>
          <p>
            <strong>Nombre:</strong> {rescuer.name}
          </p>
          <p>
            <strong>Email:</strong> {rescuer.email}
          </p>
          <p>
            <strong>Teléfono:</strong> {rescuer.phone}
          </p>

          <button onClick={handleEmailClick} className="email-button">
            Enviar información
          </button>
        </div>
      )}
    </div>
  );
};
