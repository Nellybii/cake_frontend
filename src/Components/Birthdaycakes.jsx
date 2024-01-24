import React from "react";
import { Card, Row, Button } from "react-bootstrap";
import cakes from "./data";

function Birthdaycakes() {

    console.log(cakes)
  return (
    <div>
      <Row>
        {Array.isArray(cakes) && cakes.map((cake, index) => (

          <Card key={cake.id}>
            <Card.Img
              variant="top"
              src="src/utils/cake.avif"
              style={{
                width: "100%",
                height: "30vh",
                objectFit: "contain",
              }}
            />
            <Card.Body>
              <Card.Title>{cake.name}</Card.Title>
              <Card.Text>{cake.category}</Card.Text>
              <Button variant="dark" size="sm" className=" rounded-pill ">
                Buy now
              </Button>
            </Card.Body>
          </Card>
        ))}
      </Row>
    </div>
  );
}

export default Birthdaycakes;
