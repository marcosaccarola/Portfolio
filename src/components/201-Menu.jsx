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
                <Row>
                    <Col md={2}>
                        <Row className='mx-3 py-3 my-3 justify-content-center border-blue'>
                            <AiOutlineArrowLeft size={36} />
                        </Row>
                    </Col>
                    <Col md={8}>
                        {/* <Row> */}
                            <img src={ha} className='img-fluid img-preview' />
                        {/* </Row> */}
                    </Col>
                    <Col md={2}>
                        <Row className='mx-3 py-3 my-3 justify-content-center border-blue'>
                            <AiOutlineArrowRight size={36} />
                        </Row>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default Menu