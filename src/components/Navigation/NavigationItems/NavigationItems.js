import React from 'react'; 
import classes from './NavigationItems.module.scss'
import NavigationItem from './NavigationItem/NavigationItem';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Button from '@mui/material/Button';
import { useContext } from "react";
import AuthContext from "../../../AuthContext";
import { logout } from '../../../firebase';

const NavigationItems = () => {
  const { user } = useContext(AuthContext);
  const handleLogout = async () => {
    await logout();
    };

  let authMenu = (<Nav.Link><NavigationItem link='/login' className={classes.link}>Sign In</NavigationItem></Nav.Link>)
  
  if (user) {
    authMenu = (<NavDropdown title="My Account" id="basic-nav-dropdown">
                <NavDropdown.Item><NavigationItem link='/dashboard'>My Dashboard</NavigationItem></NavDropdown.Item>
                  <NavDropdown.Item><Button color='error' onClick={handleLogout}>Logout</Button></NavDropdown.Item>
                </NavDropdown>);
  }
    
return ( 

    <Navbar expand="lg">
    <Container>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
            <Nav.Link><NavigationItem link='/' className={classes.link} >Home</NavigationItem></Nav.Link>
            <Nav.Link><NavigationItem link='/imorganizer' className={classes.link}>I'm an organizer</NavigationItem></Nav.Link>
            {authMenu}
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
   
)
  
    
  }

export default NavigationItems;