import { Col, Container, Row } from "react-bootstrap"
import avatar from '../assets/linkedin-profilo.jpg'
import Pills from "./700-Pills"

const Body=()=>{

    return(
        <>
        <Container fluid className=' text-black'>
            <Row>
                <Col md={8}>
                    <Pills />
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