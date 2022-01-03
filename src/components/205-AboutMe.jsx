import { Col, Row } from "react-bootstrap"

const Myself=({setIndex})=>{

    return(
        <Row className='text-ultra-lime '>
            <Col className='mx-4'>
                <Row className='mx-3 py-3 my-3 justify-content-center border-blue'><span>Marco Saccarola MERN developer</span></Row>
                <Row className='mx-3 py-3 mt-5'>
                    <Col sm={2}>
                        <Row>Place:</Row>
                    </Col>
                    <Col sm={10}>
                        <Row className='text-start'>Venice, Italy</Row>
                    </Col>
                </Row>
                <Row className='mx-3 py-3'>
                    <Col sm={2}>
                        <Row>Languages:</Row>
                    </Col>
                    <Col sm={10}>
                        <Row className='text-start'>Javascript, Typescript</Row>
                    </Col>
                </Row>
                <Row className='mx-3 py-3'>
                    <Col sm={2}>
                        <Row>Front-end:</Row>
                    </Col>
                    <Col sm={10}>
                        <Row className='text-start'>HTML5, CSS3, Bootstrap 4&5, Flexbox, React, React-router-dom, Redux, Redux-thunk, Socket.io</Row>
                    </Col>
                </Row>
                <Row className='mx-3 py-3'>
                    <Col sm={2}>
                        <Row>Back-end:</Row>
                    </Col>
                    <Col sm={10}>
                        <Row className='text-start'>Express, Node, Cors, Heroku, Vercel, Cloudinary, Multer</Row>
                    </Col>
                </Row>
                <Row className='mx-3 py-3'>
                    <Col sm={2}>
                        <Row>DB:</Row>
                    </Col>
                    <Col sm={10}>
                        <Row className='text-start'>MongoDB, Mongoose, PostgreSQL, Sequelize</Row>
                    </Col>
                </Row>
                <Row className='mx-3 py-3 mt-5' >
                    <Col md={5}>
                        <Row className='py-3 border-blue justify-content-center' onClick={()=>setIndex('ContactMe')}>
                            Contact me
                        </Row>
                    </Col>
                    <Col md={2}></Col>
                    <Col md={5}>
                        <Row className='py-3 border-blue justify-content-center' onClick={()=>setIndex('Menu')}>
                            Back home
                        </Row>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default Myself