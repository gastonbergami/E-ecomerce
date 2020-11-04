import react from 'react';
import {Navbar,Nav,NavDropdown,Form,FormControl,Button} from 'react-bootstrap';
//import './Navbar.css';

const NavBar = () =>{
    return(
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">E-ecomerce</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Link</Nav.Link>
        <NavDropdown title="Productos" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Bicicletas</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Patines</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Productos Niños</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Accesorios</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
        
        
        
        
    )
}



export default NavBar;