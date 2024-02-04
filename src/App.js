import React from "react";
import { Container, Nav,Navbar,NavDropdown,Card,Button} from 'react-bootstrap';

const App=()=>{
    
   return( 
   <>   {/*  react fragment */}

      <div > 

      {/* Navbar */}

      <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Dress up</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Contact</Nav.Link>
            <Nav.Link href="#link">About Us </Nav.Link>

            <NavDropdown title="Category" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Man</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">
                Women
                <NavDropdown.Divider />
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Baby</NavDropdown.Item>
              
              
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    {/* heading */}

    <h6 class="display-1">SUMMER COLLECTION</h6>
         
    {/* card 1 */}

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={process.env.PUBLIC_URL + '/photo2.webp'} />
      <Card.Body>
        <Card.Title>Red Dress</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">BUY</Button>
      </Card.Body>
    </Card>
   
   {/* card 2 */}

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={process.env.PUBLIC_URL + '/photo2.jpg'} />
      <Card.Body>
        <Card.Title>Beige Coat</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">BUY</Button>
      </Card.Body>
    </Card>
    
    {/* card 3*/}

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={process.env.PUBLIC_URL + '/photo.webp'} />
      <Card.Body>
        <Card.Title>Red Dress</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">BUY</Button>
      </Card.Body>
    </Card>
      </div>
    </>
    );
};

export default App;