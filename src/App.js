import React,{ useState} from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Landing from "./components/landing";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/footer";
import Player from "./components/players/player";

function App() {
  
  const data2 = require("./Database/Players.json");

  const players = data2.joueurs;
  const players2 = data2.joueurs;
  console.log(players)
  const [points, setPoints] = useState();
 

  return (
    <BrowserRouter>
      <Navbar players={players} />

      <Routes>
        <Route path="/Fifa-world-Cup-2022/" element={<Home />} />
        <Route path="/" element={<Home />} />

        <Route path="/landing" element={<Landing players={players} flag={players.flag} classment={points}
         
        />} />

        {players.map((player, index) => {
          
          
          return (
            <Route
              key={index}
              path={`/${player.nom}`}
              element={
                <Player
                  index = {index}
                  players={players}
                  classment={setPoints}
                  setClassment={setPoints}
                  nom={player.nom}
                  avatar={player.avatar}
                  flag={player.flag}
                  match={players[index].matches}
                />
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
