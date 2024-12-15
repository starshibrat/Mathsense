import { useState } from "react";
import { Button, Card, Container, Form, ListGroup, Modal, Stack } from "react-bootstrap";

const dummyQuestions = [
    {
        id: 0,
        question: "Is sigma skibidi toilet?",
        answer: "A",
        userAnswer: "",
        choices: ["y", "na", "nope", "yey"],
        explanation: "sigma skibidi ye ye ye",
        needExplanation: false,
    },
    {
        id: 1,
        question: "name 10 toilets",
        answer: "B",
        userAnswer: "",
        choices: ["y", "na", "nope", "yey"],
        explanation: "sigma skibidi ye ye ye",
        needExplanation: false,
    },
    {
        id: 2,
        question: "Sigma male skibidi",
        answer: "C",
        userAnswer: "",
        choices: ["y", "na", "nope", "yey"],
        explanation: "sigma skibidi ye ye ye",
        needExplanation: false,
    }
];

const multipleChoices = ['A', 'B', 'C', 'D', 'E'];

export default function Quiz({ questions = dummyQuestions }) {

    const [qs, setQs] = useState(questions);
    const [index, setIndex] = useState(0);
    const [isOver, setIsOver] = useState(false);
    const [showDialog, setShowDialog] = useState(false);


    function onNextHandle() {
        setIndex(index + 1);
    }
    function onPrevHandle() {
        setIndex(index - 1);
    }
    function onFinishHandle() {
        setShowDialog(true);
    }

    function onCancelDialogHandle() {
        setShowDialog(false);
    }

    function onConfirmDialogHandle() {
        setIsOver(true);
        setShowDialog(false);
    }

    function onChoiceHandle(id, e) {
        const q = qs.find(x => x.id == id);

        q.userAnswer = e.currentTarget.value;

        setQs(
            qs.map(x => x.id == id ? q : x)
        );

    }

    const quizzes =
        qs.map(
            q => (
                <Card key={q.id}>
                    <Card.Header as="h5">{"Quiz No. " + (q.id + 1)}</Card.Header>
                    <Card.Body>
                        <Card.Title>{q.question}</Card.Title>

                        <Form>
                            {
                                q.choices.map(
                                    (c, idx) => (
                                        <Form.Check
                                            type="radio"
                                            id={multipleChoices[idx]}
                                            label={c} name="choice"
                                            key={idx}
                                            value={multipleChoices[idx]}
                                            checked={multipleChoices[idx] == q.userAnswer}
                                            onChange={e => onChoiceHandle(q.id, e)}
                                        />
                                    )
                                )
                            }
                        </Form>

                        <Stack direction="horizontal" className="d-flex justify-content-between">
                            {index > 0 && <Button variant="secondary" onClick={() => onPrevHandle()}>
                                Previous
                            </Button>}
                            <Button variant="danger" onClick={() => onFinishHandle()}>
                                Finish
                            </Button>
                            {index < qs.length - 1 && <Button variant="secondary" onClick={() => onNextHandle()}>
                                Next
                            </Button>}
                        </Stack>



                    </Card.Body>
                </Card>
            )
        );

    return (

        <Container>
            <FinishDialogue onConfirm={() => onConfirmDialogHandle()} onCancel={() => onCancelDialogHandle()} show={showDialog} />
            {!isOver ? quizzes[index] : <QuizResult questions={qs} />}
        </Container>

    );




}

function QuizResult({ questions = dummyQuestions }) {
    const results = [];
    let exps = [];
    let correctAns = 0;
    const [index, setIndex] = useState(0);

    function onNumberClick(id) {
        setIndex(id)
    }

    for (let i = 0; i < questions.length; i++) {
        const q = questions[i];

        if (q.answer == q.userAnswer) {
            results.push(<ListGroup.Item action href={`#q${q.id + 1}`} variant="success" key={q.id} onClick={() => onNumberClick(q.id)}>
                {`No. ${q.id + 1}`}

            </ListGroup.Item>)

            correctAns += 1;

        } else {
            results.push(<ListGroup.Item action href={`#q${q.id + 1}`} variant="danger" key={q.id} onClick={() => onNumberClick(q.id)}>
                {`No. ${q.id + 1}`}
            </ListGroup.Item>)
        }

        exps.push(

            <Card className="w-50 ms-3" key={q.id}>
                <Card.Body>
                    <Card.Subtitle>Jawabanmu: {q.userAnswer == "" ? "<kosong>" : q.userAnswer}</Card.Subtitle>
                    <Card.Subtitle>Jawaban yang benar: {q.answer}</Card.Subtitle>
                    <Card.Text>
                        {q.explanation}
                    </Card.Text>
                </Card.Body>
            </Card>


        );

    }

    function onRetakeHandle() {
        window.location.reload();

    }

    return (
        <Container>
            <h1>Quiz Result:</h1>
            <Stack direction="horizontal" className="my-5">
                <ListGroup defaultActiveKey="#q1">
                    {results}
                </ListGroup>
                {exps[index]}
            </Stack>

            <h2>Nilai: {(correctAns / questions.length * 100).toFixed(2) + "%"}</h2>

            <Button variant="primary" onClick={() => onRetakeHandle()}>
                Retake the quiz
            </Button>

        </Container>
    )


}

function FinishDialogue({ onConfirm, onCancel, show }) {
    return (
        <Modal show={show} onHide={onCancel}>
            <Modal.Header closeButton>
                <Modal.Title>Alert!</Modal.Title>
            </Modal.Header>
            <Modal.Body>Apakah Anda ingin menyudahi Quiz?</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onCancel}>
                    Tidak
                </Button>
                <Button variant="primary" onClick={onConfirm}>
                    Ya
                </Button>
            </Modal.Footer>
        </Modal>
    )
}
