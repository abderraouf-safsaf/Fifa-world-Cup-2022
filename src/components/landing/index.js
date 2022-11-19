import React,{useState , useEffect} from "react";

import cup from "./img/cup.svg";

function Landing({ players}) {
 
//  const  [classments , setClassments] = useState(classments1)

  const classments = players;
  console.log(classments)

  useEffect(() => {
    
   
  
    
  
  classments.sort((a, b) => (a.points < b.points ? 1 : -1))
  },[])
  




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
                        {classments.map((todo, index) => {
                          return (
                            <tr key={index}>
                              <td>{index+1}</td>
                              <td colSpan={2}>
                                <img
                                  className="flag-classment"
                                  src={require(`../players${todo.flag}`)}
                                  alt="flag"
                                />
                                {"-"} {classments[index].nom}
                              </td>
                              <td className="text-center fw-bolder">
                                {classments[index].points}
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

export default Landing;
