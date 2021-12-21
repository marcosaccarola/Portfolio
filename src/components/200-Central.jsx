import { Col, Container, Image, Row } from 'react-bootstrap'
import './000.css'
import ha from '../assets/ha.png'

const Central=()=>{
    const openHA=()=>{
        // alert('under development')
        // console.log('open window')
        // e.preventDefault()
        const URL='https://health-advantage.vercel.app/'
        window.open(URL, '_blank', 'location=yes,height=570,width=520,scrollbars=yes,status=yes')
    }

    return(
            <Container className='bg-dark con'>
                <Row className='text-blue box'>

                    <Col lg={7} className=' my-auto'>
                        <Image src={ha} className='img-fluid border-blue' />
                    </Col>

                    <Col lg={5} className=' my-auto px-3'>
                        <Col xs={12} className='text-start mt-3 mb-5'>
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
                            level_<br/>
                            basic ui && functionalities<br/>
                        </Col>
                        <Col xs={12} className='text-start my-5'>
                            technologies_<br/>
                            [ mongoDb, expressJs, reactJs, nodeJs ]
                        </Col>
                        <Col xs={12} className='text-start my-5'>
                            npm_<br/>
                            [ bootstrap@4, react-bootstrap, react-icons, bcrypt, cors, mongoose, dotenv, nodemon ]
                        </Col>
                        {/* <Col xs={12} className='text-start mb-3'>
                            <span className='border-blue px-3 py-1'>gitHub fe_ (link)</span>                                        
                        </Col>
                        <Col xs={12} className='text-start mb-3'>
                            <span className=' border-blue px-3 py-1'>gitHub be_ (link)</span>                                            
                        </Col> */}
                        <Col xs={12} className='text-start mb-5'>
                            <span className=' border-blue px-3 py-1' onClick={openHA}>url_ (link)</span>                                            
                        </Col>
                    </Col>

                </Row>
            </Container>
    )
}

export default Central