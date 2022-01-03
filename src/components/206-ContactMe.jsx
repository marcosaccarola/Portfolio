import { Col, Row } from "react-bootstrap"

const ContactMe=({setIndex})=>{

    return(
        <Row className='text-ultra-lime'>
            <Col className='mx-4'>
                <Row className='mx-3 py-3 my-3 justify-content-center border-blue'>
                    <span>Contact me</span>
                </Row>
                <Row className='mx-3 py-3 mt-5 justify-content-center'>
                    marco.saccarola.dev@gmail.com
                </Row>
                <Row className='mx-3 py-3 mt-5' >
                    <Col md={6}>
                        <Row className='me-5 py-3 border-blue justify-content-center'>
                            <a href='mailto:marco.saccarola.dev@gmail.com' className='text-ultra-lime'>
                                click here to open your email provider
                            </a>
                        </Row>
                    </Col>
                    <Col md={6}>
                        <Row className='ms-5 py-3 border-blue justify-content-center' onClick={()=>setIndex('Menu')}>
                            Back home
                        </Row>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default ContactMe