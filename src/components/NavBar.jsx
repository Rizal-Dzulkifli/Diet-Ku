// CollapsibleExample.js
import React, { useState, useEffect } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import image from '../assets/Logo Dietku.png';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function CollapsibleExample() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const isLoggedIn = localStorage.getItem("isLoggedIn");
        if (isLoggedIn === 'true') {
            setIsLoggedIn(true);
        }
    }, []);

    const handleLogout = () => {
        localStorage.setItem('isLoggedIn', 'false');
        setIsLoggedIn(false);
    };

    return (
        <Navbar style={{ backgroundColor: '#80DCF9' }} collapseOnSelect expand="sm" className="px-4">
            <Navbar.Brand href="#home">
                <img alt="" src={image} width="auto" height="55" className="d-inline-block align-top" />{' '}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    {/* Kosong */}
                </Nav>
                <Nav className="d-flex justify-content-center align-items-center">
                    <Nav.Link href="#features" style={{ color: '#2BB72F' }}>
                        <h5>Beranda</h5>
                    </Nav.Link>
                    <Nav.Link href="#pricing" style={{ color: '#2BB72F' }}>
                        <h5>Tentang Kami</h5>
                    </Nav.Link>
                    <Nav.Link href="#pricing" style={{ color: '#2BB72F' }}>
                        <h5>Program</h5>
                    </Nav.Link>
                    <Nav.Link href="#deets" style={{ color: '#2BB72F' }}>
                        <h5>Blog</h5>
                    </Nav.Link>
                    {isLoggedIn ? (
                        <Button
                            onClick={handleLogout}
                            variant="primary"
                            style={{
                                padding: '9px',
                                width: '100px',
                                margin: '10px',
                                borderRadius: '30px',
                                border: 'none',
                                backgroundColor: '#2BB72F',
                                transition: 'background-color 0.3s'
                            }}
                            onMouseOver={(e) => (e.target.style.backgroundColor = '#28A32B')}
                            onMouseOut={(e) => (e.target.style.backgroundColor = '#2BB72F')}
                        >
                            Logout
                        </Button>
                    ) : (
                        <>
                            <Button
                                as={Link}
                                to="/masuk"
                                variant="primary"
                                style={{
                                    padding: '9px',
                                    width: '100px',
                                    margin: '10px',
                                    borderRadius: '30px',
                                    border: 'none',
                                    backgroundColor: '#2BB72F',
                                    transition: 'background-color 0.3s'
                                }}
                                onMouseOver={(e) => (e.target.style.backgroundColor = '#28A32B')}
                                onMouseOut={(e) => (e.target.style.backgroundColor = '#2BB72F')}
                            >
                                Masuk
                            </Button>
                            <Button
                                as={Link}
                                to="/login/daftar"
                                variant="outline-success"
                                style={{
                                    width: '100px',
                                    margin: '10px',
                                    border: '3px solid #2BB72F',
                                    color: '#2BB72F',
                                    borderRadius: '30px',
                                    transition: 'border-color 0.3s, background-color 0.3s'
                                }}
                                onMouseOver={(e) => {
                                    e.target.style.backgroundColor = '#2BB72F';
                                    e.target.style.color = '#FFF';
                                }}
                                onMouseOut={(e) => {
                                    e.target.style.backgroundColor = '';
                                    e.target.style.color = '#2BB72F';
                                }}
                            >
                                Daftar
                            </Button>
                        </>
                    )}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default CollapsibleExample;
