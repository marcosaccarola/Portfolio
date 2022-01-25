import {Container,Row,Col, Button} from 'react-bootstrap'


const LinkedinCTA=()=>{
    
    return(
        <Container fluid className='mb-5 h-25 rounded text-over-img-fade'>
            <Row>
                <Col md={12} className='text-end'>
                    {/* <Button className='rounded-pill px-5 pb-2 bg-black border-0'> */}

                    <section class="title-container mb-5 ms-5">
                        <h1>
                            <span class="linkedin">so see you on</span>
                            <span class="linkedin">Linkedin</span>
                            <span class="linkedin">so professional!</span>
                        </h1>
                    </section>
                    {/* </Button> */}
                </Col>
                {/* <Col md={4}></Col> */}
            </Row>
        </Container>
    )
}

export default LinkedinCTA