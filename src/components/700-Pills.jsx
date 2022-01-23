import './600-style.css'
import { Button, Col, Container, Row } from "react-bootstrap"


const Pills=()=>{

    return(
        <Container fluid className='mt-5'>
            <Row className='bg-black'>
                <Col md={3} sm={6} className='d-flex flex-column align-items-end'>
                    <Button className='btn-dark rounded my-3 mx-3 btn-lg border border-light rounded-pill'>Javascript</Button>
                    <Button className='btn-dark rounded my-3 mx-3 btn-lg border border-light rounded-pill'>Typescript</Button>
                    <Button className='btn-fluid btn-dark rounded my-3 mx-3 btn-lg border border-light rounded-pill'>HTML5</Button>
                    <Button className='btn-dark rounded my-3 mx-3 btn-lg border border-light rounded-pill'>CSS3</Button>
                    <Button className='btn-dark rounded my-3 mx-3 btn-lg border border-light rounded-pill'>Git</Button>
                    <Button className='btn-dark rounded my-3 mx-3 btn-lg border border-light rounded-pill'>GitHub</Button>
                </Col>
                <Col md={3} sm={6} className='d-flex flex-column align-items-start'>
                    <Button className='btn-dark rounded my-3 mx-3 btn-lg border border-light rounded-pill'>React</Button>
                    <Button className='btn-dark rounded my-3 mx-3 btn-lg border border-light rounded-pill'>Hooks</Button>
                    <Button className='btn-fluid btn-dark rounded my-3 mx-3 btn-lg border border-light rounded-pill'>Redux</Button>
                    <Button className='btn-dark rounded my-3 mx-3 btn-lg border border-light rounded-pill'>Flexbox</Button>
                    <Button className='btn-dark rounded my-3 mx-3 btn-lg border border-light rounded-pill'>Bootstrap</Button>
                    <Button className='btn-dark rounded my-3 mx-3 btn-lg border border-light rounded-pill'>REST APIs</Button>
                    <Button className='btn-dark rounded my-3 mx-3 btn-lg border border-light rounded-pill'>Postman</Button>
                    <Button className='btn-dark rounded my-3 mx-3 btn-lg border border-light rounded-pill'>Vercel</Button>
                </Col>
                <Col md={3} sm={6} className='d-flex flex-column align-items-end container-fluid'>
                    <Button className='btn-dark rounded my-3 mx-3 btn-lg border border-light rounded-pill'>SQL</Button>
                    <Button className='btn-dark rounded my-3 mx-3 btn-lg border border-light rounded-pill'>NoSQL</Button>
                    <Button className='btn-fluid btn-dark rounded my-3 mx-3 btn-lg border border-light rounded-pill'>Mongoose</Button>
                    <Button className='btn-dark rounded my-3 mx-3 btn-lg border border-light rounded-pill'>Sequelize</Button>
                    <Button className='btn-dark rounded my-3 mx-3 btn-lg border border-light rounded-pill'>OAuth</Button>
                    <Button className='btn-dark rounded my-3 mx-3 btn-lg border border-light rounded-pill'>Socket.io</Button>
                    <Button className='btn-dark rounded my-3 mx-3 btn-lg border border-light rounded-pill'>Multer</Button>
                    <Button className='btn-dark rounded my-3 mx-3 btn-lg border border-light rounded-pill'>Buffer</Button>
                </Col>
                <Col md={3} sm={6} className='d-flex flex-column align-items-start'>
                    <Button className='btn-dark rounded my-3 mx-3 btn-lg border border-light rounded-pill'>Node</Button>
                    <Button className='btn-dark rounded my-3 mx-3 btn-lg border border-light rounded-pill'>Express</Button>
                    <Button className='btn-fluid btn-dark rounded my-3 mx-3 btn-lg border border-light rounded-pill'>MongoDB</Button>
                    <Button className='btn-dark rounded my-3 mx-3 btn-lg border border-light rounded-pill'>PostgreSQL</Button>
                    <Button className='btn-dark rounded my-3 mx-3 btn-lg border border-light rounded-pill'>GoogleStrategy</Button>
                    <Button className='btn-dark rounded my-3 mx-3 btn-lg border border-light rounded-pill'>Cors</Button>
                    <Button className='btn-dark rounded my-3 mx-3 btn-lg border border-light rounded-pill'>Jest</Button>
                    <Button className='btn-dark rounded my-3 mx-3 btn-lg border border-light rounded-pill'>Heroku</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default Pills