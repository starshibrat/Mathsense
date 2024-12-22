import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink, useLocation } from "react-router-dom";

export default function CourseSidebar({path}) {

    return (
        <Navbar sticky="top" className="flex-column  Sidebar">
            <Nav.Item>
                <Nav.Link as={NavLink} to={path[0]}>Materi</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={NavLink} to={path[1]}>Video</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={NavLink} to={path[2]}>Quiz</Nav.Link>
            </Nav.Item>
        </Navbar>
    );
}