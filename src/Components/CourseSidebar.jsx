import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink, useLocation } from "react-router-dom";

export default function CourseSidebar({path}) {

    return (
        <Navbar 
        className="flex-column Sidebar"
            style={{
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                backgroundColor: "#fff",
                padding: "1rem",
                height: "calc(100vh - 60px)", 
                width: "250px",
                position: "fixed",
                top: "60px", 
                left: "0", 
            }}
        >
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