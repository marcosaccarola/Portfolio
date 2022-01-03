import { Col, Image, Row } from "react-bootstrap"
import {AiOutlineArrowLeft,AiOutlineArrowRight} from 'react-icons/ai'
import ha from '../assets/ha.png'

const Menu=()=>{

    return(
        <Row className='text-ultra-lime box align-content-start'>
            <Col md={12}>
                <Row className='mx-3 py-3 my-3 justify-content-center border-blue'>Marco Saccarola MERN developer</Row>
            </Col>
            <Col md={6}>
                <Row className='mx-3 py-3 my-3 justify-content-center border-blue'>detail & skills</Row>
            </Col>
            <Col md={6}>
                <Row className='mx-3 py-3 my-3 justify-content-center border-blue'>contact me</Row>
            </Col>
            <Col md={12}>
                <Row className='my-3'>
                    <Col md={2} className='my-auto'>
                        <AiOutlineArrowLeft size={24} />
                    </Col>
                    <Col md={8}>
                        <img src={ha} className='img-fluid img-preview' />
                    </Col>
                    <Col md={2} className='my-auto'>
                        <AiOutlineArrowRight size={24} />
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default Menu