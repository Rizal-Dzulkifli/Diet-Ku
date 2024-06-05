import React, { useState } from "react";
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import FormLandingPage from "../FormLandingPage";
import image from '../../assets/g.png';

const listForm = [
    {
        id: "formFirstName",
        label: "Nama Depan",
        type: "text",
        placeholder: "Masukkan Nama Depan"
    },
    {
        id: "formLastName",
        label: "Nama Belakang",
        type: "text",
        placeholder: "Masukkan Nama Belakang"
    },
    {
        id: "formBirthDay",
        label: "Tanggal Lahir",
        type: "date",
        placeholder: "Masukkan Tanggal Lahir"
    },
    {
        id: "formPhone",
        label: "Nomor Telepon",
        type: "tel",
        placeholder: "Masukkan Nomor Telepon"
    },
    {
        id: "formEmail",
        label: "Email",
        type: "email",
        placeholder: "Masukkan Email"
    },
    {
        id: "formPassword",
        label: "Kata Sandi",
        type: "password",
        placeholder: "Masukkan Kata Sandi"
    },
    {
        id: "formConfirmPassword",
        label: "Ulang Kata Sandi",
        type: "password",
        placeholder: "Masukkan Ulang Kata Sandi"
    }
];

function FormSignUp({ triggerEvent }) {
    const [validated, setValidated] = useState(false);
    const [formData, setFormData] = useState({
        formFirstName: "",
        formLastName: "",
        formBirthDay: "",
        formPhone: "",
        formEmail: "",
        formPassword: "",
        formConfirmPassword: ""
    });
    const [registerError, setRegisterError] = useState("");
    const navigate = useNavigate();

    const handleChange = (event) => {
        const { id, value } = event.target;
        setFormData(prevState => ({ ...prevState, [id]: value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = event.currentTarget;

        if (form.checkValidity() === false || formData.formPassword !== formData.formConfirmPassword) {
            event.stopPropagation();
            setValidated(true);
            return;
        }

        try {
            const response = await axios.post('https://dietku-api.up.railway.app/api/register', {
                firstName: formData.formFirstName,
                lastName: formData.formLastName,
                birthDay: formData.formBirthDay,
                phone: formData.formPhone,
                email: formData.formEmail,
                password: formData.formPassword
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'accept': 'application/json'
                }
            });

            // Redirect to homepage
            navigate('/');
        } catch (error) {
            setRegisterError("Registration failed. Please try again.");
        }
    };

    const handleClick = () => {
        triggerEvent(1);
    };

    return (
        <div style={{ border: "3px solid #4AB6C5", borderRadius: "0 0 40px 40px" }}>
            <div className="m-5">
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    {listForm.map(form => (
                        <FormLandingPage
                            key={form.id}
                            id={form.id}
                            type={form.type}
                            label={form.label}
                            placeholder={form.placeholder}
                            required
                            value={formData[form.id]}
                            onChange={handleChange}
                        />
                    ))}
                    <div className="d-grid pb-3 gap-2">
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
                            Daftar
                        </Button>
                    </div>
                </Form>
                <div className="d-grid gap-2">
                    <Button variant="light" size="lg" style={{ border: "3px solid #C4C4C4", borderRadius: "30px", padding: "10px 20px" }}>
                        <img src={image} alt="Deskripsi Gambar" style={{ width: '30px', height: 'auto' }} />
                        <b style={{ color: "#C4C4C4" }}>Daftar Dengan Google</b>
                    </Button>
                </div>
                <p style={{ textAlign: "center" }} className="p-3">Sudah punya akun ? <a href="#" onClick={handleClick} style={{ textDecoration: "none", color: "#4AB6C5" }}>Masuk</a></p>
                {registerError && <p className="text-danger text-center">{registerError}</p>}
            </div>
        </div>
    );
}

export default FormSignUp;
