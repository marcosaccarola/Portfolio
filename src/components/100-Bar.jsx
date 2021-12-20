import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap'
import './000.css'

const Bar=()=>{

    return(
        <Navbar bg="dark" variant="dark" className='min-vw-100'>
            <Container>
                <Navbar.Brand href="#home">my photo</Navbar.Brand>
                <Nav className="ms-auto">
                    <Nav.Link>Email icon</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Bar