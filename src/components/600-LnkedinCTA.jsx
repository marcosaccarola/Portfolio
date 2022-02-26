import {Container,Row,Col} from 'react-bootstrap'


const LinkedinCTA=()=>{
    
    return(
        <Container fluid className='mb-5 h-25 rounded text-over-img-fade'>
            <Row>
                <Col md={12} className='text-end'>
                    <section class="title-container mb-5 ms-5">
                        <h1>
                            <span class="linkedin">so see you on</span>
                            <span class="linkedin">Linkedin</span>
                            <span class="linkedin">so professional!</span>
                        </h1>
                    </section>
                </Col>
            </Row>
        </Container>
    )
}

export default LinkedinCTA