import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Landing from "./components/landing";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

function App() {
  return (

    <BrowserRouter>
      <Navbar />
      <Home />
      <Routes>
        
      
      <Route path="/landing" element={<Landing />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;
