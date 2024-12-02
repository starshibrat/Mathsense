import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';


export default function Greet({ title, description, imgLink, path}) {
    return (
        <Card style={{ width: '18rem' }} className="m-2 greetcard">
            <Card.Img variant="top" src={imgLink} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
                <Link to={path}><Button variant="primary" >Mulai</Button></Link>
            </Card.Body>
        </Card>
    )
}