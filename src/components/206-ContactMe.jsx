import { Col, Row } from "react-bootstrap"

const ContactMe=()=>{

    return(
        <Row className='text-ultra-lime'>
            <Col className='mx-4'>
                <Row className='mx-3 py-3 my-3 justify-content-center border-blue'><span>Contact me</span></Row>
                <Row className='mx-3 py-3 mt-5'>
                    copy / paste my email address: marco.saccarola.dev@gmail.com
                </Row>
                <Row className='mx-3 py-3'>or</Row>
                <Col md={6}>
                    <Row className='mx-3 py-3 my-5 border-blue justify-content-center'>
                        <a href='mailto:marco.saccarola.dev@gmail.com' className='text-ultra-lime'>
                            click here to open your email provider
                        </a>
                    </Row>
                </Col>
            </Col>
        </Row>
    )
}

export default ContactMe