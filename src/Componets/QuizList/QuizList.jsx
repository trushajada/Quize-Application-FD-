import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { quizzes } from '../../data/quizzes';

const QuizList = () => {
    return (
        <Container className="mt-5 body">
            <h2 className="text-center mb-4 p-4">❝𝐀𝐯𝐚𝐢𝐥𝐚𝐛𝐥𝐞 𝐐𝐮𝐢𝐳𝐳𝐞𝐬❞</h2>
            <Row>
                {quizzes.map((quiz) => (
                    <Col md={6} className="mb-4" key={quiz.id}>
                        <Card className="shadow-sm h-100 p-5">
                            <Card.Body className='p-5'>
                                <Card.Title className='text-light'>{quiz.title}</Card.Title>
                                <Card.Text className='text-light'>{quiz.description}</Card.Text>
                                <Link to={`/quiz/${quiz.id}`}>
                                    <Button variant="primary" className="w-100 mt-5 border border-light" id='button'>Start Quiz</Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default QuizList;
