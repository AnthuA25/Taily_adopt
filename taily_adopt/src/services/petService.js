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
const token = localStorage.getItem("token");
export const deletePet = async (petId) => {
  const response = await fetch(
    `http://localhost:8000/rescuer/announcement/${petId}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error("Error al eliminar la mascota");
  }

  return await response.json();
};

export const updatePet = async(pet_id,petData) =>{
    const response = await fetch(`http://localhost:8000/rescuer/announcement/${pet_id}`,{
        method: "PUT",
        headers:{
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(petData),
        });
        if (!response.ok) {
            throw new Error("Error al actualizar la mascota");
        }
        return await response.json();
}

export const fetchPetById = async (pet_id) => {
    const response = await fetch(`http://localhost:8000/pet/${pet_id}`); // Ajusta la URL
    if (!response.ok) {
      throw new Error('Error al cargar los datos del perro');
    }
    return await response.json();
  };
  