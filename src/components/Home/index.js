import React from 'react'
import logo from './img/logo.svg'
import { Card, Button } from 'react-bootstrap';
import qatar from './img/flag/qatar.jpg'
import equador from './img/flag/equador.jpg'
function Home() {
  return (
    <div className='home container'>
      
      <img src={logo} alt="logo" />
      <h2 className='m-4' >Coupe du Monde de la FIFA, Qatar 2022™</h2>
      <div className="row m-4">
      <Card>
          <Card.Header >
            Groupe A <br />
            AL Bayt Stadium
            <span className='card-date'>20 nov.2022</span>
          </Card.Header>
      <Card.Body className='row'>
        <Card.Title className='col-3 text-center'> <img className='flag' src={qatar} alt="flag" /> Qatar</Card.Title>
        <Card.Title className='col-6 text-center'> <h5>-   -</h5> </Card.Title>
        <Card.Title className='col-3 text-md-center'> <img className='flag' src={equador} alt="flag" />Equateur </Card.Title>
       
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
      </div>
      
    </div>
  )
}

export default Home