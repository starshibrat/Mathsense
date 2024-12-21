import { ListGroup, Stack } from "react-bootstrap";
import Body from "../Components/Body";
import setTitle from "./PageFunctions";
import { Link } from "react-router-dom";

export default function BeginnerCoursesPage() {
    setTitle("Beginner Courses")
    return (
        <Body sidebar>
            <br></br>
            <Stack direction="vertical">
                <ListGroup variant="flush" className="beginnerlist">
                    <Link to="/courses/matriks/materi"><ListGroup.Item>Matriks</ListGroup.Item></Link>
                </ListGroup>
            </Stack>
        </Body>
    )
}