import { Link, useSearchParams } from "react-router-dom";
import Body from "../Components/Body";
import setTitle from "./PageFunctions";
import { useState } from "react";
import { Card } from "react-bootstrap";

const lectures = [
    {
        id: 0,
        name: "Matriks",
        description: "Matriks merupakan sekumpulan bilangan yang disusun berdasarkan baris dan kolom, dan diapit dengan tanda kurung. ",
        link: "/courses/matriks/materi",
    }
];

export default function SearchPage() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [query, setQuery] = useState(searchParams.get('q'));

    const results = [];

    for (let i = 0; i < lectures.length; i++) {
        const lecture = lectures[i];
        console.log(query);

        if (lecture.name.toLowerCase().includes(query)) {

            results.push(
                <Link to={lecture.link} key={lecture.id} style={{textDecoration : 0}}>

                    <Card style={{ width: "80%" }} className="my-3">
                        <Card.Body>
                            <Card.Title>{lecture.name}</Card.Title>
                            <Card.Text>{lecture.description}</Card.Text>
                        </Card.Body>
                    </Card>
                </Link>
            );
        }

    }

    setTitle("Results for " + query)

    return (
        <Body sidebar>
            <h2>Hasil Penelusuran Untuk: {query}</h2>
            {results.length > 0 ? results : <h2>Not found</h2>}
        </Body>
    )
}