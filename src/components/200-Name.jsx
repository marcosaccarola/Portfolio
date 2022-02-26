import {Container,Row,Col} from 'react-bootstrap'


const Name=()=>{
    
    return(
        <Container fluid className='my-5 h-25 rounded text-over-text-fade-title'>
            <Row>
                <Col md={12} className='text-end'>
                    <section class="title-container my-5 ms-5">
                        <h1>
                            <span class="title">Marco Saccarola</span>
                            <span class="title">MERN Developer</span>
                            <span class="title">Frontend Backend</span>
                        </h1>
                    </section>
                </Col>
            </Row>
        </Container>
    )
}

export default Name