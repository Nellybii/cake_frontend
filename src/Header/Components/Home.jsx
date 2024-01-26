import { useState, useEffect } from "react";
import Cardbody from "../../Components/Cardbody";
import Karousel from "../../Components/Karousel";
import { BASE_URL } from "../../utils/Main";
// grid layout
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products
    fetch(`${BASE_URL}/products`)
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <Karousel />
      <div style={{ display: "flex" }}>
        <Container>
          <Row>
            {products.map((product) => (
              <Col key={product.id} md={4} sm={6} xs={12} className="p-3">
                <Cardbody product={product}/>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Home;
