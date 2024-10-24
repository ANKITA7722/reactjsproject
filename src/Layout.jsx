import { Link, Outlet } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Layout = () => {
  return (
    <>
      <Navbar
        bg="dark"
        variant="dark"
        expand="lg"
        style={{
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)', 
          padding: '10px 0' 
        }}
      >
        <Container>
          <Navbar.Brand
           href="#home"
            style={{
              color: '#E0FFFF', 
              fontSize: '1.5rem',
              fontWeight: 'bold'
            }}
          >
            STUDENT DATABASE MANAGMENT
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto" style={{ gap: '15px' }}>

              <Nav.Link as={Link} to="home" style={navLinkStyle}
                onMouseEnter={handleHover} onMouseLeave={handleLeave} > Home</Nav.Link>

              <Nav.Link as={Link} to="insert"style={navLinkStyle}
                onMouseEnter={handleHover} onMouseLeave={handleLeave} >Insert</Nav.Link>
 
              <Nav.Link  as={Link} to="display" style={navLinkStyle}
                onMouseEnter={handleHover} onMouseLeave={handleLeave}>Display </Nav.Link>

              <Nav.Link as={Link} to="search" style={navLinkStyle}
                onMouseEnter={handleHover} onMouseLeave={handleLeave}>Search</Nav.Link>

              <Nav.Link as={Link} to="searchbyname"style={navLinkStyle} 
              onMouseEnter={handleHover} onMouseLeave={handleLeave}> Search By Name</Nav.Link>

              <Nav.Link as={Link} to="update" style={navLinkStyle}
                onMouseEnter={handleHover} onMouseLeave={handleLeave}> Update</Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <hr size="4" color="red" />
      <Outlet />
      <hr size="4" color="red" />
    </>
  );
};

export default Layout;


const navLinkStyle = {
  color: '#fff', 
  fontSize: '1.1rem',
  fontWeight: '500',
  textDecoration: 'none',
  transition: 'color 0.3s ease',
};

const handleHover = (e) => {
  e.target.style.color = '#FFD700';
};

const handleLeave = (e) => {
  e.target.style.color = '#fff'; 
};
