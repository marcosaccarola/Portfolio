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
                </Row>
            </Container>
    )
}

export default Central