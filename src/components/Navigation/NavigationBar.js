import React from 'react'
import Nav from 'react-bootstrap/Nav';
import {Navbar} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import {Form,NavDropdown} from 'react-bootstrap';
import { Container } from 'react-bootstrap';

function NavigationBar() {
  return (
    <div id="MasterContainer">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#/">React GoLang-NodeJS App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#/GoLangPage">GoLang Page</Nav.Link>
              <Nav.Link href="#/NodeJSPage">NodeJS Page</Nav.Link>
              <Nav.Link href="#/ExpressJSPage">Express JS Page</Nav.Link>
              <Nav.Link href="#/MongoDBExpressJSPage">MongoDB ExpressJS Page</Nav.Link>
              
              
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
             

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
        
    </div>
  )
}

export default NavigationBar