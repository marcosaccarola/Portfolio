import {Container,Row,Col, Button} from 'react-bootstrap'


const GitHubCTA=()=>{
    
    return(
        <Container fluid className='mb-5 h-25 rounded text-over-text-fade'>
            <Row>
                <Col md={12} className='text-end'>
                    <section class="title-container mb-5 ms-5">
                        <h1>
                            <span class="github">taste my</span>
                            <span class="github">github profile</span>
                            <span class="title">sweets inside!</span>
                        </h1>
                    </section>
                </Col>
            </Row>
        </Container>
    )
}

export default GitHubCTA