import './999-style.scss'
import { Col, Container, Row } from "react-bootstrap"
import avatar from '../assets/linkedin-profilo-500.png'
import Name from "./690-Name"
import Pills from "./700-Pills"
// import gitgif from 'https://media.giphy.com/media/du3J3cXyzhj75IOgvA/giphy.gif'
import {MdAlternateEmail} from 'react-icons/md'
import {BsLinkedin,BsGithub} from 'react-icons/bs'
import GitHubCTA from './800-GitHubCTA'
import converter from '../assets/hexToBase-yellow.png'
import ConverterCTA from './900-ConverterCTA'

const Body=()=>{

    return(
        <>
        <Container fluid className=''>

            <Container className='w-75'>
                <Row>

                    <Col md={4} className=''>
                        <Name />
                    </Col>

                    <Col md={8} className='my-5 d-flex justify-content-center align-items-center'>
                        <img
                            alt=""
                            src={avatar}
                            // width="60%"
                            // height="60%"
                            className="rounded-circle img-fluid"
                        />
                    </Col>

                </Row>
            </Container>
        
            <Container>
                <Pills />
            </Container>

            <Container className='w-75'>
                <Row>

                    <Col md={7} className='mt-5 d-flex justify-content-center align-items-center'>
                        <img
                            alt=""
                            src='https://media.giphy.com/media/du3J3cXyzhj75IOgvA/giphy.gif'
                            // width="60%"
                            // height="60%"
                            className="rounded-circle img-fluid"
                            onClick={()=>window.open('https://github.com/marcosaccarola')}
                        />
                    </Col>

                    <Col md={4} className=''>
                        <GitHubCTA />
                    </Col>

                </Row>
            </Container>

            <Container className='coso'></Container>

            <Container className='mt-5'>
                <Container className='w-25 converter-cta-text-fade'>
                    <ConverterCTA className='' />
                </Container>
                <img
                    alt=""
                    src={converter}
                    // width="60%"
                    // height="60%"
                    className="img-fluid rounded"
                    onClick={()=>window.open('https://hex-to-base64-converter.vercel.app/')}
                />
            </Container>

            <Container className='coso'></Container>

            <Container className='d-flex foot-icons bg-black w-75 mx-auto justify-content-end px-0 py-3 mt-5 mb-3'>
                <MdAlternateEmail className='me-3' size={25} onClick={()=>window.open('mailto:marco.saccarola.dev@gmail.com')} />
                <BsLinkedin className='me-3' size={25} onClick={()=>window.open('https://www.linkedin.com/in/marcosaccarola/')} />
                <BsGithub className='' size={25} onClick={()=>window.open('https://github.com/marcosaccarola')} />
            </Container>

        </Container>
        </>
    )
}

export default Body