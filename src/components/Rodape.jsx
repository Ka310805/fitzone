import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../App.css'

function rodape() {
  return (
    <>
      <Navbar bg="info" variant="info">
        <Container>
          <Nav className="ms-auto">
          <img
              src="/public/facebook.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
            <img
              src="/public/instagram.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
            <img
              src="/public/linkedin.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
            <img
              src="/public/twitter.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default rodape;