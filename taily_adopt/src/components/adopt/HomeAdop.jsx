import { NavbarAdop } from "./NavbarAdop.jsx";
import "../../styles/adopt/HomeAdop.css";
import puppy from "../../assets/puppy.jpeg";
export const HomeAdop = () => {
  return (
    <div className="home-adop">
      <NavbarAdop />
      <h3 className="titlepet">Mascotas en adopción</h3>
      <div className="container">
        <div className="all-pets">
          <div className="photo">
            <img src={puppy} alt="dog" />
            <div className="info-pet">
              <h4 className="name-pet">Puppy</h4>
              <p>Tipo: perro</p>
              <p>Género: Hembra</p>
            </div>
          </div>
          <div className="photo">
            <img src={puppy} alt="dog" />
            <div className="info-pet">
              <h4 className="name-pet">Puppy</h4>
              <p>Tipo: perro</p>
              <p>Género: Hembra</p>
            </div>
          </div>
          <div className="photo">
            <img src={puppy} alt="dog" />
            <div className="info-pet">
              <h4 className="name-pet">Puppy</h4>
              <p>Tipo: perro</p>
              <p>Género: Hembra</p>
            </div>
          </div>
          <div className="photo">
            <img src={puppy} alt="dog" />
            <div className="info-pet">
              <h4 className="name-pet">Puppy</h4>
              <p>Tipo: perro</p>
              <p>Género: Hembra</p>
            </div>
          </div>
          <div className="photo">
            <img src={puppy} alt="dog" />
            <div className="info-pet">
              <h4 className="name-pet">Puppy</h4>
              <p>Tipo: perro</p>
              <p>Género: Hembra</p>
            </div>
          </div>
          <div className="photo">
            <img src={puppy} alt="dog" />
            <div className="info-pet">
              <h4 className="name-pet">Puppy</h4>
              <p>Tipo: perro</p>
              <p>Género: Hembra</p>
            </div>
          </div>
        </div>
        <div className="filter"></div>
      </div>
    </div>
  );
};
