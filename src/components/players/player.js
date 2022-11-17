import React from "react";
import Badge from "react-bootstrap/Badge";

function Player({  nom, avatar ,flag ,match }) {

  const data = require("../../Database/matches.json");
  const ReelMatche = data.matches;

   
 
  console.log(ReelMatche)
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
            <img className="flag-profil" src={require(`${flag}`)} alt="flag" />
            <h1 className="text-profil">{nom}</h1>
            <hr />
            <h1 className="text-center text-primary fw-bold">0 Points</h1>
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
                        {
                          match.map((todo, index) => {
                            return (
                              <tr key = {index}>
                              <td>{todo.team1} - {todo.team2}</td>
                              <td className="score text-center ">{todo.score[0]} : {todo.score[1]}</td>
                              <td>
                                {todo.date} <br /> {todo.hours}{" "}
                              </td>
                                <td>
                                  {
                                    JSON.stringify(todo.score) === JSON.stringify(ReelMatche[index].score) &&
                                    <Badge bg="success p-3">3 points</Badge>
                                  }
                                  {
                                    JSON.stringify(todo.score) !== JSON.stringify(ReelMatche[index].score) &&
                                    <Badge bg="danger p-3">0 points</Badge>
                                  }
                                  
                                  
                                
                              </td>
                            </tr>
                            )
                          })
                        }
                       
                       
                        
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
