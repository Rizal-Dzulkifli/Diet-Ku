import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function DeveloperTeam() {
  return (
    <Container>
      <h2 className="text-center mt-4 mb-5">Tim Pengembang</h2>
      <Row className="justify-content-center">
        {/* Developer 1 */}
        <Col md={4} className="mb-4">
          <Card>
            <Card.Img variant="top" src="https://via.placeholder.com/150" alt="Developer 1" />
            <Card.Body className="text-center">
              <Card.Title>Developer 1</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        {/* Developer 2 */}
        <Col md={4} className="mb-4">
          <Card>
            <Card.Img variant="top" src="https://via.placeholder.com/150" alt="Developer 2" />
            <Card.Body className="text-center">
              <Card.Title>Developer 2</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        {/* Developer 3 */}
        <Col md={4} className="mb-4">
          <Card>
            <Card.Img variant="top" src="https://via.placeholder.com/150" alt="Developer 3" />
            <Card.Body className="text-center">
              <Card.Title>Developer 3</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        {/* Developer 4 */}
        <Col md={4} className="mb-4">
          <Card>
            <Card.Img variant="top" src="https://via.placeholder.com/150" alt="Developer 4" />
            <Card.Body className="text-center">
              <Card.Title>Developer 4</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        {/* Developer 5 */}
        <Col md={4} className="mb-4">
          <Card>
            <Card.Img variant="top" src="https://via.placeholder.com/150" alt="Developer 5" />
            <Card.Body className="text-center">
              <Card.Title>Developer 5</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        {/* Developer 6 */}
        <Col md={4} className="mb-4">
          <Card>
            <Card.Img variant="top" src="https://via.placeholder.com/150" alt="Developer 6" />
            <Card.Body className="text-center">
              <Card.Title>Developer 6</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        {/* Developer 7 */}
        <Col md={4} className="mb-4">
          <Card>
            <Card.Img variant="top" src="https://via.placeholder.com/150" alt="Developer 7" />
            <Card.Body className="text-center">
              <Card.Title>Developer 7</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default DeveloperTeam;
