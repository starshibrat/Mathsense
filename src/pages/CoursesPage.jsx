import { ListGroup, Stack } from "react-bootstrap"
import setTitle from "./PageFunctions"
import { Link } from "react-router-dom"
import Body from "../Components/Body"
import Greet from "../Components/Greet"
import matThumbnail from "../Assets/matrix/matrices.png";

export default function CoursesPage() {
    setTitle("Beginner Courses")
    return (
        <Body sidebar>
            <Stack direction="horizontal">
                {/* <ListGroup variant="flush" className="beginnerlist">
                    <Link to="/courses/matriks/materi"><ListGroup.Item>Matriks</ListGroup.Item></Link>
                    <ListGroup.Item>Limit</ListGroup.Item>
                </ListGroup> */}
                <Greet
                    title={"Matriks"}
                    description={"Sekumpulan bilangan yang disusun berdasarkan baris dan kolom, dan diapit dengan tanda kurung"}
                    imgLink={matThumbnail}
                    path={"/courses/matriks/materi"}
                />
            </Stack>
        </Body>
    )
}