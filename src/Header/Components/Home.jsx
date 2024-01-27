import Cardbody from "../../Components/Cardbody";
import Karousel from "../../Components/Karousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Home({ filteredProducts }) {
  return (
    <>
      <Karousel />
      <div style={{ display: "flex" }}>
        <Container>
          <Row>
            {filteredProducts.map((product) => (
              <Col key={product.id} md={4} sm={6} xs={12} className="p-3">
                <Cardbody product={product} />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Home;
