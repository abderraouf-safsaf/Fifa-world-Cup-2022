import React from 'react'
import logo from './img/logo.svg'
import {Card , Button} from 'react-bootstrap';
function Home() {
  return (
    <div className='home container'>
      
      <img src={logo} alt="logo" />
      <h2 className='m-4' >Coupe du Monde de la FIFA, Qatar 2022™</h2>
      <div className="row m-4">
      <Card>
      <Card.Header as="h5">Featured</Card.Header>
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
      </div>
      
    </div>
  )
}

export default Home