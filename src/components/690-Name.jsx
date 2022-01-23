import {Container,Row,Col, Button} from 'react-bootstrap'


const Name=()=>{
    
    return(
        <Container fluid className='my-5'>
            <Row>
                <Col md={10} className='text-end'>
                    {/* <Button className='rounded-pill px-5 pb-2 bg-black border-0'> */}

                    <figure class="text-end">
                        <blockquote class="blockquote">
                            <p class='txt-animation' style={{fontSize:"5rem"}}>Marco Saccarola</p>
                        </blockquote>
                        <figcaption class="blockquote-footer h1 me-3" style={{fontSize:22}}>
                            Junior Frontend and Backend <cite title="Source Title">MERN</cite> Developer
                        </figcaption>
                    </figure>
                    {/* </Button> */}
                </Col>
                <Col md={2}></Col>
            </Row>
        </Container>
    )
}

export default Name