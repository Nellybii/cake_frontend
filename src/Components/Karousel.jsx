import React from 'react'
import { Carousel, Image } from "react-bootstrap";

function Karousel() {
  return (
    <div>
      <Carousel style={{height:"600px", marginBottom:"10px"}}>
      <Carousel.Item>
        <Image style={{height:"600px", width:"100%"}}
          src="https://img.freepik.com/free-photo/ai-generated-cake-picture_23-2150649403.jpg?t=st=1706008514~exp=1706012114~hmac=b5c6ad53b9b13940c194550f07b9f8af96a60de985fca8128f28644a0c24fcdc&w=826"
          fluid
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Image style={{height:"600px", width:"100%"}}
          src="https://img.freepik.com/free-photo/ai-generated-cake-picture_23-2150649403.jpg?t=st=1706008514~exp=1706012114~hmac=b5c6ad53b9b13940c194550f07b9f8af96a60de985fca8128f28644a0c24fcdc&w=826"
          fluid
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Image style={{height:"600px", width:"100%"}}
          src="https://img.freepik.com/free-photo/ai-generated-cake-picture_23-2150649403.jpg?t=st=1706008514~exp=1706012114~hmac=b5c6ad53b9b13940c194550f07b9f8af96a60de985fca8128f28644a0c24fcdc&w=826"
          fluid
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>  
    </div>
  )
}

export default Karousel