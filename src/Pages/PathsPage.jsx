import { Stack } from "react-bootstrap";
import Body from "../Components/Body";
import Greet from "../Components/Greet";
import beginner from "../assets/newbie.jpg";
import intermediate from "../assets/pro.jpg"
import setTitle from "./PageFunctions";

export default function PathsPage() {
    setTitle("Courses")
    return (
        <Body sidebar>
            <br></br>
            <Stack direction="horizontal" className="h-100">
                <Greet 
                title={"Beginner"} 
                description={"Perjalanan sepuluh ribu miles dimulai dari satu langkah kecil."} 
                imgLink={beginner} 
                path={"/paths/beginner"}
                />

                <Greet 
                title={"Intermediate"} 
                description={"Jalan menuju kesuksesan semakin dekat dan semakin berat."} 
                imgLink={intermediate} 
                path={"/paths/intermediate"}
                />
            </Stack>
        </Body>
    )
}

