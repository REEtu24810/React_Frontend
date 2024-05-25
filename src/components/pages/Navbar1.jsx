import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "../../assets/logo.png";
import "./Navbar1.css"
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button
} from 'reactstrap';

const Navbar1 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color="light" light expand="md" className='navbar'>
      <NavbarBrand href="/">
        <img src={logo} alt="Logo"  style={{ width: '300px' }}/>
      </NavbarBrand>
      
      <NavbarToggler onClick={toggle} style={{ borderColor: 'orange', backgroundColor: 'orange' }}>
  <span className="navbar-toggler-icon" style={{ color: 'white' }}></span>
</NavbarToggler>
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto navbar" style={{color:"orange"}} navbar>
          <NavItem>
            <NavLink href="#" className="nav-links">Home</NavLink>
          </NavItem>
          <UncontrolledDropdown nav inNavbar className="nav-links">
            <DropdownToggle nav caret className="nav-links">
              Career
            </DropdownToggle>
            <DropdownMenu right className="nav-droupdown" style={{backgroundColor:"black"}}>
              <DropdownItem href="#" className="nav-roupdown-text" style={{color:"white"}}>Career Opportunities</DropdownItem>
              <DropdownItem href="#" style={{color:"white"}}>Campus Ambassador</DropdownItem>
              <DropdownItem href="#" style={{color:"white"}}>Internship</DropdownItem>
              <DropdownItem href="#" style={{color:"white"}}>Vocational Training</DropdownItem>
              <DropdownItem href="#" style={{color:"white"}}>Business Support Executives</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <NavItem>
            <NavLink href="#" className="nav-links">Our Products</NavLink>
          </NavItem>
          <UncontrolledDropdown nav inNavbar className="nav-links">
            <DropdownToggle nav caret className="nav-links">
              Our Services
            </DropdownToggle>
            <DropdownMenu right className="nav-droupdown" style={{backgroundColor:"black"}}>
              <DropdownItem href="#" style={{color:"white"}}>Website Development</DropdownItem>
              <DropdownItem href="#"style={{color:"white"}}>Website Maintenance</DropdownItem>
              <DropdownItem href="#"style={{color:"white"}}>E-Commerce Development</DropdownItem>
              <DropdownItem href="#" style={{color:"white"}}>Software Development</DropdownItem>
              <DropdownItem href="#" style={{color:"white"}}>Android App Development</DropdownItem>
              <DropdownItem href="#" style={{color:"white"}}>Digital Marketing</DropdownItem>
              <DropdownItem href="#" style={{color:"white"}}>Social Media Marketing</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret className="nav-links">
              Internship
            </DropdownToggle>
            <DropdownMenu right className="nav-droupdown" style={{ backgroundColor: 'black'}}>
              <DropdownItem href="#"style={{color:"white"}}>Full-Stack Development (React.js)</DropdownItem>
              <DropdownItem href="#"style={{color:"white"}}>Front-End Web Development</DropdownItem>
              <DropdownItem href="#"style={{color:"white"}}>Back-End Web Development</DropdownItem>
              <DropdownItem href="#"style={{color:"white"}}>Learn CodeIgniter Framework</DropdownItem>
              <DropdownItem href="#"style={{color:"white"}}>Master in Laravel</DropdownItem>
              <DropdownItem href="#"style={{color:"white"}}>Android App Development</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <NavItem>
            <NavLink href="#" className="nav-links">Workshops</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#" className="nav-links">Contact Us</NavLink>
          </NavItem>
        </Nav>
        <Button className="btn">Start Project</Button>
      </Collapse>
    </Navbar>
  );
};

export default Navbar1;
