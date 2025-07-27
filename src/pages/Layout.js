import { Outlet, Link } from "react-router-dom";

// bootstrap imports
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const Layout = () => {
  return (
    <>
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Link className="navbar-brand" to="home">Home</Link>
          <Nav className="me-auto">
            <Link className="nav-link" to="movies">Movies</Link>
            <Link className="nav-link" to="tv">TV</Link>
            <Link className="nav-link" to="books">Books</Link>
            <Link className="nav-link" to="music">Music</Link>
          </Nav>
        </Container>
      </Navbar>
      
      <Outlet />
    </>
  )
};

export default Layout;