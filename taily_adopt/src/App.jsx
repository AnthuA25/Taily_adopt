import { Login } from "./components/Login";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Register } from "./components/Register";
import { HomeAdop } from "./components/adopt/HomeAdop";
import { HomeRes } from "./components/rescuer/HomeRes";
import { DetailPet } from "./components/adopt/DetailPet";
import { AddPet } from "./components/rescuer/AddPet";
import { EditPet } from "./components/rescuer/EditPet";


function App() {
  return (
    <div className="app">
        <Router>
          <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/adoptante" element={<HomeAdop />} />
            <Route path="/rescatista" element={<HomeRes />} />
            <Route path="/nueva-publicacion" element={<AddPet />} />
            <Route path="/pet/:pet_id" element={<DetailPet />} />
            <Route path="/edit/:pet_id" element={<EditPet/>} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
