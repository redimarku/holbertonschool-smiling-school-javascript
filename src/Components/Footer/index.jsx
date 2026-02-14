import { Container, Row, Col } from "react-bootstrap";
import logo from '../../images/logo.png';
import facebook from '../../images/facebook.png';
import instagram from '../../images/instagram.png';
import twiter from '../../images/twiter.png';
import './index.css'


const Footer = () =>{
    return(
        <footer>
        <Container>
            <Row>
                <Col xs={3} md={3} >
                    <img src={logo}  alt="" style={{marginTop:"80px"}}></img>
                   
                </Col>

                <Col xs={6} md={6}></Col>

                <Col xs={3} md={3}>
                    <ul className="menu-container-footer">
                        <li><img src={facebook} alt="facebook-logo" /> </li>
                        <li><img src={twiter} alt="twiter-logo" /> </li>
                        <li><img src={instagram} alt="instagram-logo" /> </li>
                    </ul>
                </Col>

            </Row>
        </Container>
        <span>&#169;smileschool 2020</span>
        </footer>
    );
}

export default Footer;