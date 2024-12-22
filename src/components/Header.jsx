import { Container, Image, Nav, Navbar } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import backIcon from "../assets/back_icon.jpg";
import SearchBox from "./SearchBox";
import '../index.css';

export default function Header() {
    const navigate = useNavigate();
    const location = useLocation();
    return (
        <Navbar bg="light" sticky="top" className="Header">
            <Container className="containerHeader">
                {location.pathname !== "/" &&
                    <Nav.Item onClick={() => navigate(-1)}>
                        <Image src={backIcon} width={30}></Image>
                    </Nav.Item>
                }

                <Navbar.Brand 
                    className="header_judul" 
                    onClick={() => navigate("/")} 
                    style={{ cursor: "pointer" }}  
                >
                    MathSense
                </Navbar.Brand>
                <Nav.Item>
                    <SearchBox />
                </Nav.Item>
            </Container>
        </Navbar>
    );
}