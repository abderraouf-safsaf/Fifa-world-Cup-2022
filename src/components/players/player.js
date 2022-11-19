import React, { useEffect, useState } from "react";
import Badge from "react-bootstrap/Badge";

function Player({ nom, avatar, flag, match, players, index }) {
  const data = require("../../Database/matches.json");
  const ReelMatche = data.matches;

  function addPoints(RTeam1, PTeam1) {
    if (RTeam1[0] !== null) {
      if (RTeam1[0] === PTeam1[0] && RTeam1[1] === PTeam1[1]) {
        return <Badge bg="success p-3">3 points</Badge>;
      } else if (
        (RTeam1[0] > RTeam1[1] && PTeam1[0] > PTeam1[1]) ||
        (RTeam1[1] > RTeam1[0] && PTeam1[1] > PTeam1[0])
      ) {
        return <Badge bg="warning p-3">1 points</Badge>;
      } else {
        return <Badge bg="danger p-3">0 points</Badge>;
      }
    } else {
      return (
        <Badge bg="light" text="dark">
          -------------
        </Badge>
      );
    }
  }

  return (
    <div className="profil container pt-4 ">
      <div className="card container ">
        <div className="row">
          <div className="col-6">
            <img
              className="img-profil"
              src={require(`${avatar}`)}
              alt="salah"
            />
          </div>
          <div className="col-6">
            <img className="flag-profil" src={require(`.${flag}`)} alt="flag" />
            <h1 className="text-profil">{nom}</h1>
            <hr />
            <h1 className="text-center text-primary fw-bold">
              {players[index].points} Points
            </h1>
          </div>
        </div>
      </div>

      {/* ****** statistique ****** */}

      <div className="page-content page-container" id="page-content">
        <div className="padding">
          <div className="row container d-flex justify-content-center">
            <div className="col-lg-8 m-4 stretch-card">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title mb-4  ">Statistiques</h4>

                  <div className="table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                          <th>Match</th>
                          <th>Score</th>
                          <th>Dates</th>
                          <th>Resultats</th>
                        </tr>
                      </thead>
                      <tbody>
                        {match.map((match, index) => {
                          return (
                            <tr key={index}>
                              <td>
                                {match.team1} - {match.team2}
                              </td>
                              <td className="score text-center ">
                                {match.score[0]} : {match.score[1]}
                              </td>
                              <td>
                                {match.date} <br /> {match.hours}{" "}
                              </td>
                              <td>
                                {addPoints(
                                  ReelMatche[index].score,
                                  match.score
                                )}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Player;
