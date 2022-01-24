import './999-style.scss'
import { Col, Container, Row } from "react-bootstrap"
import avatar from '../assets/linkedin-profilo.jpg'
import Name from "./690-Name"
import Pills from "./700-Pills"

const Body=()=>{

    return(
        <>
        <Container fluid className=''>


            <Row>
                <Col md={7}>
                    
                    <Name />
                    {/* <Pills /> */}
                </Col>

                <Col md={5} className='mt-5 d-flex justify-content-center'>
                    <img
                        alt=""
                        src={avatar}
                        width="600"
                        height="600"
                        className="d-inline-block align-top rounded-circle img-fluid"
                    />
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default Body