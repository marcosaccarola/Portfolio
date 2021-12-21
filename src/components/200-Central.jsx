import { Col, Container, Image, Row } from 'react-bootstrap'
import './000.css'
import ha from '../assets/ha.png'

const Central=()=>{

    return(
            <Container className='bg-dark con'>
                <Row>
                    <Col lg={6} className='my-auto'>
                        <Image src={ha} className='screen' />
                    </Col>
                    <Col lg={6} className='px-5'>
                        <Row lg={12} className='text-blue box-little'>
                            <Col lg={12} className='text-start my-auto'>
                                name_ <br/><br/>
                                health advantage
                            </Col>
                            <Col lg={12} className='text-start my-auto'>
                                abstract_<br/><br/>
                                ha is a platform that connects patients with care workers in few clicks
                            </Col>
                        </Row>
                        <Row xs={12} className='text-blue box-little'>
                            <Col xs={6} className='text-start my-auto'>
                                technologies_
                            </Col>
                            <Col xs={6} className='text-start my-auto'>
                                MongoDB<br/>
                                ExpressJS<br/>
                                ReactJS<br/>
                                NodeJS<br/>
                                Bootstrap 4<br/>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
    )
}

export default Central