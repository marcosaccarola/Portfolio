import './999-style.scss'
import { Col, Container, Row } from "react-bootstrap"
import avatar from '../assets/linkedin-profilo-500.png'
import Name from "./200-Name"
import Pills from "./300-Pills"
import {MdAlternateEmail} from 'react-icons/md'
import {BsLinkedin,BsGithub} from 'react-icons/bs'
import GitHubCTA from './400-GitHubCTA'
import converter from '../assets/hexToBase-yellow.png'
import umbrellaTime from '../assets/umbrellaTime.png'
import ConverterCTA from './510-ConverterCTA'
import LinkedinCTA from './600-LnkedinCTA'
import UmbrellaTimeCTA from './500-UmbrellaTime'

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
                            className="rounded-circle img-fluid"
                            onClick={()=>window.open('https://github.com/marcosaccarola')}
                        />
                    </Col>

                    <Col md={4} className=''>
                        <GitHubCTA />
                    </Col>

                </Row>
            </Container>

            <Container className='mt-5'>
                <Container className='w-25 converter-cta-text-fade'>
                    <UmbrellaTimeCTA className='' />
                </Container>
                <Container className=''>
                    <img
                        alt=""
                        src={umbrellaTime}
                        className="img-fluid rounded"
                        onClick={()=>window.open('https://umbrellatime.vercel.app/')}
                    />
                </Container>
            </Container>

            <Container className='mt-5'>
                <Container className='w-25 converter-cta-text-fade'>
                    <ConverterCTA className='' />
                </Container>
                <Container className=''>
                    <img
                        alt=""
                        src={converter}
                        className="img-fluid rounded"
                        onClick={()=>window.open('https://hex-to-base64-converter.vercel.app/')}
                    />
                </Container>
            </Container>

            <Container className='coso'></Container>

            <Container className='w-25 converter-cta-text-fade'>
                <Container fluid className='mb-5 h-25 rounded text-over-img-fade'>
                    <Row>
                        <Col md={12} className='mb-4'>
                            <section class="title-container mb-5 ms-5"  onClick={()=>window.open('https://hex-to-base64-converter.vercel.app/')}>
                                <h1>
                                    <span class="much-more">much more</span>
                                    <span class="much-more">AND</span>
                                    <span class="much-more">•</span>
                                </h1>
                            </section>
                        </Col>
                    </Row>
                </Container>
            </Container>

            <Container className='coso'></Container>
            <Container className='coso'></Container>

            <Container className='w-75'>
                <Row>

                    <Col md={1} className=''>

                    </Col>
                    <Col md={4} className=''>
                        <LinkedinCTA />
                    </Col>

                    <Col md={7} className='mt-5 d-flex justify-content-center align-items-center'>
                        <img
                            alt=""
                            src='https://media.giphy.com/media/HQTYdpx1yhxWpugAi2/giphy.gif'
                            className="rounded-circle img-fluid"
                            onClick={()=>window.open('https://www.linkedin.com/in/marcosaccarola')}
                            />
                    </Col>


                </Row>
            </Container>

            <Container className='coso'></Container>
            <Container className='coso'></Container>

            <Container fluid className='my-5 h-25 rounded text-over-text-fade-title'>
                <Row>
                    <Col md={6}></Col>
                    <Col md={1} className='text-end'>
                        <section class="title-container my-5 ms-5">
                            <h1>
                                <span class="end">end</span>
                                <span class="end">of</span>
                                <span class="end">portfolio</span>
                            </h1>
                        </section>
                    </Col>
                    <Col md={5}></Col>
                </Row>
            </Container>

            <Container className='coso'></Container>
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