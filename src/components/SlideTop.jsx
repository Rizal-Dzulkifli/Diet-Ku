import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Slide1 from '../assets/slide1.png';
import Slide2 from '../assets/slide2.png';
import Slide3 from '../assets/slide3.png';

function UncontrolledExample() {
  const slideStyle = {
    height: '450px',
     // Atur tinggi slide di sini
  
    objectFit: 'contain',
     // Menjaga aspek rasio gambar
  };
  const captionStyle = {
    color: '#2BB72F' // Mengubah warna teks caption menjadi #2BB72F
  };

  return (
    <div style={{ padding: '30px', backgroundColor: '#4AB6C5' }}>
      <Carousel>
        <Carousel.Item interval={3000}>
          <img className="d-block w-100" src={Slide1} alt="First slide" style={slideStyle} />
          <Carousel.Caption style={captionStyle}>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <img className="d-block w-100" src={Slide2} alt="Second slide" style={slideStyle} />
          <Carousel.Caption style={captionStyle}>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item > 
          <img className="d-block w-100" src={Slide3} alt="Third slide" style={slideStyle} />
          <Carousel.Caption style={captionStyle}>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default UncontrolledExample;
