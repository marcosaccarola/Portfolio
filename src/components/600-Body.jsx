import './999-style.scss'
import { Col, Container, Row } from "react-bootstrap"
import avatar from '../assets/linkedin-profilo.jpg'
import Name from "./690-Name"
import Pills from "./700-Pills"
import {MdAlternateEmail} from 'react-icons/md'
import {BsLinkedin,BsGithub} from 'react-icons/bs'

const Body=()=>{

    return(
        <>
        <Container fluid className=''>


            <Row>
                <Col md={7}>
                    
                    <Name />
                </Col>

                <Col md={5} className='mt-5 d-flex justify-content-center'>
                    <img
                        alt=""
                        src={avatar}
                        width="500"
                        height="500"
                        className="d-inline-block align-top rounded-circle img-fluid"
                    />
                </Col>
            </Row>
            <Container>
                <Pills />
            </Container>
            <Container className='d-flex text-warning bg-black w-75 mx-auto justify-content-end px-0 my-5'>
                <MdAlternateEmail className='text-warning me-3' size={25} onClick={()=>window.open('mailto:marco.saccarola.dev@gmail.com')} />
                <BsLinkedin className='text-warning me-3' size={25} onClick={()=>window.open('https://www.linkedin.com/in/marcosaccarola/')} />
                <BsGithub className='text-warning' size={25} onClick={()=>window.open('https://github.com/marcosaccarola/hex-to-base64-converter')} />
            </Container>
        </Container>
        </>
    )
}

export default Body