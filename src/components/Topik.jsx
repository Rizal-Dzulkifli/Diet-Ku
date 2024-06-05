import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Pic from '../assets/slide1.png';

function GridExample() {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        axios.get('https://dietku-api.up.railway.app/api/blog')
            .then(response => {
                const blogData = response.data.map(blog => ({
                    header: blog.header,
                    content: blog.content,
                }));
                setBlogs(blogData);
            })
            .catch(error => {
                console.error("Error fetching blog data:", error);
            });
    }, []);

    // Split the blogs into two parts: the first two and the rest
    const firstTwoBlogs = blogs.slice(0, 2);
    const otherBlogs = blogs.slice(2);

    return (
        <div style={{ padding: '30px' }}>
            <div style={{ paddingBottom: '30px', borderRadius: '30px' }}>
                <Button style={{ borderRadius: '30px' }} variant="outline-secondary" disabled><b>Topik Terbaru</b></Button>{' '}
            </div>

            {/* Render the first two blogs with xs={1} md={2} */}
            <Row xs={1} md={2} className="g-4">
                {firstTwoBlogs.map((blog, idx) => (
                    <Col key={idx}>
                        <Card>
                            <Card.Img variant="top" src={Pic} />
                            <Card.Body>
                                <Card.Title>{blog.header}</Card.Title>
                                <Card.Text>{blog.content}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>

            {/* Render the rest of the blogs with xs={1} md={4} */}
            {otherBlogs.map((blog, idx) => (
                <Row xs={1} md={4} className="g-4" style={{ paddingTop: '30px' }} key={idx}>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={Pic} />
                            <Card.Body>
                                <Card.Title>{blog.header}</Card.Title>
                                <Card.Text>{blog.content}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            ))}

            <footer style={{ display: 'flex', backgroundColor: '#008000', color: '#FFFFFF', padding: '20px', marginTop: '30px' }}>
                <div style={{ flex: 1 }}>
                    <img src={Pic} alt="Healthy food bowl" style={{ width: '100%', height: 'auto' }} />
                </div>
                <div style={{ flex: 2, paddingLeft: '20px' }}>
                    <h2 style={{ color: '#FFFF00' }}>DIETKU</h2>
                    <p>Platform diet sehat enak dan nyaman</p>
                    <h3>Customer Care</h3>
                    <p>Senin - Jum'at: 09.00 - 15.00 WIB, 16.00 - 20.00 WIB</p>
                    <p>Contact: +62 896-5841-8844</p>
                    <h3>Perusahaan</h3>
                    <p>PT. Dietku Internasional Tbk.</p>
                    <p>JI. Sananajiwa No. 27 - 30, Kota Surakarta</p>
                </div>
            </footer>
        </div>
    );
}

export default GridExample;
