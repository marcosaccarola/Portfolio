import './999-style.css'
import { Col, Container, Row } from "react-bootstrap"
import avatar from '../assets/linkedin-profilo.jpg'
import Name from "./690-Name"
import Pills from "./700-Pills"

const Body=()=>{

    return(
        <>
        <Container fluid className=''>


            <Row>
                <Col md={8}>
                    <Pills />
                    <Name />
                </Col>

                <Col md={4} className='mt-5'>
                    <img
                        alt=""
                        src={avatar}
                        // width="500"
                        // height="500"
                        className="d-inline-block align-top rounded-circle img-fluid"
                    />
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default Body