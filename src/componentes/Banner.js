import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Banner01 from '../imagens/Banner-01.jpg';
import Banner002 from '../imagens/Banner-002.jpg';
import Banner003 from '../imagens/Banner-003.png';



function Banner() {
  return (
    <Carousel>
      <Carousel.Item className="Banner">
        <img src={Banner01}/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="Banner">
        <img src={Banner002}/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="Banner">
      <img src={Banner003}/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    
  );
}

export default Banner;