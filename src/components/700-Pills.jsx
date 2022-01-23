import { Button, Col, Container, Row } from "react-bootstrap"


const Pills=()=>{

    return(
        <Container fluid className='mt-5'>
            <Row className='bg-black'>
                <Col md={3} className='d-flex flex-column align-items-end'>
                    <Button className='btn-info rounded my-3 mx-3 btn-lg border border-light rounded-pill'>Javascript</Button>
                    <Button className='btn-info rounded my-3 mx-3 btn-lg'>Typescript</Button>
                    <Button className='btn-info rounded my-3 mx-3 btn-lg'>HTML5</Button>
                    <Button className='btn-info rounded my-3 mx-3 btn-lg'>CSS3</Button>
                </Col>
                <Col md={3} className='d-flex flex-column align-items-start'>
                    <Button className='btn-info rounded my-3 mx-3 btn-lg'>React</Button>
                    <Button className='btn-info rounded my-3 mx-3 btn-lg'>Hooks</Button>
                    <Button className='btn-info rounded my-3 mx-3 btn-lg'>Redux</Button>
                    <Button className='btn-info rounded my-3 mx-3 btn-lg'>Flexbox</Button>
                    <Button className='btn-info rounded my-3 mx-3 btn-lg'>Bootstrap</Button>
                    <Button className='btn-info rounded my-3 mx-3 btn-lg'>REST APIs</Button>
                    <Button className='btn-info rounded my-3 mx-3 btn-lg'>Postman</Button>
                    <Button className='btn-info rounded my-3 mx-3 btn-lg'>Vercel</Button>
                </Col>
                <Col md={3} className='d-flex flex-column align-items-end'>
                    <Button className='btn-info rounded my-3 mx-3 btn-lg'>SQL</Button>
                    <Button className='btn-info rounded my-3 mx-3 btn-lg'>NoSQL</Button>
                    <Button className='btn-info rounded my-3 mx-3 btn-lg'>Mongoose</Button>
                    <Button className='btn-info rounded my-3 mx-3 btn-lg'>Sequelize</Button>
                    <Button className='btn-info rounded my-3 mx-3 btn-lg'>OAuth</Button>
                    <Button className='btn-info rounded my-3 mx-3 btn-lg'>Socket.io</Button>
                    <Button className='btn-info rounded my-3 mx-3 btn-lg'>Git</Button>
                    <Button className='btn-info rounded my-3 mx-3 btn-lg'>GitHub</Button>
                </Col>
                <Col md={3} className='d-flex flex-column align-items-start'>
                    <Button className='btn-info rounded my-3 mx-3 btn-lg'>Node</Button>
                    <Button className='btn-info rounded my-3 mx-3 btn-lg'>Express</Button>
                <Button className='btn-info rounded my-3 mx-3 btn-lg'>MongoDB</Button>
                    <Button className='btn-info rounded my-3 mx-3 btn-lg'>PostgreSQL</Button>
                    <Button className='btn-info rounded my-3 mx-3 btn-lg'>GoogleStrategy</Button>
                    <Button className='btn-info rounded my-3 mx-3 btn-lg'>Cors</Button>
                    <Button className='btn-info rounded my-3 mx-3 btn-lg'>Heroku</Button>
                    <Button className='btn-info rounded my-3 mx-3 btn-lg'>Jest</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default Pills