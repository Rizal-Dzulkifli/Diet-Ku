import React, { useState, useEffect } from "react";
import { Button, Col } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import image from '../../assets/g.png';
import Form from 'react-bootstrap/Form';

function FormSignIn({ onLogin, triggerEvent }) {
    const [enteredEmail, setEnteredEmail] = useState("");
    const [emailIsValid, setEmailIsValid] = useState();
    const [enteredPassword, setEnteredPassword] = useState("");
    const [passwordIsValid, setPasswordIsValid] = useState();
    const [formIsValid, setFormIsValid] = useState(false);
    const [loginError, setLoginError] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        // Set nilai awal input email dan password menjadi string kosong
        setEnteredEmail("");
        setEnteredPassword("");

        // Periksa apakah pengguna sudah login sebelumnya
        const isLoggedIn = localStorage.getItem('isLoggedIn');
        if (isLoggedIn === 'true') {
            // Jika pengguna sudah login sebelumnya, arahkan mereka ke halaman beranda
            triggerEvent(2);
            navigate('/');
        }
    }, [triggerEvent, navigate]);

    useEffect(() => {
        const identifier = setTimeout(() => {
            setFormIsValid(
                enteredEmail.includes("@") && enteredPassword.trim().length > 5
            );
        }, 500);

        return () => {
            clearTimeout(identifier);
        };
    }, [enteredEmail, enteredPassword]);

    const emailChangeHandler = (event) => {
        setEnteredEmail(event.target.value);
    };

    const passwordChangeHandler = (event) => {
        setEnteredPassword(event.target.value);
    };

    const validateEmailHandler = () => {
        setEmailIsValid(enteredEmail.includes("@"));
    };

    const validatePasswordHandler = () => {
        setPasswordIsValid(true);
    };

    const submitHandler = async (event) => {
        event.preventDefault();

        if (enteredPassword.trim().length < 5) {
            setPasswordIsValid(false);
            return;
        }

        try {
            const response = await axios.post('https://dietku-api.up.railway.app/api/login', {
                email: enteredEmail,
                password: enteredPassword
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'accept': 'application/json'
                }
            });

            const token = response.data.token;

            // Set status login pengguna dan JWT token di localStorage
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('token', token);

            onLogin(enteredEmail, enteredPassword);
            setLoginError("");

            // Redirect to homepage
            navigate('/');
        } catch (error) {
            setLoginError("Invalid email or password. Please try again.");
        }
    };

    const handleClick = () => {
        triggerEvent(2);
    };

    return (
        <div style={{ border: "3px solid #4AB6C5", borderRadius: "0 0 40px 40px" }}>
            <div className="m-5">
                <Form onSubmit={submitHandler}>
                    <Form.Group className={`mb-3 ${emailIsValid === false ? 'is-invalid' : ''}`}>
                        <Form.Label><h5>Email</h5></Form.Label>
                        <Form.Control
                            className="p-2"
                            type="email" // Mengatur tipe input sebagai email
                            id="email" // Mengatur tipe input sebagai email
                            onChange={emailChangeHandler} // Menggunakan fungsi onChange khusus untuk email
                            onBlur={validateEmailHandler} // Menggunakan fungsi onBlur khusus untuk email
                            placeholder="Masukkan Email"
                        />
                    </Form.Group>
                    <Form.Group className={`mb-3 ${passwordIsValid === false ? 'is-invalid' : ''}`}>
                        <Form.Label><h5>Kata Sandi</h5></Form.Label>
                        <Form.Control
                            className="p-2"
                            type="password" // Mengatur tipe input sebagai password
                            id="password" // Mengatur tipe input sebagai password
                            onChange={passwordChangeHandler} // Menggunakan fungsi onChange khusus untuk password
                            onBlur={validatePasswordHandler} // Menggunakan fungsi onBlur khusus untuk password
                            placeholder="Masukkan Kata Sandi"
                        />
                    </Form.Group>

                    <div className="mb-3" style={{ display: "flex", alignItems: "center" }}>
                        <input type="checkbox" style={{ marginRight: "10px" }} defaultChecked />
                        <label>Ingat Saya</label>
                        <a href="#" style={{ marginLeft: "auto", textDecoration: "none", color: "#4AB6C5" }}>Lupa Kata Sandi?</a>
                    </div>
                    <div className="d-grid gap-2">
                        <Button
                            disabled={!formIsValid}
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
                {loginError && <p className="text-danger text-center">{loginError}</p>}
            </div>
        </div>
    );
}

export default FormSignIn;
