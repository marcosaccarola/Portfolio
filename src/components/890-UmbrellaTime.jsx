import {Container,Row,Col, Button} from 'react-bootstrap'


const UmbrellaTimeCTA=()=>{
    
    return(
        <Container fluid className='mb-5 h-25 rounded text-over-img-fade'>
            <Row>
                <Col md={12} className='mb-4'>
                    {/* <Button className='rounded-pill px-5 pb-2 bg-black border-0'> */}

                    <section class="title-container mb-5 ms-5"  onClick={()=>window.open('https://hex-to-base64-converter.vercel.app/')}>
                        <h1>
                            <span class="converter">•</span>
                            <span class="converter">it's raining?</span>
                            <span class="converter">oh noooo!</span>
                        </h1>
                    </section>
                    {/* </Button> */}
                </Col>
                {/* <Col md={4}></Col> */}
            </Row>
        </Container>
    )
}

export default UmbrellaTimeCTA