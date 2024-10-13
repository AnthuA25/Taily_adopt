import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { updatePet, fetchPetById } from "../../services/petService";
import logo from "../../assets/logo.png";
import { FaUserCircle } from "react-icons/fa";
import '../../styles/rescuer/EditPet.css';

export const EditPet = () => {
  const { pet_id } = useParams();
  const navigate = useNavigate();
  const [petData, setPetData] = useState({
    name: "",
    gender: "",
    location: "",
    type: "",
    description: "",
    photo_url: "",
    status: "available",
  });
  useEffect(() => {
    const loadPetData = async () => {
      try {
        const data = await fetchPetById(pet_id); 
        setPetData(data);
      } catch (error) {
        console.error("Error al cargar los datos del perro:", error.message);
      }
    };
    loadPetData();
  }, [pet_id]);

  const uploadPhoto = async (file) => {
    const formData = new FormData();
    formData.append("image", file);
    const response = await fetch("https://api.imgbb.com/1/upload?key=7c113558991178b52f82ab19e84e51bf", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    console.log("data",data)
    return data.data.url;
  };

  const handleChange = async(e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      const photoUrl = await uploadPhoto(files[0]);
      setPetData((prevData) => ({
        ...prevData,
        photo_url: photoUrl, 
      }));
    } else {
      setPetData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updatePet(pet_id, petData); 
      navigate("/rescatista"); 
    } catch (error) {
      console.error("Error al actualizar los datos del perro:", error.message);
    }
  };

  return (
    <div className="edit-page">
      <div className="nav-admin">
        <div className="btn-admin">
          <img src={logo} alt="" />
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
      <div className="container-add">
        <h2 className="add-text">Crear una nueva publicación</h2>
        <form className="form-add" onSubmit={handleSubmit}>
          <div className="form-group-add">
            <input type="text" name="name" value={petData.name} onChange={handleChange} />
            <label className="lb-name">
              <span className="text-name">Nombre</span>
            </label>
          </div>
          <div className="form-group-add">
            <input type="text" name="gender" value={petData.gender} onChange={handleChange} />
            <label className="lb-name">
              <span className="text-name">Género</span>
            </label>
          </div>
          <div className="form-group-add">
            <input
              type="text"
              name="location"
              value={petData.location}
              onChange={handleChange}
            />
            <label className="lb-name">
              <span className="text-name">Localización</span>
            </label>
          </div>
          <div className="form-group-add">
            <input type="text" name="type" value={petData.type} onChange={handleChange} />
            <label className="lb-name">
              <span className="text-name">Especie</span>
            </label>
          </div>
          <div className="form-group-add">
            <input
              type="text"
              name="description"
              value={petData.description}
              onChange={handleChange}
            />
            <label className="lb-name">
              <span className="text-name">Descripcion</span>
            </label>
          </div>
          <div className="form-group-add">
            <input type="text" name="status" value={petData.status} onChange={handleChange} />
            <label className="lb-name">
              <span className="text-name">Estado</span>
            </label>
          </div>
          <div className="form-group-add">
            <input
              type="file"
              accept="image/*"
              name="photo_url"
              onChange={handleChange}
              required
            />
            <label className="lb-name">
              <span className="text-name">Subir imagen</span>
            </label>
          </div>
          <button type="submit" className="btn-create">
            Crear
          </button>
        </form>
      </div>
    </div>
  );
};
