import { Col, Container, Image, Row } from 'react-bootstrap'
import './000.css'
import ha from '../assets/ha.png'

const Central=()=>{

    return(
            <Container className='bg-dark con'>
                <Row className='text-blue'>
                    <Col lg={7} className='box-little'>
                        <Image src={ha} className='img-fluid my-5' />
                    </Col>
                    {/* <Col xs={6} className='box-little row  px-5'>
                    </Col> */}

                    {/* <Col xs={6} className='box-little row  px-5'>
                        <Col xs={12} className='text-start my-auto'>
                        </Col>
                    </Col> */}

                    <Col className='box-little my-auto px-2'>
                        <Col xs={12} className='text-start my-5'>
                            name_ <br/>
                            health advantage
                        </Col>
                        <Col xs={12} className='text-start my-5'>
                            type_ <br/>
                            exercise
                        </Col>
                        <Col xs={12} className='text-start my-5'>
                            abstract_<br/>
                            ha is a platform that connects patients with care workers in few clicks
                        </Col>
                        <Col xs={12} className='text-start my-5'>
                            technologies_<br/>
                            [ mongoDb, expressJs, reactJs, nodeJs, bootstrap4 ]
                        </Col>
                    </Col>

                </Row>
            </Container>
    )
}

export default Central