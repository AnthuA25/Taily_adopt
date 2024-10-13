import { FaUserCircle } from "react-icons/fa";
import logo from "../../assets/logo.png";
import "../../styles/rescuer/AddPet.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const AddPet = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [location, setLocation] = useState(""); // Estado para las coordenadas del mapa
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [photo, setPhoto] = useState(null);
  const status = "available";

  const uploadPhoto = async(file) =>{
    const formData = new FormData();
    formData.append("image",file);
    const dataUpload = await fetch("https://api.imgbb.com/1/upload?key=7c113558991178b52f82ab19e84e51bf",{
      method: "POST",
      body: formData
    })
    const data = await dataUpload.json();
    setPhoto(data.data.url)
    console.log(data);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !gender || !location || !type || !description || !photo) {
      alert("Por favor, completa todos los campos requeridos.");
      return; // Detén la ejecución si hay campos vacíos
    }

    const token = localStorage.getItem("token");
    const data = {name,gender,location,type,description,photo,status};
    console.log(data)
    console.log(JSON.stringify(data))
    try {
      const response = await fetch("http://localhost:8000/rescuer/announcement", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        //body: {name,gender,location,type,description,photo,status},
        body: JSON.stringify({name,gender,location,type,description,photo_url:photo,status})
      });

      if (!response.ok) {
        throw new Error("Error al guardar la publicación");
      }

      const result = await response.json();
      console.log(result)
      alert("Publicación creada exitosamente");
      navigate("/rescatista");

      // Limpiar el formulario después de enviar
      setName("");
      setGender("");
      setLocation("");
      setType("");
      setDescription("");
      setPhoto(null);
    } catch (error) {
      console.error(error);
      alert("Error al crear la publicación: " + error.message);
    }
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    uploadPhoto(file);
  };

  return (
    <div className="add-pet">
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
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label className="lb-name">
              <span className="text-name">Nombre</span>
            </label>
          </div>
          <div className="form-group-add">
            <input
              type="text"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            />
            <label className="lb-name">
              <span className="text-name">Género</span>
            </label>
          </div>
          <div className="form-group-add">
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
            <label className="lb-name">
              <span className="text-name">Localización</span>
            </label>
          </div>
          <div className="form-group-add">
            <input
              type="text"
              value={type}
              onChange={(e) => setType(e.target.value)}
            />
            <label className="lb-name">
              <span className="text-name">Especie</span>
            </label>
          </div>
          <div className="form-group-add">
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <label className="lb-name">
              <span className="text-name">Descripcion</span>
            </label>
          </div>
          <div className="form-group-add">
            <input
              type="file"
              accept="image/*"
              onChange={handlePhotoChange}
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
