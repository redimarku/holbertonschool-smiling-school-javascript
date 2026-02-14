import "./index.css";
import signal from "../images/signal.png";
import play from "../images/play.png";
import logo from "../images/logo.png";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaCheckCircle } from "react-icons/fa";
import '../Components/Header';
import Testimonial from "../Components/Testimonial";

const features = [
    { name: "Unlimited access to all tutorials", three: true, year: true },
    { name: "Access SmileSchool private forum", three: true, year: true },
    { name: "Access Smiles contests & Smiles Analysis", three: true, year: true },
    { name: "Get a free toothbrush", three: false, year: true },
    { image: signal, name: "Exclusive discount on all Signal products", three: false, year: true }
];

const pricing = [
    {
        buttonName: 'Buy 3 months',
        price: "$89.99",
        pricePerMonth: "$29.99/month"
    },
    {

        buttonName: 'Buy 1 year',
        price: "$89.99",
        pricePerMonth: "$29.99/month"
    },


]


const NewPricing = () => {
    return (
        <>
            <div className="pricing-header text-white">
                <Container className="text-center py-5">
                    <img src={play} alt="play icon" height={50} className="mb-5" />
                    <h1>What is
                        <span>
                            <img src={logo} alt="logo" height={30} />

                        </span>?
                    </h1>
                    <h2 className="mb-3 text-bold"> GO PRO</h2>
                    <Row className="justify-content-center">
                        <Col md={4}>

                        </Col>
                        <Col md={4}>
                            <Button variant="primary">Buy 3 months</Button>
                        </Col>
                        <Col md={4}>
                            <Button variant="primary">Buy 1 year</Button>
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col md={4}>
                        <h4>Access SmileSchool</h4>

                        </Col>
                        <Col md={4}>
                        <FaCheckCircle />
                            
                        </Col>
                        <Col md={4}>
                         <FaCheckCircle />
                        </Col>
                    </Row>
                     <Row className="mt-3">
                        <Col md={4}>
                        <h4>Access SmileSchool</h4>

                        </Col>
                        <Col md={4}>
                        <FaCheckCircle />
                            
                        </Col>
                        <Col md={4}>
                         <FaCheckCircle />
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col md={2}>
                        <img src={signal} width={"120px"} style={{marginLeft:"80px"}}/>
                        </Col>
                        <Col md={6}>
                        </Col>
                        <Col md={4}>
                        <FaCheckCircle />

                        </Col>
                    </Row>

                </Container>
            </div>
            <Testimonial/>
            <div>
                <Container>
                    <h1 className="text-center">F.A.Q</h1>
                    <Row className="justify-content-center">
                        <Col md={6}>
                            <h2>How does this work?</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </Col>
                        <Col md={6}>
                            <h2>How does this work?</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Col md={6}>
                            <h2>How does this work?</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </Col>
                        <Col md={6}>
                            <h2>How does this work?</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default NewPricing