import { Col, Row } from "react-bootstrap"

const Myself=()=>{

    return(
        <Row className='text-ultra-lime box align-content-start'>
            <Col className='mx-4'>
                <Row className='mx-3 py-3 my-3 justify-content-center border-blue'><span>Marco Saccarola MERN developer</span></Row>
                <Row className='mx-3 py-3'>Place: Venice, Italy</Row>
                <Row className='mx-3 py-3'>Languages: Javascript, Typescript</Row>
                <Row className='mx-3 py-3'>Front-end: HTML5, CSS3, Bootstrap 4&5, Flexbox, React, React-router-dom, Redux, Redux-thunk, Socket.io</Row>
                <Row className='mx-3 py-3'>Back-end: Express, Node, Cors, Heroku, Vercel, Cloudinary, Multer</Row>
                <Row className='mx-3 py-3'>DB: MongoDB, Mongoose, PostgreSQL, Sequelize</Row>
            </Col>
        </Row>
    )
}

export default Myself