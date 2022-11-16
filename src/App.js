import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Landing from "./components/landing";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/footer";
import Player from "./components/players/player";

function App() {
  const data = require("./Database/Players.json");

  const players = data.joueurs;

  return (
    <BrowserRouter>
      <Navbar players={data.joueurs} />

      <Routes>
        <Route path="/Fifa-world-Cup-2022/" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/landing" element={<Landing />} />

        {players.map((todo, id) => {
          id = todo.id;
          return (
            <Route
              path={`/${todo.nom}`}
              element={
                <Player key={todo.id} nom={todo.nom} avatar={todo.avatar} flag={todo.flag} />
              }
            />
          );
        })}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
