import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Salad from '../assets/salad.png';
import Ramen from '../assets/ramen.png';

function BasicExample() {
  return (
    <div>
      <Card style={{ display: 'flex', flexDirection: 'row', padding: '70px',borderRadius: '0px' }}>
        <div style={{ width: '300px', height: 'auto', marginRight: '50px' }}>
          <Card.Img style={{ borderRadius: '10px' }} variant="top" src={Salad} />
        </div>

        <div style={{ flex: 1 }}>
          <Card.Body>
            <Card.Title><h1><b>SALAD SAYUR</b></h1></Card.Title>
            <Card.Text>

              Salad sayur bukan sekadar lauk sampingan;
              mereka adalah kanvas kuliner yang penuh warna,
              rasa, dan nutrisi. Dari sayuran hijau yang segar
              hingga sayuran renyah, dunia salad menawarkan
              kemungkinan tanpa batas untuk kreativitas dan
              nutrisi. Mari kita telusuri seni menciptakan salad
              sayur yang lezat dan bergizi, yang akan memikat
              lidah dan menyehatkan tubuh Anda.

            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </div>
      </Card>

      <Card style={{ display: 'flex', flexDirection: 'row', padding: '70px',borderRadius: '0px' }}>
        <div style={{ flex: 1 }}>
          <Card.Body>
            <Card.Title><h1><b>RAMEN</b></h1></Card.Title>
            <Card.Text>
              Ramen, hidangan khas Jepang yang penuh cita
              rasa, telah menjadi favorit di seluruh dunia.
              Namun, seringkali citarasa yang nikmat ini
              diimbangi oleh kekhawatiran akan dampak buruk
              bagi kesehatan. Meskipun demikian, dengan
              sedikit kreativitas dan pengetahuan, Anda bisa
              menikmati ramen dengan santai tanpa merugikan
              kesehatan Anda.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </div>
        <div style={{ width: '300px', height: 'auto', marginLeft: '50px' }}>
          <Card.Img style={{ borderRadius: '10px' }} variant="top" src={Ramen} />
        </div>
      </Card>
      <Card style={{ display: 'flex', flexDirection: 'row', padding: '70px',borderRadius: '0px' }}>
        <div style={{ width: '300px', height: 'auto', marginRight: '50px' }}>
          <Card.Img style={{ borderRadius: '10px' }} variant="top" src={Salad} />
        </div>

        <div style={{ flex: 1 }}>
          <Card.Body>
            <Card.Title><h1><b>SALAD SAYUR</b></h1></Card.Title>
            <Card.Text>

              Salad sayur bukan sekadar lauk sampingan;
              mereka adalah kanvas kuliner yang penuh warna,
              rasa, dan nutrisi. Dari sayuran hijau yang segar
              hingga sayuran renyah, dunia salad menawarkan
              kemungkinan tanpa batas untuk kreativitas dan
              nutrisi. Mari kita telusuri seni menciptakan salad
              sayur yang lezat dan bergizi, yang akan memikat
              lidah dan menyehatkan tubuh Anda.

            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </div>
      </Card>
    </div>

  );
}

export default BasicExample;
