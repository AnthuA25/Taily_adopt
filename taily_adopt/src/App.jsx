import { Login } from "./components/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Register } from "./components/Register";
import { HomeAdop } from "./components/HomeAdop";
import { HomeRes } from "./components/HomeRes";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/adoptante" element={<HomeAdop />} />
          <Route path="/rescatista" element={<HomeRes />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
