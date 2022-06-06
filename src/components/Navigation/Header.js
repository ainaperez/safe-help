import React from 'react'; 
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import { useContext } from "react";
import AuthContext from "../../AuthContext";
import { logout } from '../../firebase';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo from '../../assets/images/Logo-color.png';

const Header = () => {
  const { user } = useContext(AuthContext);
  
  const handleLogout = async () => {
    await logout();
    if(window.locations !== '/'){
      window.location = '/';
    }
   
    };

  let authMenu = (<Nav.Link href='/login'><i className='bi bi-person-circle'></i></Nav.Link>)
  
  if (user) {
    authMenu = (<NavDropdown title='My Account' id='basic-nav-dropdown'>
                  <NavDropdown.Item href='/dashboard'>My Dashboard</NavDropdown.Item>
                  <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
                </NavDropdown>);
  }

return ( 

    
      <Navbar key='lg' expand='lg' className='header'>
    <Container fluid>
    <Navbar.Brand href='/'><div>
              <img src={logo} className='logo' alt='SafeHelp logo'></img>
              <p>Matching donations with collection points</p>
          </div></Navbar.Brand>
    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`}><div className='burgerLine'></div>
    <div className='burgerLine'></div>
    <div className='burgerLine'></div></Navbar.Toggle>
  
    <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-lg`}
            aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
            placement="end"
          >
            <Offcanvas.Header closeButton>

            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className='justify-content-end flex-grow-1 pe-3'>
                <Nav.Link href='/'>Home</Nav.Link>
                <Nav.Link className='text-center' href='/imorganizer'>For organizers</Nav.Link>
                {authMenu}
              
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
    </Container>
  </Navbar>
)
}

export default Header;