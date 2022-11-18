import React,{useState , useEffect} from 'react'
import Player from './players/player'
import Badge from "react-bootstrap/Badge";

function HOComponent() {

  const data = require("../../Database/matches.json");
  const ReelMatche = data.matches;
  const [points, setPoints] = useState();
  let count = 0;
  players[index].points = points;
  
  useEffect(() => {
    
    setPoints(count);
    classment(count)
  });

  function addPoints(RTeam1, PTeam1) {
    if (RTeam1[0] !== null) {
      if (RTeam1[0] === PTeam1[0] && RTeam1[1] === PTeam1[1]) {
        count = count + 3;
          
        return <Badge bg="success p-3">3 points</Badge>;
      } else if (
        (RTeam1[0] > RTeam1[1] && PTeam1[0] > PTeam1[1]) ||
        (RTeam1[1] > RTeam1[0] && PTeam1[1] > PTeam1[0])
      ) {
        count = count + 1;
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
    <div>
      <Player ReelMatche={ ReelMatche} addPoints={addPoints} points={points} />
    </div>
  )
}

export default HOComponent