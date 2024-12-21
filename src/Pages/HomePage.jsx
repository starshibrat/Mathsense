import { Link } from "react-router-dom";
import Body from "../Components/Body";
import SearchBox from "../Components/SearchBox";
import setTitle from "./PageFunctions";
import '../index.css';

export default function HomePage() {
    setTitle("MathSense")
    return (
        <Body sidebar>
            <br></br>
            <center><h1>MathSense</h1></center>
            <br></br>
            <p>Platform learning matematika yang didesain untuk memahami materi-materi matematika dengan bantuan multimedia seperti kuiz-kuiz, dan video.</p>
            <br></br>
            <h2>Misi Kami</h2>
            <p>Membantu orang-orang yang kesulitan dalam memahami matematika dan menjadikan matematika sebagai pelajaran yang menarik dan disenangi.</p>
            <br></br>
            <br></br>
            <Link to="/paths">
                <p className="mb-0">Bingung ingin belajar apa? Coba Learning path kami.</p>
            </Link>


        </Body>
    )
}

