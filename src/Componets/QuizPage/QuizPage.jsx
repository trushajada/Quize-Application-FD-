import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { quizzes } from '../../data/quizzes';
import { Container, Card, Button } from 'react-bootstrap';


const QuizPage = () => {
    const { quizId } = useParams();
    const quiz = quizzes.find((q) => q.id === parseInt(quizId));
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState([]);
    const navigate = useNavigate();

    const handleAnswer = (index) => {
        setAnswers([...answers, index]);
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < quiz.questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            navigate(`/summary`, { state: { answers: [...answers, index], quiz } });
        }
    };

    return (
        <div className="quiz-page  vh-100 d-flex align-items-center">
            <Container className="d-flex justify-content-center">
                <Card className="shadow-lg p-4 " id='page' style={{ backgroundColor: '#fff', width: '100%', maxWidth: '700px' }}>
                    <Card.Body className='p-5'>
                        <h4 className="text-center mb-5 text-primary bg-light">{quiz.title}</h4>
                        <div className="question-card text-light">
                            <h4 className="mb-4 text-light">{quiz.questions[currentQuestion].question}</h4>
                            {quiz.questions[currentQuestion].options.map((option, index) => (
                                <Button
                                    id='button'
                                    key={index}
                                    variant="outline-primary"
                                    className="d-block w-100 mt-2 border border-light text-light mb-3"
                                    onClick={() => handleAnswer(index)}
                                >
                                    {option}
                                </Button>
                            ))}

                        </div>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    );
};

export default QuizPage;


