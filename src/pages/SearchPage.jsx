import { useSearchParams } from "react-router-dom";
import Body from "../components/Body";
import setTitle from "./PageFunctions";
import { useState } from "react";

export default function SearchPage() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [query, setQuery] = useState(searchParams.get('q'));

    setTitle("Results for " + query)
    
    return (
        <Body sidebar>

        </Body>
    )
}