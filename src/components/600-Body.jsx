import { Col, Container, Row } from "react-bootstrap"
import avatar from '../assets/linkedin-profilo.jpg'

const Body=()=>{

    return(
        <>
        <Container fluid className=' text-black'>
            <Row>
                <Col md={4}>
                    CIAO
                </Col>
                <Col md={4}>CIAO</Col>
                <Col md={4}>
                    <img
                        alt=""
                        src={avatar}
                        // width="500"
                        // height="500"
                        className="d-inline-block align-top mt-3 rounded-circle img-fluid"
                    />
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default Body