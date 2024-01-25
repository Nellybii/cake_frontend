import { Col, Row } from "react-bootstrap";

function About() {
  return (
    <div className="container mt-5">
      <div className="about-us bg-light p-4 rounded">
        <h2 className="text-primary">About Us</h2>
        <Row>
          <Col>
            <h5>Our Story</h5>
            Welcome to SWeet caked – Where Sweet Dreams Come True! &#127874; Our
            Story: Since the beginning of the year, Sweet cakes has been
            dedicated to crafting exquisite and delightful confections that
            bring joy to every occasion. Our journey began with a passion for
            creating mouthwatering treats and sharing the love for baking with
            our community. What started as a humble kitchen endeavor has
            blossomed into a beloved bakery, creating memories one slice at a
            time..{" "}
          </Col>

          <Col>
            <Col>
              <h5> Our Mission</h5> : At Sweet cakes, our mission is simple – to
              elevate the art of baking and provide our customers with a
              delectable experience that lingers on their taste buds and in
              their hearts. We are guided by values of quality, creativity, and
              customer satisfaction. Every ingredient we use is carefully
              selected to ensure the highest standard of taste and freshness,
              reflecting our commitment to excellence.
            </Col>
            <p>
              <h5>Our Values:</h5> At sweet cakes, we value collaboration,
              innovation, and excellence. Our team consists of talented
              professionals who bring diverse skills and experiences to the
              table.
            </p>
          </Col>
        </Row>

        <div>
          <h3>Our Team</h3>
          <p>
            🧑&#128114; Meet Our Team: Behind every scrumptious creation at
            [Your Bakery Name] is a team of dedicated and passionate bakers. Our
            skilled professionals bring a wealth of expertise and creativity to
            the kitchen, ensuring that each cake, pastry, and treat is a
            masterpiece. Get to know the faces behind the aprons – the talented
            individuals who pour their heart and soul into making your sweet
            dreams come true.
          </p>
          <ul>
            <li>Brenda Kungu - CEO</li>
            <li>Nelly Chepkemoi - Manager</li>
            <li>James Ekasiba - Director</li>
            <li>Anthony Nchore - Marketing Director</li>
            <li>Dave Obat - Senior Developer</li>
            <li>Ian Gichane - Software Engineer</li>
          </ul>
          <p>
            Feel free to reach out to us at{" "}
            <a href="sweetcakes@gmail.com">sweetcakes@gmail.com</a> for
            inquiries or collaborations. We look forward to connecting with you!
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
