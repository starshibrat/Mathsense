import { ListGroup, Stack } from "react-bootstrap"
import setTitle from "./PageFunctions"
import { Link } from "react-router-dom"
import Body from "../Components/Body"

export default function CoursesPage() {
    setTitle("Beginner Courses")
    return (
        <Body sidebar>
            <Stack direction="vertical">
                <ListGroup variant="flush" className="beginnerlist">
                    <Link to="/courses/matriks/materi"><ListGroup.Item>Matriks</ListGroup.Item></Link>
                    <ListGroup.Item>Limit</ListGroup.Item>
                </ListGroup>
            </Stack>
        </Body>
    )
}