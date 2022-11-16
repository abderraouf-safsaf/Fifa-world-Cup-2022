import React from "react";
import france from "./img/flag/france.png";
import argentine from "./img/flag/argentine.png";
import portugal from "./img/flag/portugal.png";
import cup from "./img/cup.svg";

function Landing() {
  return (
    <div className="profil">
      <img className="cup-svg" src={cup} alt="" />
      <div className="page-content page-container" id="page-content">
        <h5>
          Ce classement prend en compte les joueurs ayant marqué plus de points
          sur cette compétition.
        </h5>
        <hr />
        <h6 className="p-0">
          Résultat identique :(3 Points) <br />
          Equipe gagnante :(1 Points)
        </h6>
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
                          <th>POS.</th>
                          <th colSpan={2}>Nom</th>
                          <th>Pts</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td colSpan={2}>
                            <img
                              className="flag-classment"
                              src={france}
                              alt="flag"
                            />
                            {"-"} Dahmani Djamel
                          </td>
                          <td className="text-center fw-bolder">60</td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td colSpan={2}>
                            <img
                              className="flag-classment"
                              src={argentine}
                              alt="flag"
                            />
                            {"-"} Nouar Salah Eddine
                          </td>
                          <td className="text-center fw-bolder">45</td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td colSpan={2}>
                            <img
                              className="flag-classment"
                              src={portugal}
                              alt="flag"
                            />
                            {"-"} Bouchakouri Bilal
                          </td>
                          <td className="text-center fw-bolder">0</td>
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

export default Landing;
