import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Classments from "./components/landing";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/footer";
import Player from "./components/players/player";

function App() {
  const data2 = require("./Database/Players.json");

  const players = data2.joueurs;
  const data = require("./Database/matches.json");
  const ReelMatche = data.matches;
  const classments = [...players];

  console.log(data2.joueurs, players, classments);

  useEffect(() => {
    for (let i = 0; i < players.length; i++) {
      for (let j = 0; j < ReelMatche.length; j++) {
        if (
          ReelMatche[j].score[0] === players[i].matches[j].score[0] &&
          ReelMatche[j].score[1] === players[i].matches[j].score[1]
        ) {
          players[i].points += 3;
        } else if (
          (ReelMatche[j].score[0] > ReelMatche[j].score[1] &&
            players[i].matches[j].score[0] > players[i].matches[j].score[1]) ||
          (ReelMatche[j].score[1] > ReelMatche[j].score[0] &&
            players[i].matches[j].score[1] > players[i].matches[j].score[0])
        ) {
          players[i].points += 1;
        }
      }
    }
    classments.sort((a, b) => (a.points < b.points ? 1 : -1));
  }, []);

  return (
    <BrowserRouter>
      <Navbar players={players} />

      <Routes>
        <Route path="/Fifa-world-Cup-2022/" element={<Home />} />
        <Route path="/" element={<Home />} />

        <Route
          path="/landing"
          element={<Classments classments={classments} />}
        />

        {players.map((player, index) => {
          return (
            <Route
              key={index}
              path={`/${player.nom}`}
              element={
                <Player
                  index={index}
                  players={players}
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
