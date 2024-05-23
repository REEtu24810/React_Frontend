import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/logo.png';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import './Navbar1.css'; // Import custom CSS file for additional styling

function Navbar1() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary custom-navbar" style={{ height: '100px', padding: '20px 0' }}>
      <Container>
      <Navbar.Brand href="#home">
          <img src={logo} alt="Logo" style={{ width: '100px', height: '80px' }} className='nav__right'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto ">
            <Nav.Link href="#features">Home</Nav.Link>
            
            <NavDropdown title="Careers" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Careers</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Careers Opportunities</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Campus Ambassador</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Internships</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Business Support Executives</NavDropdown.Item>
            </NavDropdown>
            
            <Nav.Link href="#pricing">Our Products</Nav.Link>
            <NavDropdown title="Our Services" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Our Services</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Website Development</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3"></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Website maintenance</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">E-commerce development</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Software Development</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Software Maintenance</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Android App Development</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Digital Marketing</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Social Media Marketing</NavDropdown.Item>
            </NavDropdown>
            
            <NavDropdown title="Courses" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Courses</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Vocational Training</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Full-Stack Development</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Back-End Web Development</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Learn CodeIgniter Framework</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Master in Laravel</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Android App Development</NavDropdown.Item>
            </NavDropdown>
            
            <Nav.Link href="#pricing">Workshop</Nav.Link>
            <Nav.Link href="#pricing">Contact Us</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">Dank memes</Nav.Link>
            <Button variant="primary" href="#start-project" className="ms-3">Start a Project</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbar1;