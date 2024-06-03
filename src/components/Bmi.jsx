import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ToggleButton from 'react-bootstrap/ToggleButton';

function App() {
  // State
  const [gender, setGender] = useState('male');
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState('');
  const [message, setMessage] = useState('');

  // Function untuk menghitung BMI
  const calcBmi = (event) => {
    event.preventDefault(); // Mencegah pengiriman form

    // Mengambil nilai berat badan (kg) dan tinggi badan (cm) dari state
    const weightKg = parseFloat(weight);
    const heightCm = parseFloat(height);

    if (!weightKg || !heightCm) {
      alert('Mohon masukkan berat badan dan tinggi yang valid');
    } else {
      // Menghitung BMI
      const bmi = (weightKg / ((heightCm / 100) * (heightCm / 100))).toFixed(1);
      setBmi(bmi);

      // Menetapkan pesan berdasarkan nilai BMI
      let message = '';
      if (bmi < 18.5) {
        message = 'Anda berada di bawah berat badan normal';
      } else if (bmi >= 18.5 && bmi < 25) {
        message = 'Anda memiliki berat badan normal';
      } else if (bmi >= 25 && bmi < 30) {
        message = 'Anda memiliki kelebihan berat badan';
      } else {
        message = 'Anda memiliki obesitas';
      }
      setMessage(message);
    }
  }

  // Function untuk mereload halaman
  const reload = () => {
    window.location.reload();
  }

  return (
    <div className="justify-content-center">
      <div>
        <Card style={{ borderRadius: '0px', border: '0' }}>
          <Card.Header style={{ backgroundColor: '#B5FFB4', border: '0', borderRadius: '0px', padding: '35px' }}>
            <h2 className='text-left'><b>Kalkulator Body Mass Index (BMI)</b></h2>
            <h5>Gunakan kalkulator ini untuk menentukan berapa berat badan ideal anda.</h5>
          </Card.Header>
          <Card.Body>
            <Form onSubmit={calcBmi}>
              <div>
                <label><h5>Apa jenis kelamin anda?</h5></label>
                <Row>
                  <Col className="m-2">
                    <ToggleButton
                      name='gender'
                      className="mb-2"
                      id="male"
                      type="checkbox"
                      variant="outline-primary"
                      checked={gender === 'male'}
                      value="male"
                      onChange={() => setGender('male')}
                      style={{
                        backgroundColor: gender === 'male' ? '#4AB6C5' : '',
                        color: gender === 'male' ? '#FFF' : '#4AB6C5',
                        border: '1px solid #4AB6C5',
                      }}
                      onMouseOver={(e) => {
                        if (gender !== 'male') {
                          e.target.style.backgroundColor = '#4AB6C5';
                          e.target.style.color = '#FFF';
                        }
                      }}
                      onMouseOut={(e) => {
                        if (gender !== 'male') {
                          e.target.style.backgroundColor = '';
                          e.target.style.color = '#4AB6C5';
                        }
                      }}
                    >
                      Laki-Laki
                    </ToggleButton>
                  </Col>
                  <Col className="m-2">
                    <ToggleButton
                      name='gender'
                      className="mb-2"
                      id="female"
                      type="checkbox"
                      variant="outline-primary"
                      checked={gender === 'female'}
                      value="female"
                      onChange={() => setGender('female')}
                      style={{
                        backgroundColor: gender === 'female' ? '#FF00A8' : '',
                        color: gender === 'female' ? '#FFF' : '#FF00A8',
                        border: '1px solid #FF00A8',
                      }}
                      onMouseOver={(e) => {
                        if (gender !== 'female') {
                          e.target.style.backgroundColor = '#FF00A8';
                          e.target.style.color = '#FFF';
                        }
                      }}
                      onMouseOut={(e) => {
                        if (gender !== 'female') {
                          e.target.style.backgroundColor = '';
                          e.target.style.color = '#FF00A8';
                        }
                      }}
                    >
                      Perempuan
                    </ToggleButton>
                  </Col>
                </Row>
              </div>

              <Form.Group controlId="formAge">
                <Form.Label>Usia Anda:</Form.Label>
                <Form.Control
                  type="number"
                  value={age}
                  placeholder="Masukkan usia Anda"
                  onChange={(e) => setAge(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="formWeight">
                <Form.Label>Berat Badan (kg):</Form.Label>
                <Form.Control
                  type="number"
                  value={weight}
                  placeholder="Masukkan berat badan Anda"
                  onChange={(e) => setWeight(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="formHeight">
                <Form.Label>Tinggi Badan (cm):</Form.Label>
                <Form.Control
                  type="number"
                  value={height}
                  placeholder="Masukkan tinggi badan Anda"
                  onChange={(e) => setHeight(e.target.value)}
                />
              </Form.Group>

              <div className="d-grid gap-2">
                <Button
                  variant="primary"
                  type="submit"
                  size="lg"
                  style={{
                    border: "none",
                    backgroundColor: "#4AB6C5",
                    transition: "background-color 0.3s"
                  }}
                  onMouseOver={(e) => e.target.style.backgroundColor = "#4AA0AC"}
                  onMouseOut={(e) => e.target.style.backgroundColor = "#4AB6C5"}
                >
                  Hitung BMI
                </Button>
              </div>
            </Form>
            <div className='text-center'>
              <h3>Perhitungan BMI kamu Adalah: {bmi}</h3>
              <p>{message}</p>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default App;
