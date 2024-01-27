import Cardbody from "../../Components/Cardbody";
import Karousel from "../../Components/Karousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Home({ filteredProducts }) {
  return (
    <>
      <Karousel />
      
        <Container>
          <Row>
            {filteredProducts.map((product) => (
              <Col key={product.id} >
                <Cardbody product={product} />
              </Col>
            ))}
          </Row>
        </Container>
      
    </>
  );
}

export default Home;
