import React from "react";
import logo from "./img/logo.svg";
import { Card, Button,Form } from "react-bootstrap";


function Home() {
  
  const data = require("../../Database/matches.json");
  const matches = data.matches;
  
  return (
    <div className="home container">
      <img src={logo} alt="logo" />

      <h2 className="m-4 text-center">
        Coupe du Monde de la FIFA, Qatar 2022™
      </h2>
      <h5>
        World Cup Champion est une application de paris sportif (Sur la coupe du
        monde seulment) : ne ratez aucun match de foot ! Consultez le programme
        ici.
      </h5>
      <h6>
        Match aujourd'hui. Retrouvez la liste de tous les matchs qui se jouent
        aujourd'hui sur cette page. Les rencontres sont classées par Groupe
      </h6>
      <div className="row mb-0 m-4">
        {
          matches.map((match, index) => {
           
            return (
            <Card className="card-match" key = {index}>
            <Card.Header>
              {match.group} <br />
              {match.stadium}Qatar
              <span className="card-date text-center">
                {match.date} <br /> {match.hours}
              </span>
            </Card.Header>
            <Card.Body className="row">
              <Card.Title className="col-4 text-center">
                {" "}
                <img
                  className="flag text-center"
                  src={require(`${match.image[0]}`)}
                  alt="flag"
                /> <br /> {match.team1}
              </Card.Title>
              <Card.Title className="col-4 text-center">
                {" "}
                    <p className="score">{ match.score[0]} : { match.score[1]}</p>{" "}
              </Card.Title>
              <Card.Title className="col-4 text-center">
                {" "}
                <img className="flag text-center" src={require(`${match.image[1]}`)} alt="flag" />
                <br /> {match.team2}{" "}
              </Card.Title>
  
             
            </Card.Body>
          </Card>)
             })

        }
        
       
      </div>
    </div>
  );
}

export default Home;
