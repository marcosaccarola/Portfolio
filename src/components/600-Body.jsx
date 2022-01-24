import './999-style.scss'
import { Col, Container, Row } from "react-bootstrap"
import avatar from '../assets/linkedin-profilo-500.png'
import Name from "./690-Name"
import Pills from "./700-Pills"
// import gitgif from 'https://media.giphy.com/media/du3J3cXyzhj75IOgvA/giphy.gif'
import {MdAlternateEmail} from 'react-icons/md'
import {BsLinkedin,BsGithub} from 'react-icons/bs'
import GitHubCTA from './800-GitHubCTA'

const Body=()=>{

    return(
        <>
        <Container fluid className=''>

            <Container className='w-75'>
                <Row>
                    <Col md={4}>
                        <Name />
                    </Col>
                    <Col md={8} className='mt-5 d-flex justify-content-center align-items-center'>
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
                        />
                    </Col>
                    <Col md={4} className=''>
                        <GitHubCTA />
                    </Col>
                </Row>
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