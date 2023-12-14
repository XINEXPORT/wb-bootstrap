import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { GiFruitBowl } from "react-icons/gi";
import { TiSpiral } from "react-icons/ti";
import { FaPeopleLine } from "react-icons/fa6";

const icons=[GiFruitBowl, TiSpiral, FaPeopleLine ];
const Icon = icons[idx];


function Value({ title, description, action }) {
  return (
    <Card className="shadow-sm h-100">
    <Card.Body className='p-4 d-flex flex-column'>
    <Card.Title>{title}</Card.Title>
    <Card.Text>{description} <TiSpiral /></Card.Text>
    <Button variant="success" className="mt-auto">{action}</Button>
    </Card.Body>
    </Card>
  );
}

export default function Values({ values }) {
  return (
    <Container fluid className="py-5">
      <Row>
      {values.map(({ title, description, action }, index) => (
        <Col key={title}>
        <Value key={index} title={title} description={description} action={action} />
        </Col>
      ))}
       </Row>
    </Container>
  );
}
