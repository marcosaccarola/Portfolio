import { Col, Row } from "react-bootstrap"

const Myself=()=>{

    return(
        <>
            <Col className='mx-5 my-5'>
                <Row><span>MERN developer</span></Row>
                <Row className='mt-5'>name:</Row>
                <Row className='ms-1 my-3 text-ultra-lime'>Marco Saccarola</Row>
                <Row className='mt-5'>place:</Row>
                <Row className='ms-1 my-3 text-ultra-lime'>northeastern Italy</Row>
                <Row className='mt-5'>languages:</Row>
                <Row className='ms-1 my-3 text-ultra-lime'>Javascript / Typescript</Row>
                <Row className='mt-5'>in short:</Row>
                <Row className='ms-1 my-3 text-ultra-lime'>Mongo / Express / React / Node</Row>
                <Row className='mt-5'>deeply:</Row>
                <Row className='ms-1 my-3 text-ultra-lime'>PostrgreSQl / Redux / Heroku / Vercel / GitHub</Row>

            </Col>
        </>
    )
}

export default Myself