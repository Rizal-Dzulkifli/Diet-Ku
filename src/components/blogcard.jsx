import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Pic1 from '../assets/card1.png';
import Pic2 from '../assets/card2.png';
import Pic3 from '../assets/card3.png';
import Button from 'react-bootstrap/Button'; 

function GridExample() {
    const cardImgStyle = {
        height: '400px', // atau ukuran yang diinginkan
        objectFit: 'cover',
        width: '100%'
    };

    return (
        <div style={{ padding: '30px' }}>
            <Row style={{ padding: '60px' }}>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={Pic1} style={cardImgStyle} />
                        <Card.Body>
                            <Card.Title>Lifestyle and Nutrition</Card.Title>
                            <Card.Text>
                            What sets you apart from your competition? Is it your offerings? Your philosophies? Or your values?
                            </Card.Text>
                            <Card.Text>
                            Whichever it is, highlight them on this page as separate pillars that build hold your brand aloft.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={Pic2} style={cardImgStyle} />
                        <Card.Body>
                            <Card.Title>Preventive Medicine</Card.Title>
                            <Card.Text>
                            What sets you apart from your competition? Is it your offerings? Your philosophies? Or your values?
                            </Card.Text>
                            <Card.Text>
                            Whichever it is, highlight them on this page as separate pillars that build hold your brand aloft.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={Pic3} style={cardImgStyle} />
                        <Card.Body>
                            <Card.Title>Wellness Programs</Card.Title>
                            <Card.Text>
                            What sets you apart from your competition? Is it your offerings? Your philosophies? Or your values?
                            </Card.Text>
                            <Card.Text>
                            Whichever it is, highlight them on this page as separate pillars that build hold your brand aloft.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}

export default GridExample;
