import { useState } from "react";
import { Button, Card, Container } from "react-bootstrap";
import '../index.css';

const dummyQuestions = [
    {
        id: 0,
        question: "Is sigma skibidi toilet?",
        answer: "y",
        choices: ["y", "na", "nope", "yey"],
        explanation: "sigma skibidi ye ye ye",
        needExplanation: false,
    },
    {
        id: 1,
        question: "name 10 toilets",
        answer: "y",
        choices: ["y", "na", "nope", "yey"],
        explanation: "sigma skibidi ye ye ye",
        needExplanation: false,
    }
];


const multipleChoices = ['A', 'B', 'C', 'D', 'E'];

export default function ExercisesBox({ questions = dummyQuestions }) {

    const [qs, setQs] = useState(questions);

    function handleClick(id) {
        const q = qs.find(x => x.id == id);
        
        q.needExplanation = !q.needExplanation;

        setQs(
            qs.map(x => x.id == id ? q : x)
        );

    }

    return (
        <Container>

            {
                qs.map(
                    q => (
                        <Card key={q.id} className="exercise-box">
                            <Card.Header as="h5">{"Soal Latihan " + (q.id + 1)}</Card.Header>
                            <Card.Body>
                                <Card.Title>{q.question}</Card.Title>

                                {q.choices.map(
                                    (c, idx) => (
                                        <Card.Text key={idx}>
                                            {multipleChoices[idx] + ". " + c}
                                        </Card.Text>
                                    )
                                )}
                                <Button variant="primary" onClick={
                                    () => handleClick(q.id)}>
                                    {!q.needExplanation ? "Lihat Jawaban" : "Tutup Jawaban"}
                                </Button>

                                {q.needExplanation && 
                                <p>{q.explanation}</p>}

                            </Card.Body>
                        </Card>
                    )
                )
            }

        </Container>
    );

}
