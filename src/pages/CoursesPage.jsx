import { Stack } from "react-bootstrap";
import Body from "../components/Body";
import Greet from "../components/Greet";
import beginner from "../assets/beginner.jpeg"
import intermediate from "../assets/intermediate.jpg"
import setTitle from "./PageFunctions";

export default function CoursesPage() {
    setTitle("Courses")
    return (
        <Body sidebar>
            <Stack direction="horizontal" className="h-100">
                <Greet 
                title={"Beginner"} 
                description={"Perjalanan sepuluh ribu miles dimulai dari satu langkah kecil."} 
                imgLink={beginner} 
                path={"/courses/beginner"}
                />

                <Greet 
                title={"Intermediate"} 
                description={"Jalan menuju kesuksesan semakin dekat dan semakin berat."} 
                imgLink={intermediate} 
                path={"/courses/intermediate"}
                />
            </Stack>
        </Body>
    )
}

