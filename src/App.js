import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Landing from "./components/landing";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/footer";
import Salah from "./components/players/salah";
import Bilal from "./components/players/bilal";
import Djamel from "./components/players/djamel";

function App() {
  return (

    <BrowserRouter>
      <Navbar />
      
      
      <Routes>
        
      <Route path="/Fifa-world-Cup-2022" element={<Home />} />
      <Route path="/" element={<Home />} />
      <Route path="/landing" element={<Landing />} />
      <Route path="/djamel" element={<Djamel />} />
      <Route path="/bilal" element={<Bilal />} />
      <Route path="/salah" element={<Salah />} />

      </Routes>
    <Footer />
    </BrowserRouter>
  );
}

export default App;
