import { Button, Col, Container, Row } from "react-bootstrap"


const Pills=()=>{

    return(
        <Container fluid className='mt-5'>
            <Row className=''>
                <Col md={3} sm={6} className='d-flex flex-column align-items-end'>
                    <Button className='btn-dark border-0 rounded my-1 mx-1 btn-lg rounded-pill btn-yellow'>Javascript</Button>
                    <Button className='btn-dark border-0 rounded my-1 mx-1 btn-lg rounded-pill btn-green'>Typescript</Button>
                    <Button className='btn-dark border-0 rounded my-1 mx-1 btn-lg rounded-pill btn-red'>HTML5</Button>
                    <Button className='btn-dark border-0 rounded my-1 mx-1 btn-lg rounded-pill btn-red'>CSS3</Button>
                    <Button className='btn-dark border-0 rounded my-1 mx-1 btn-lg rounded-pill btn-yellow'>Git</Button>
                    <Button className='btn-dark border-0 rounded my-1 mx-1 btn-lg rounded-pill btn-green'>GitHub</Button>
                    <Button className='btn-dark border-0 rounded my-1 mx-1 btn-lg rounded-pill btn-red'>Bootstrap</Button>
                </Col>
                <Col md={3} sm={6} className='d-flex flex-column align-items-start'>
                    <Button className='btn-dark border-0 rounded my-1 mx-1 btn-lg rounded-pill btn-green'>React</Button>
                    <Button className='btn-dark border-0 rounded my-1 mx-1 btn-lg rounded-pill btn-yellow'>Hooks</Button>
                    <Button className='btn-dark border-0 rounded my-1 mx-1 btn-lg rounded-pill btn-red'>Redux</Button>
                    <Button className='btn-dark border-0 rounded my-1 mx-1 btn-lg rounded-pill btn-green'>Flexbox</Button>
                    <Button className='btn-dark border-0 rounded my-1 mx-1 btn-lg rounded-pill btn-yellow'>REST APIs</Button>
                    <Button className='btn-dark border-0 rounded my-1 mx-1 btn-lg rounded-pill btn-red'>Postman</Button>
                    <Button className='btn-dark border-0 rounded my-1 mx-1 btn-lg rounded-pill btn-green'>Vercel</Button>
                </Col>
                <Col md={3} sm={6} className='d-flex flex-column align-items-end container-fluid'>
                    <Button className='btn-dark border-0 rounded my-1 mx-1 btn-lg rounded-pill btn-green'>SQL</Button>
                    <Button className='btn-dark border-0 rounded my-1 mx-1 btn-lg rounded-pill btn-red'>NoSQL</Button>
                    <Button className='btn-dark border-0 rounded my-1 mx-1 btn-lg rounded-pill btn-yellow'>Mongoose</Button>
                    <Button className='btn-dark border-0 rounded my-1 mx-1 btn-lg rounded-pill btn-green'>Sequelize</Button>
                    <Button className='btn-dark border-0 rounded my-1 mx-1 btn-lg rounded-pill btn-yellow'>OAuth</Button>
                    <Button className='btn-dark border-0 rounded my-1 mx-1 btn-lg rounded-pill btn-green'>Multer</Button>
                    <Button className='btn-dark border-0 rounded my-1 mx-1 btn-lg rounded-pill btn-yellow'>Socket.io</Button>
                    <Button className='btn-dark border-0 rounded my-1 mx-1 btn-lg rounded-pill btn-red'>Buffer</Button>
                </Col>
                <Col md={3} sm={6} className='d-flex flex-column align-items-start'>
                    <Button className='btn-dark border-0 rounded my-1 mx-1 btn-lg rounded-pill btn-yellow'>Node</Button>
                    <Button className='btn-dark border-0 rounded my-1 mx-1 btn-lg rounded-pill btn-red'>Express</Button>
                    <Button className='btn-dark border-0 rounded my-1 mx-1 btn-lg rounded-pill btn-green'>MongoDB</Button>
                    <Button className='btn-dark border-0 rounded my-1 mx-1 btn-lg rounded-pill btn-red'>PostgreSQL</Button>
                    <Button className='btn-dark border-0 rounded my-1 mx-1 btn-lg rounded-pill btn-yellow'>GoogleStrategy</Button>
                    <Button className='btn-dark border-0 rounded my-1 mx-1 btn-lg rounded-pill btn-red'>Cors</Button>
                    <Button className='btn-dark border-0 rounded my-1 mx-1 btn-lg rounded-pill btn-green'>Jest</Button>
                    <Button className='btn-dark border-0 rounded my-1 mx-1 btn-lg rounded-pill btn-red'>Heroku</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default Pills