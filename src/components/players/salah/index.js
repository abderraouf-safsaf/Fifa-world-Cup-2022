import React from "react";
import salah from "./img/salah.jpg";
import Badge from "react-bootstrap/Badge";
import flag from "./img/flag.png"
function Salah() {
  return (
    <div className="profil container pt-4 ">
      <div className="card container ">
        <div className="row">
          <div className="col-6">
          <img className="img-profil " src={salah} alt="salah" />
          </div>
          <div className="col-6">
            <img className="flag-profil" src={flag} alt="flag" />
            <h1 className="text-profil">Nouar Salah Eddine</h1>
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
                        <tr>
                          <td>Qatar - Equateur</td>
                          <td className="score text-center ">0 : 0</td>
                          <td>
                            20 nov <br /> 5:00PM{" "}
                          </td>
                          <td>
                            <Badge bg="success p-3">3 points</Badge>
                          </td>
                        </tr>
                        <tr>
                          <td>Angleterre - Iran</td>
                          <td className="score text-center ">5 : 1</td>
                          <td>
                            21 nov <br /> 2:00PM{" "}
                          </td>
                          <td>
                            <Badge bg="danger p-3">0 Points</Badge>
                          </td>
                        </tr>

                        <tr>
                          <td>Senegal - Pays-bas</td>
                          <td className="score text-center ">2 : 1</td>
                          <td>
                            21 nov <br /> 5:00PM{" "}
                          </td>
                          <td>
                            <Badge bg="warning p-3" text="dark">
                              1 point{" "}
                            </Badge>
                          </td>
                        </tr>
                        <tr>
                          <td>Etats-Unis - Pays de Galles</td>
                          <td className="score text-center ">0 : 0</td>
                          <td>
                            21 nov <br /> 8:00PM{" "}
                          </td>
                          <td>
                            <Badge bg="warning p-3" text="dark">
                              1 point
                            </Badge>
                          </td>
                        </tr>
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

export default Salah;
