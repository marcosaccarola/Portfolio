import './600-style.css'
import { Button, Col, Container, Row } from "react-bootstrap"


const Pills=()=>{

    return(
        <Container fluid className='mt-5'>
            <Row className=''>
                <Col md={3} sm={6} className='d-flex flex-column align-items-end'>
                    <Button className='btn-dark border-0 rounded my-3 mx-1 btn-lg rounded-pill'>Javascript</Button>
                    <Button className='btn-dark border-0 rounded my-3 mx-1 btn-lg rounded-pill'>Typescript</Button>
                    <Button className='btn-dark border-0 rounded my-3 mx-1 btn-lg rounded-pill'>HTML5</Button>
                    <Button className='btn-dark border-0 rounded my-3 mx-1 btn-lg rounded-pill'>CSS3</Button>
                    <Button className='btn-dark border-0 rounded my-3 mx-1 btn-lg rounded-pill'>Git</Button>
                    <Button className='btn-dark border-0 rounded my-3 mx-1 btn-lg rounded-pill'>GitHub</Button>
                </Col>
                <Col md={3} sm={6} className='d-flex flex-column align-items-start'>
                    <Button className='btn-dark border-0 rounded my-3 mx-1 btn-lg rounded-pill'>React</Button>
                    <Button className='btn-dark border-0 rounded my-3 mx-1 btn-lg rounded-pill'>Hooks</Button>
                    <Button className='btn-dark border-0 rounded my-3 mx-1 btn-lg rounded-pill'>Redux</Button>
                    <Button className='btn-dark border-0 rounded my-3 mx-1 btn-lg rounded-pill'>Flexbox</Button>
                    <Button className='btn-dark border-0 rounded my-3 mx-1 btn-lg rounded-pill'>Bootstrap</Button>
                    <Button className='btn-dark border-0 rounded my-3 mx-1 btn-lg rounded-pill'>REST APIs</Button>
                    <Button className='btn-dark border-0 rounded my-3 mx-1 btn-lg rounded-pill'>Postman</Button>
                    <Button className='btn-dark border-0 rounded my-3 mx-1 btn-lg rounded-pill'>Vercel</Button>
                </Col>
                <Col md={3} sm={6} className='d-flex flex-column align-items-end container-fluid'>
                    <Button className='btn-dark border-0 rounded my-3 mx-1 btn-lg rounded-pill'>SQL</Button>
                    <Button className='btn-dark border-0 rounded my-3 mx-1 btn-lg rounded-pill'>NoSQL</Button>
                    <Button className='btn-dark border-0 rounded my-3 mx-1 btn-lg rounded-pill'>Mongoose</Button>
                    <Button className='btn-dark border-0 rounded my-3 mx-1 btn-lg rounded-pill'>Sequelize</Button>
                    <Button className='btn-dark border-0 rounded my-3 mx-1 btn-lg rounded-pill'>OAuth</Button>
                    <Button className='btn-dark border-0 rounded my-3 mx-1 btn-lg rounded-pill'>Socket.io</Button>
                    <Button className='btn-dark border-0 rounded my-3 mx-1 btn-lg rounded-pill'>Multer</Button>
                    <Button className='btn-dark border-0 rounded my-3 mx-1 btn-lg rounded-pill'>Buffer</Button>
                </Col>
                <Col md={3} sm={6} className='d-flex flex-column align-items-start'>
                    <Button className='btn-dark border-0 rounded my-3 mx-1 btn-lg rounded-pill'>Node</Button>
                    <Button className='btn-dark border-0 rounded my-3 mx-1 btn-lg rounded-pill'>Express</Button>
                    <Button className='btn-dark border-0 rounded my-3 mx-1 btn-lg rounded-pill'>MongoDB</Button>
                    <Button className='btn-dark border-0 rounded my-3 mx-1 btn-lg rounded-pill'>PostgreSQL</Button>
                    <Button className='btn-dark border-0 rounded my-3 mx-1 btn-lg rounded-pill'>GoogleStrategy</Button>
                    <Button className='btn-dark border-0 rounded my-3 mx-1 btn-lg rounded-pill'>Cors</Button>
                    <Button className='btn-dark border-0 rounded my-3 mx-1 btn-lg rounded-pill'>Jest</Button>
                    <Button className='btn-dark border-0 rounded my-3 mx-1 btn-lg rounded-pill'>Heroku</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default Pills