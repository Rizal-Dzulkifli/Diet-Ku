import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Pic from '../assets/slide2.png';
import Button from 'react-bootstrap/Button'; 

function GridExample() {
    return (
        <div style={{ padding: '30px' }}>
            <div style={{ paddingBottom: '30px', borderRadius: '30px' }}>
                <Button style={{ borderRadius: '30px' }} variant="outline-secondary" disabled><b>Topik Terbaru</b></Button>{' '}
            </div>


            <Row xs={1} md={2} className="g-4">
                {Array.from({ length: 2 }).map((_, idx) => (
                    <Col key={idx}>
                        <Card>
                            <Card.Img variant="top" src={Pic} />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit
                                    longer.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>


            <Row xs={1} md={4} className="g-4" style={{ paddingTop: '30px' }}>
                {Array.from({ length: 4 }).map((_, idx) => (
                    <Col key={idx}>
                        <Card>
                            <Card.Img variant="top" src={Pic} />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit
                                    longer.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>

        </div>
    );
}

export default GridExample;
