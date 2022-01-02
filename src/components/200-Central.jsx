import { Col, Container, Image, Row } from 'react-bootstrap'
import './000.css'
import Menu from './201-Menu'
import Myself from './205-Myself'
import HealthAdvantage from './210-HealthAdvantage'

const Central=({index,setIndex})=>{

    return(
            <Container className='bg-dark con'>
                <Row className='text-flux box'>
                    {
                        index=='Menu'&&
                        <Menu />
                    }
                    {
                        index=='Myself'&&
                        <Myself />
                    }
                    {
                        index=='HealthAdvantage'&&    
                        <HealthAdvantage />
                    }
                </Row>
            </Container>
    )
}

export default Central