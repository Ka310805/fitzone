import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';

function GroupExample() {
  return (
    <CardGroup>
      <Card>
        <Card.Img variant="top" src="produto1.jpg" />
        <Card.Body>
          <Card.Title>Anilhas</Card.Title>
          <Card.Text>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto impedit voluptates officia animi labore temporibus maiores nam voluptatem facere corrupti, placeat, amet eius sed fugiat! Sequi totam neque in! Natus! 
          </Card.Text>
          
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Sem data de validade</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="produto2.jpg" />
        <Card.Body>
          <Card.Title>Kit Whay</Card.Title>
          <Card.Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quo vero nostrum ipsum quas, consequuntur inventore aspernatur possimus, corporis voluptatem nihil iure, non eligendi tempora repellendus maiores dicta dolores consequatur?{' '}
          </Card.Text>
          
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Validade de 10 meses</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="produto3.jpg" />
        <Card.Body>
          <Card.Title>Bola Eslastica</Card.Title>
          <Card.Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque modi eligendi quo facilis omnis incidunt, veniam autem vero totam quia. Omnis deleniti architecto, asperiores ad voluptatibus minus fugit? Asperiores, excepturi?
          </Card.Text>
         
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Sem data de validade</small>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
}

export default GroupExample;