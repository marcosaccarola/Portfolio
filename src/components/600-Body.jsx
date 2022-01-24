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
                        // width="60%"
                        // height="60%"
                        className="align-top rounded-circle img-fluid"
                    />
                </Col>
            </Row>

            <Container>
                <Pills />
            </Container>

            <Container className='d-flex foot-icons bg-black w-75 mx-auto justify-content-end px-0 my-5'>
                <MdAlternateEmail className='me-3' size={25} onClick={()=>window.open('mailto:marco.saccarola.dev@gmail.com')} />
                <BsLinkedin className='me-3' size={25} onClick={()=>window.open('https://www.linkedin.com/in/marcosaccarola/')} />
                <BsGithub className='' size={25} onClick={()=>window.open('https://github.com/marcosaccarola')} />
            </Container>

        </Container>
        </>
    )
}

export default Body