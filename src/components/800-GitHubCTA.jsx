import {Container,Row,Col, Button} from 'react-bootstrap'


const GitHubCTA=()=>{
    
    return(
        <Container fluid className='mb-5 h-25 rounded'>
            <Row>
                <Col md={12} className='text-end'>
                    {/* <Button className='rounded-pill px-5 pb-2 bg-black border-0'> */}

                    <section class="title-container mb-5 ms-5">
                        <h1>
                            <span class="github">visit my</span>
                            <span class="github">github profile!</span>
                            <span class="title">sweets inside</span>
                        </h1>
                    </section>
                    {/* </Button> */}
                </Col>
                {/* <Col md={4}></Col> */}
            </Row>
        </Container>
    )
}

export default GitHubCTA