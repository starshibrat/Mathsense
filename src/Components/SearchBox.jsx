import { Form, Stack } from "react-bootstrap";

export default function SearchBox() {
    return (
        
        <form action="/search">
            <Stack direction="horizontal">
            <Form.Control type="text" placeholder="Cari pelajaran matematika disini" name="q" />
            <button type="submit" className="btn btn-primary ms-3">Search</button>
            </Stack>
        </form>

    )
}