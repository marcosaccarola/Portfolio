import { Container, Image, Nav, Navbar } from 'react-bootstrap'
import './000.css'
import { AiOutlineMail } from 'react-icons/ai';
import Marco from '../assets/Marco-Saccarola.jpg'

const Bar=()=>{

    return(
        <Navbar bg="dark" variant='dark' className='fixed-top min-vw-100 bar'>
            <Container>
                <Navbar.Brand><Image className='avatar' src={Marco} /></Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link className='text-flux'>marco.saccarola</Nav.Link>
                </Nav>
                <Nav className="ms-auto">
                    <Nav.Link><AiOutlineMail className='icon-email' /></Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Bar