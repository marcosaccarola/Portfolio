import { Col, Container, Image, Row } from 'react-bootstrap'
import './000.css'
import Menu from './201-Menu'
import AboutMe from './205-AboutMe'
import ContactMe from './206-ContactMe'
import HealthAdvantage from './210-HealthAdvantage'

const Central=({index,setIndex})=>{

    return(
            <Container className='bg-dark con'>
                
                    {
                        index=='Menu'&&
                        <Menu setIndex={setIndex} />
                    }
                    {
                        index=='AboutMe'&&
                        <AboutMe />
                    }
                    {
                        index=='ContactMe'&&
                        <ContactMe />
                    }
                    {
                        index=='HealthAdvantage'&&    
                        <HealthAdvantage />
                    }
                
            </Container>
    )
}

export default Central