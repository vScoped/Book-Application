import { Outlet, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Layout = () => {
  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Link className="navbar-brand" to="/">
            Home
          </Link>
          <Nav className="me-auto">
            <Link className="nav-link" to="/search">
              Search
            </Link>

            <Link className="nav-link" to="/your-books">
              Your Books
            </Link>
            <Link className="nav-link" to="/sign-up">
              SignUp
            </Link>
          </Nav>
        </Container>
      </Navbar>

      <Outlet />
    </>
  );
};

export default Layout;
