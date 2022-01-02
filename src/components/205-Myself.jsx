import { Col, Row } from "react-bootstrap"

const Myself=()=>{

    return(
        <>
            <Col className='mx-4 text-ultra-lime'>
                <Row className='my-5'><span>Marco Saccarola - MERN developer</span></Row>
                <Row className='my-2'>place: Venice, Italy</Row>
                <Row className='my-2'>languages: Javascript, Typescript</Row>
                <Row className='my-2'>in short: React, Redux, MongoDB, Mongoose, PostgreSQL, Sequelize, Express, Node</Row>
                {/* <Row className='my-5'><span>Marco Saccarola - MERN developer</span></Row> */}

            </Col>
        </>
    )
}

export default Myself