import "../../styles/rescuer/HomeRes.css";
import patitas from "../../assets/patitas.png";
import { FaUserCircle, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

export const HomeRes = () => {
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
      <div>
        <p>No hay publicaciones actuales</p>
      </div>
      <div></div>
    </div>
  );
};
