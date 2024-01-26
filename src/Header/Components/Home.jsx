import React, { useState, useEffect } from "react";
import Cardbody from "../../Components/Cardbody";
import Karousel from "../../Components/Karousel";
import { BASE_URL } from "../../utils/Main";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Home() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${BASE_URL}/products`);
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <Karousel />
      <div style={{ display: "flex" }}>
        <Container>
          <Row>
            {products.map((product) => (
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
