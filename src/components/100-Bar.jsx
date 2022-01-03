import { Container, Image, Nav, Navbar } from 'react-bootstrap'
import './000.css'
import { AiOutlineUser,AiOutlineHome,AiOutlineMail } from 'react-icons/ai';
// import Gato from '../assets/gato.webp'

const Bar=({setIndex})=>{
    // const openGitHub=()=>{
    //     const URL='https://github.com/marcosaccarola'
    //     window.open(URL, '_blank', 'location=yes,height=570,width=520,scrollbars=yes,status=yes')
    // }

    return(
        <Navbar bg="dark" variant='dark' sticky='top' className='min-vw-100 bar'>
            <Container>
                {/* <Navbar.Brand onClick={openGitHub}><Image className='img-avatar border-flux' src={Gato} /></Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link onClick={openGitHub} className='text-flux'>marco.saccarola</Nav.Link>
                </Nav> */}
                <Nav className="me-auto">
                    <Nav.Link onClick={()=>setIndex('AboutMe')}><AiOutlineUser className='icon-email' /></Nav.Link>
                </Nav>
                <Nav className="mx-auto">
                    <Nav.Link onClick={()=>setIndex('Menu')}><AiOutlineHome className='icon-email' /></Nav.Link>
                </Nav>
                <Nav className="ms-auto">
                    <Nav.Link onClick={()=>setIndex('ContactMe')}><AiOutlineMail className='icon-email' /></Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Bar