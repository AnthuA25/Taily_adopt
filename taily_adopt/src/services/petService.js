export const fetchPets = async () => {
  const token = localStorage.getItem("token");
  try {
    const response = await fetch("http://localhost:8000/rescuer/announcement", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error("Error al obtener las mascotas");
    }

    const data = await response.json();
    if (data && data.data) {
      return data.data; 
    } else {
      throw new Error("Error: la respuesta no tiene el formato esperado.");
    }
  } catch (error) {
    console.error("Error al hacer fetch:", error.message);
    throw error; 
  }
};

export const deletePet = async (petId) => {
    const token = localStorage.getItem("token");
    const response = await fetch(`http://localhost:8000/rescuer/announcement/${petId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
    });
  
    if (!response.ok) {
      throw new Error("Error al eliminar la mascota");
    }
  
    return await response.json();
  };
  
