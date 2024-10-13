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
import { InfoPet } from "./components/adopt/InfoPet";
import { AddPet } from "./components/rescuer/AddPet";


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
            <Route path="/rescatista/nueva-publicacion" element={<AddPet />} />
            <Route path="/info" elemet={<InfoPet />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
