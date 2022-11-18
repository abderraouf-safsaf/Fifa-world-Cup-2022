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
  const data = require("./Database/matches.json");
  const ReelMatche = data.matches;
 const [points, setPoints] = useState(0);
 
 
 console.log( );
   
  function addClassment() {
    for (let i = 0; i < players.length; i++) {
      for (let j = 0; j < players[0].matches.length; j++) {

        if (ReelMatche[i].score !== null) {
          if (ReelMatche[j].score[0] === players[i].matches[j].score[0] && ReelMatche[j].score[1] === players[i].matches[j].score[1]) {
            
            
           setPoints(points +3)
          return  
          
          
        } else if (
          (ReelMatche[j].score[0] > ReelMatche[j].score[1] && players[i].matches[j].score[0] > players[i].matches[j].score[1]) ||
          (ReelMatche[j].score[1] > ReelMatche[j].score[0] && players[i].matches[j].score[1] > players[i].matches[j].score[0])
          ) {
            
            setPoints(points +1)
            return 
          } 
        }
      }
      } 
      }
      
      

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
                  setClassment={setPoints}
                  classment={points}
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
