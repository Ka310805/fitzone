import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Cabecalho() {
  return (
    <>
     
      <Navbar bg="info" variant="info">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src="logo.png"
              width="60"
              height="60"
            />{' '}
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default Cabecalho;