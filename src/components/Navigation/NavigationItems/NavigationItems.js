import React from 'react'; 
import classes from './NavigationItems.module.scss'
import NavigationItem from './NavigationItem/NavigationItem';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';

const navigationItems = () => (

    <Navbar expand="lg">
    <Container>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
            <Nav.Link><NavigationItem link='/' className={classes.link} >Home</NavigationItem></Nav.Link>
            <Nav.Link><NavigationItem link='/imorganizer' className={classes.link}>I'm an organizer</NavigationItem></Nav.Link>
          <NavDropdown title="My Account" id="basic-nav-dropdown">
            <NavDropdown.Item href="/login"><NavigationItem link='/login'>Login</NavigationItem></NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
     {/*<ul className={classes.NavigationItems}>
     <NavigationItem link='/'>Home</NavigationItem>
     <NavigationItem link='/imorganizer'>I'm an organizer</NavigationItem>
     <NavigationItem link='/login'>MyAccount</NavigationItem>
    </ul>*/}
  </Navbar>
   
  
    
)

export default navigationItems;