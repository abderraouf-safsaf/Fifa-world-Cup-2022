import React from "react";
import logo from "./img/logo.svg";
import { Card, Button } from "react-bootstrap";
import qatar from "./img/flag/qatar.jpg";
import equador from "./img/flag/equador.jpg";
import angletairre from "./img/flag/angletairre.png";
import iran from "./img/flag/iran.png";
import senegal from "./img/flag/senegal.png";
import paysbas from "./img/flag/pays-bas.png";
import etatsunis from "./img/flag/etats-unis.png";
import paysdegalles from "./img/flag/pays de galles.png";
function Home() {
  return (
    <div className="home container">
       
      <img src={logo} alt="logo" />
      
     
      <h2 className="m-4 text-center">Coupe du Monde de la FIFA, Qatar 2022™</h2>
      <h5>World Cup Champion est une application de paris sportif (Sur la coupe du monde seulment) : ne ratez aucun match de foot  ! Consultez le programme ici.</h5>
      <h6>Match aujourd'hui. Retrouvez la liste de tous les matchs qui se jouent aujourd'hui sur cette page. Les rencontres sont classées par Groupe</h6>
      <div className="row mb-0 m-4">
        <Card className="card-match">
          <Card.Header>
            Groupe A <br />
            AL Bayt Stadium
            <span className="card-date text-center">
              20 nov.2022 <br /> 5:00 PM
            </span>
          </Card.Header>
          <Card.Body className="row">
            <Card.Title className="col-5 text-center">
              {" "}
              <img
                className="flag text-center"
                src={qatar}
                alt="flag"
              /> <br /> Qatar
            </Card.Title>
            <Card.Title className="col-2 text-center">
              {" "}
              <h5>- -</h5>{" "}
            </Card.Title>
            <Card.Title className="col-5 text-center">
              {" "}
              <img className="flag text-center" src={equador} alt="flag" />
              <br /> Equateur{" "}
            </Card.Title>

            <Button variant="primary">Validez le Resultat</Button>
          </Card.Body>
        </Card>
        <Card className="card-match">
          <Card.Header>
            Groupe B <br />
            Khalifa Stadium
            <span className="card-date text-center">
              21 nov.2022 <br /> 2:00 PM
            </span>
          </Card.Header>
          <Card.Body className="row">
            <Card.Title className="col-5 text-center">
              {" "}
              <img
                className="flag text-center"
                src={angletairre}
                alt="flag"
              />{" "}
              <br /> Angleterre
            </Card.Title>
            <Card.Title className="col-2 text-center">
              {" "}
              <h5>- -</h5>{" "}
            </Card.Title>
            <Card.Title className="col-5 text-center">
              {" "}
              <img className="flag text-center" src={iran} alt="flag" />
              <br /> Iran{" "}
            </Card.Title>

            <Button variant="primary">Validez le Resultat</Button>
          </Card.Body>
        </Card>
        <Card className="card-match">
          <Card.Header>
            Groupe A <br />
            AL Thumama Stadium
            <span className="card-date text-center">
              21 nov.2022 <br /> 5:00 PM
            </span>
          </Card.Header>
          <Card.Body className="row">
            <Card.Title className="col-5 text-center">
              {" "}
              <img
                className="flag text-center"
                src={senegal}
                alt="flag"
              />{" "}
              <br /> Sénégal
            </Card.Title>
            <Card.Title className="col-2 text-center">
              {" "}
              <h5>- -</h5>{" "}
            </Card.Title>
            <Card.Title className="col-5 text-center">
              {" "}
              <img className="flag text-center" src={paysbas} alt="flag" />
              <br /> Pays-Bas{" "}
            </Card.Title>

            <Button variant="primary">Validez le Resultat</Button>
          </Card.Body>
        </Card>
        <Card className="card-match">
          <Card.Header>
            Groupe A <br />
            AL Rayyan Stadium
            <span className="card-date text-center">
              21 nov.2022 <br /> 8:00 PM
            </span>
          </Card.Header>
          <Card.Body className="row">
            <Card.Title className="col-5 text-center">
              {" "}
              <img
                className="flag text-center"
                src={etatsunis}
                alt="flag"
              />{" "}
              <br /> Etats-Unis
            </Card.Title>
            <Card.Title className="col-2 text-center">
              {" "}
              <h5>- -</h5>{" "}
            </Card.Title>
            <Card.Title className="col-5 text-center">
              {" "}
              <img className="flag text-center" src={paysdegalles} alt="flag" />
              <br /> Pays de Galles{" "}
            </Card.Title>

            <Button variant="primary">Validez le Resultat</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Home;
