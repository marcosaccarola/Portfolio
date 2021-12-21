import { Col, Container, Image, Row } from 'react-bootstrap'
import './000.css'
import ha from '../assets/ha.png'

const Central=()=>{

    return(
            <Container className='bg-dark con'>
                <Row>
                    <Col md={6} className=''>
                        <Image src={ha} className='screen' />
                    </Col>
                    <Col md={6} className='bg-warning'>
                        <Col md={12} className='text-flux bg-info box-little'>
                            something
                        </Col>
                        <Col md={12} className='text-flux bg-danger box-little'>
                            something
                        </Col>
                    </Col>
                </Row>
            </Container>
    )
}

export default Central