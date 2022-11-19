import React,{useState,useEffect} from "react";
import logo from "./img/logo.svg";
import { Form, Card, Button } from "react-bootstrap";

function Home({matches,ReelMatche,players,classments}) {
  

  const [addScore1, setAddScore1] = useState("")
  const [addScore2, setAddScore2] = useState("")
 

  useEffect(() => {
    if (ReelMatche[0] !== null) {
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
    }
    
    console.log(ReelMatche)
  });
  
 
  const verifier = (matches) => {
    const handleSubmit = (e) => {
      e.preventDefault();
  
      
      
      
      matches.score= [+addScore1 , +addScore2]
      
      
      setAddScore1('');
      setAddScore2('');
      
    }
    if (matches.score[0] === null) {
      
    return ( <Form onSubmit={handleSubmit} className="text-center">
      <Form.Group className="mb-3">
      
        <Form.Control type="text" value={addScore1} placeholder={matches.team1} onChange={(e)=>{setAddScore1(e.target.value)} }  />
      
      </Form.Group>

      <Form.Group className="mb-3">
      
        <Form.Control type="text" value={addScore2} placeholder={matches.team2} onChange={(e)=>{setAddScore2(e.target.value)} } />
      </Form.Group>
    
      <Button variant="primary" type="submit">
        Validez le Score
      </Button>
    </Form>)
    }
  }
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
        {matches.map((match, index) => {
          return (
            <Card className="card-match" key={index}>
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
                  />{" "}
                  <br /> {match.team1}
                </Card.Title>
                <Card.Title className="col-4 text-center">
                  {" "}
                  <p className="score">
                    {match.score[0]} : {match.score[1]}
                  </p>{" "}
                </Card.Title>
                <Card.Title className="col-4 text-center">
                  {" "}
                  <img
                    className="flag text-center"
                    src={require(`${match.image[1]}`)}
                    alt="flag"
                  />
                  <br /> {match.team2}{" "}
                </Card.Title>
                <hr />


                {verifier(match)}
                

              </Card.Body>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
