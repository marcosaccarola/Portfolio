import {Container,Row,Col, Button} from 'react-bootstrap'


const Name=()=>{
    
    return(
        <Container fluid className='my-5'>
            <Row>
                <Col md={9} className='text-end'>
                    
                    <figure class="text-end">
                        <blockquote class="blockquote">
                            <p class='display-1'>Marco Saccarola</p>
                        </blockquote>
                        <figcaption class="blockquote-footer h1" style={{fontSize:24}}>
                            Junior Frontend and Backend <cite title="Source Title">MERN</cite> Developer
                        </figcaption>
                    </figure>
                </Col>
                <Col md={3}></Col>
            </Row>
        </Container>
    )
}

export default Name