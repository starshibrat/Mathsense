import { ListGroup, Stack } from "react-bootstrap";
import Body from "../Components/Body";
import setTitle from "./PageFunctions";

export default function IntermediateCoursesPage() {
    setTitle("Intermediate Course")
    return (
        <Body sidebar>
            <Stack direction="vertical">
                <ListGroup variant="flush" className="beginnerlist">
                    <ListGroup.Item>Limit</ListGroup.Item>
                    <ListGroup.Item>Turunan I</ListGroup.Item>
                    <ListGroup.Item>Turunan II</ListGroup.Item>
                </ListGroup>
            </Stack>
        </Body>
    )
}