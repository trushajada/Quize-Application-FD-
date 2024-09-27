import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Form, Button, Image, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const SignInPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSignIn = () => {
        if (email && password) {
            navigate('/quiz-list');
        } else {
            alert('Please enter both email and password.');
        }
    };

    return (
        <div className='body'>
            <Container className="vh-100  d-flex align-items-center">
                <Row className="mt-5  box p-5 rounded">
                    <Col md={6} className="d-none d-md-flex flex-column justify-content-center align-items-center">
                        <h1 className='text-center mb-4 text-light'>❝𝐓𝐞𝐬𝐭 𝐂𝐚𝐬𝐞 𝐅𝐨𝐫 𝐋𝐨𝐠𝐢𝐧 𝐏𝐚𝐠𝐞❞</h1>
                        <div className="images" />
                    </Col>
                    <Col md={6} className="d-flex justify-content-center align-items-center">
                        <div className="w-75">
                            <h2 className="text-center text-light">𝐖𝐞𝐥𝐜𝐨𝐦𝐞 𝐛𝐚𝐜𝐤</h2>
                            <p className='ms-2 mb-4 text-center text-light'> 𝙻𝚘𝚐𝚒𝚗 𝚃𝚘 𝚈𝚘𝚞𝚛 𝙰𝚌𝚌𝚘𝚞𝚗𝚝 </p>
                            <Form className='text-light'>
                                <Form.Group className="mb-3" controlId="formEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="Enter your email"
                                        value={email}
                                        onChange={handleEmailChange}
                                        required
                                        className='p-2'
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder="Enter your password"
                                        value={password}
                                        onChange={handlePasswordChange}
                                        required
                                        autoComplete="current-password"
                                        className='p-2'

                                    />
                                </Form.Group>
                                <Button
                                    type="button"
                                    className="w-100 mt-3 p-2 fw-bold fs-6 border border-light"
                                    onClick={handleSignIn}
                                    id='button'
                                >
                                    Login In
                                </Button>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default SignInPage;
