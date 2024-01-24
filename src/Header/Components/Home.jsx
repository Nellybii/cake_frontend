import Cardbody from "../../Components/CardBody"
import Karousel from "../../Components/Karousel";
// grid layout
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



function Home() {
  return (
    <>

    <Karousel />
      <div style={{ display: 'flex',}}>
      
      <Container>
      <Row>
        <Col xs><Cardbody /></Col>
        <Col xs><Cardbody /></Col>
        <Col xs><Cardbody /></Col>
        <Col xs><Cardbody /></Col>
        <Col xs><Cardbody /></Col>
        <Col xs><Cardbody /></Col>
        <Col xs><Cardbody /></Col>
        <Col xs><Cardbody /></Col>
   
      </Row>
    </Container>
      </div>
    </>
  )
}

export default Home