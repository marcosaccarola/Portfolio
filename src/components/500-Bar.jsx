import { Container, Navbar } from "react-bootstrap"
import {FaQuestionCircle} from 'react-icons/fa'


const Bar=()=>{

    return(
        <>
        <Navbar className='bg-dark'>
            <Container>
                <Navbar.Brand className='text-warning'>
                {/* <img
                    alt=""
                    src="/logo.svg"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />{' '} */}
                <FaQuestionCircle size={30} className='me-3' />
                Marco Saccarola
                </Navbar.Brand>
            </Container>
        </Navbar>
        </>
    )
}

export default Bar