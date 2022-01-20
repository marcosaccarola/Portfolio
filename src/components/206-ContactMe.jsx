import { Col, Row } from "react-bootstrap"

const ContactMe=({setIndex})=>{

    return(
        <Row className='text-ultra-lime'>
            <Col className='mx-4'>
                <Row className='mx-3 my-3 py-3 justify-content-center border-flux text-flux'>
                    <span>Marco Saccarola MERN developer</span>
                </Row>
                <Row className='pt-5 mt-5 justify-content-center'>
                    marco.saccarola.dev@gmail.com
                </Row>
                <Row className='py-3 my-3 justify-content-center'>
                    linkedin.com/in/marcosaccarola
                </Row>
                <Row className='pb-5 mb-5 justify-content-center'>
                    github.com/marcosaccarola
                </Row>
                <Row className='mx-3 py-3 mt-5' >
                    <Col md={5}>
                        <Row className='my-3 py-3 border-flux justify-content-center text-flux' onClick={()=>setIndex('Menu')}>
                            Back home
                        </Row>
                    </Col>
                    <Col md={2}></Col>
                    <Col md={5}>
                        <Row className='my-3 py-3 border-flux justify-content-center text-flux'>
                            <a href='mailto:marco.saccarola.dev@gmail.com'>
                                Send email
                            </a>
                        </Row>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default ContactMe