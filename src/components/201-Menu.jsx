import { Col, Image, Row } from "react-bootstrap"
import {AiOutlineArrowLeft,AiOutlineArrowRight} from 'react-icons/ai'
import ha from '../assets/ha.png'

const Menu=({setIndex})=>{
    const openHA=()=>{
        const URL='https://health-advantage.vercel.app/'
        window.open(URL, '_blank', 'location=yes,height=570,width=520,scrollbars=yes,status=yes')
    }

    return(
        <Row className='text-ultra-lime box align-content-start'>

            <Col md={12}>
                <Row className='mx-3 py-3 my-3 justify-content-center border-blue' onClick={()=>setIndex('AboutMe')}>
                    Marco Saccarola MERN developer
                </Row>
            </Col>
            <Col md={6}>
                <Row className='mx-3 py-3 my-3 justify-content-center border-blue' onClick={()=>setIndex('AboutMe')}>
                    about me
                </Row>
            </Col>
            <Col md={6}>
                <Row className='mx-3 py-3 my-3 justify-content-center border-blue' onClick={()=>setIndex('ContactMe')}>
                    contact me
                </Row>
            </Col>

            <Col md={12}>
                <Row className='my-2'>
                    <Col md={2} className='my-auto'>
                        <AiOutlineArrowLeft size={24} className='my-3' />
                    </Col>
                    <Col md={8}>
                        <img src={ha} className='img-fluid img-preview' onClick={openHA} />
                    </Col>
                    <Col md={2} className='my-auto'>
                        <AiOutlineArrowRight size={24} className='my-3' />
                    </Col>
                </Row>
            </Col>

        </Row>
    )
}

export default Menu