import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import { Form } from 'react-bootstrap';
import FormLandingPage from "./FormLandingPage";
import image from '../assets/g.png';


const listForm = [
    {
        id: "email",
        label: "Email",
        type: "email",
        placeholder: "Masukkan Email"
    },
    {
        id: "password",
        label: "Kata Sandi",
        type: "password",
        placeholder: "Masukkan Kata Sandi"
    }
];

function FormSignIn({ triggerEvent }) {
    const [validated, setValidated] = useState(false);
    const [formData, setFormData] = useState({
        email: dummyData.email,
        password: dummyData.password
    });

    useEffect(() => {
        setFormData({
            email: dummyData.email,
            password: dummyData.password
        });
    }, [dummyData]);


    const handleClick = () => {
        triggerEvent(2);
    };

    return (
        <div style={{ border: "3px solid #4AB6C5", borderRadius: "0 0 40px 40px" }}>
            <div className=" m-5">
                <Form noValidate validated={validated}>
                    {listForm.map(form => (
                        <FormLandingPage
                            key={form.id}
                            id={form.id}
                            type={form.type}
                            label={form.label}
                            placeholder={form.placeholder}
                            required
                        />
                    ))}
                    <div className="mb-3" style={{ display: "flex", alignItems: "center" }}>
                        <input type="checkbox" style={{ marginRight: "10px" }} />
                        <label>Ingat Saya</label>
                        <a href="#" style={{ marginLeft: "auto", textDecoration: "none", color: "#4AB6C5" }}>Lupa Kata Sandi?</a>
                    </div>
                    <div className="d-grid gap-2">
                        <Button
                            variant="primary"
                            size="lg"
                            type="submit"
                            style={{
                                padding: "10px 20px",
                                borderRadius: "30px",
                                border: "none",
                                backgroundColor: "#C4C4C4",
                                transition: "background-color 0.3s"
                            }}
                            onMouseOver={(e) => e.target.style.backgroundColor = "#4AB6C5"}
                            onMouseOut={(e) => e.target.style.backgroundColor = "#C4C4C4"}
                        >
                            Masuk
                        </Button>
                    </div>
                </Form>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexWrap: "nowrap" }}>
                    <Col ><hr style={{ height: "3px", backgroundColor: "#C4C4C4", border: "none" }} /></Col>
                    <Col md="auto" ><h5 style={{ color: "#C4C4C4", padding: "10px" }}>atau</h5></Col>
                    <Col ><hr style={{ height: "3px", backgroundColor: "#C4C4C4", border: "none" }} /></Col>
                </div>
                <div className="d-grid gap-2">
                    <Button variant="light" size="lg" style={{ border: "3px solid #C4C4C4", borderRadius: "30px", padding: "10px 20px" }}>
                        <img src={image} alt="Deskripsi Gambar" style={{ width: '30px', height: 'auto' }} />
                        <b style={{ color: "#C4C4C4" }}>Masuk Dengan Google</b>
                    </Button>
                </div>
                <p style={{ textAlign: "center" }} className="p-3">Belum punya akun ? <a href="#" onClick={handleClick} style={{ textDecoration: "none", color: "#4AB6C5" }}>Daftar</a></p>
            </div>
        </div>
    );
}

export default FormSignIn;
