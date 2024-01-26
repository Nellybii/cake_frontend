import { useState, useEffect } from "react";
import Cardbody from "../../Components/CardBody"
import Karousel from "../../Components/Karousel";
// grid layout
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



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
      <div style={{ display: 'flex',}}>
      
      <Container>
      <Row >
        <Col  md={4} sm={6} xs={12} className="p-3"><Cardbody /></Col>
        <Col  md={4} sm={6} xs={12} className="p-3"><Cardbody /></Col>
        <Col  md={4} sm={6} xs={12} className="p-3"><Cardbody /></Col>
        <Col  md={4} sm={6} xs={12} className="p-3"><Cardbody /></Col>
        <Col  md={4} sm={6} xs={12} className="p-3"><Cardbody /></Col>
        <Col  md={4} sm={6} xs={12} className="p-3"><Cardbody /></Col>
        <Col  md={4} sm={6} xs={12} className="p-3"><Cardbody /></Col>
        <Col  md={4} sm={6} xs={12} className="p-3"><Cardbody /></Col>
        <Col  md={4} sm={6} xs={12} className="p-3"><Cardbody /></Col>
        <Col  md={4} sm={6} xs={12} className="p-3"><Cardbody /></Col>
        <Col  md={4} sm={6} xs={12} className="p-3"><Cardbody /></Col>
        <Col  md={4} sm={6} xs={12} className="p-3"><Cardbody /></Col>
  
   
      </Row>
    </Container>
      </div>
    </>
  )
}

export default Home