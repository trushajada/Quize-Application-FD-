import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Container, Card, Button } from 'react-bootstrap';


const ScoreSummary = () => {
    const location = useLocation();
    const { answers, quiz } = location.state;

    const score = answers.reduce((score, answer, index) => {
        return score + (answer === quiz.questions[index].correctAnswer ? 1 : 0);
    }, 0);

    return (
        <Container className="mt-5">
            <Card className="shadow-lg p-4">
                <Card.Body>
                    <h2 className="text-center mb-4 text-light p-3">❝𝐒𝐜𝐨𝐫𝐞 𝐒𝐮𝐦𝐦𝐚𝐫𝐲❞</h2>
                    <p className="text-center text-light fs-5">
                        You scored <strong>{score}</strong> out of <strong>{quiz.questions.length}</strong>
                    </p>
                    <ul className="list-group">
                        {quiz.questions.map((question, index) => (
                            <li key={index} className="list-group-item w-75 mx-auto text-center">
                                <h5>{question.question}</h5>
                                <p>
                                    <strong>Your answer:</strong> {question.options[answers[index]]}
                                </p>
                                <p className="text-success">
                                    <strong>Correct answer:</strong> {question.options[question.correctAnswer]}
                                </p>
                            </li>
                        ))}
                    </ul>
                    <div className="text-center mt-3 ">
                        <Link to="/" className="btn  border border-light text-light mt-3 mb-5" id='button'>
                            Back to Quizzes
                        </Link>
                    </div>
                </Card.Body>
            </Card>
        </Container>

    );
};

export default ScoreSummary;



