import { NavbarAdop } from "./NavbarAdop.jsx";
import "../../styles/adopt/HomeAdop.css";
import patitas from "../../assets/patitas.png";
import puppy from "../../assets/puppy.jpeg";
import { FaHeart } from "react-icons/fa";
import { useState } from "react";

const pets = [
  { id: 1, name: "Fluffy", image: puppy, liked: false },
  { id: 2, name: "Peep", image: puppy, liked: false },
  { id: 3, name: "Bubbles", image: puppy, liked: false },
  { id: 4, name: "Spot", image: puppy, liked: false },
  { id: 5, name: "Mittens", image: puppy, liked: false },
  { id: 6, name: "Kitty", image: puppy, liked: false },
  { id: 7, name: "Golden", image: puppy, liked: false },
];

export const HomeAdop = () => {
  const [petList, setPetList] = useState(pets);

  // const toggleLike = (id) => {
  //   setPetList((prevPets) =>
  //     prevPets.map((pet) =>
  //       pet.id === id ? { ...pet, liked: !pet.liked } : pet
  //     )
  //   );
  // };
  return (
    <div className="home-adop">
      <NavbarAdop />
      <h3 className="titlepet">
        Mascotas en adopción <img src={patitas} alt="" />{" "}
      </h3>
      <div className="container">
        <div className="all-pets">
          {petList.map((pet) => (
            <div key={pet.id} className="photo">
              <img src={pet.image} alt={pet.name} />
              <div className="pet-info">
                <h3>{pet.name}</h3>
                  <FaHeart />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
