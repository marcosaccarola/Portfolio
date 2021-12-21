import { Col, Container, Image, Row } from 'react-bootstrap'
import './000.css'
import ha from '../assets/ha.png'

const Central=()=>{

    return(
            <Container className='bg-dark con'>
                <Row className='text-blue box'>

                    <Col lg={7} className=' my-auto'>
                        <Image src={ha} className='img-fluid border-blue' />
                    </Col>


                    <Col lg={5} className=' my-auto px-3'>
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