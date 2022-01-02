import { Col, Container, Image, Row } from 'react-bootstrap'
import './000.css'
import HealthAdvantage from './210-HealthAdvantage'

const Central=({index,setIndex})=>{

    return(
            <Container className='bg-dark con'>
                <Row className='text-flux box'>
                    {
                    index=='HealthAdvantage'&&    
                    <HealthAdvantage />
                    }


                </Row>
            </Container>
    )
}

export default Central