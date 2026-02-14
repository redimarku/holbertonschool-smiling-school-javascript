import "./index.css"
import play from "../../images/play.png"
import logo from "../../images/logo.png"
import signal from "../../images/signal.png"
import { Container, Row, Col } from "react-bootstrap"
import { FaCheckCircle } from "react-icons/fa"
import '../Header/index.jsx' 

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
        price: "$199.99",
        pricePerMonth: "$269.99/month"
    },
    

]

const HeaderPricing = () => {
  return (
    <Container fluid className="header-pricing ">
      <Container className="text-center py-4 text-white">
        <img src={play} alt="play-logo" className="header-play" />
        <h3 className="header-heading">
          What is <img src={logo} alt="logo" /> ?
        </h3>
        <h2>Go Pro!</h2>
      

   
      
      <Row>
     
        <Col  md={4}></Col>
         {pricing.map((el, index) => (
      <Col key={index} xs={6} md={4} className="price">
        <button className="register">{el.buttonName}</button>
          <h4 className="">{el.price}</h4>
          <p className="">{el.pricePerMonth}</p>
        
      </Col>
    ))}
    
      </Row>
    

      <Row className="mb-2 d-md-none">
    <Col xs={6} md={4} ></Col>
    <Col xs={3} md={4}><h6 className="three-months">3 MONTHS</h6></Col>
    <Col xs={3} md={4}><h6 className="one-year">1 YEAR</h6></Col>
  </Row>
    
         {features.map((f, index) => (
            <Row key={index} >
            
              <Col xs={6} md={4} className="mb-4 d-flex align-items-center">
                {f.image && <img src={f.image} className="" alt={f.name} />}
              <p className="mb-0">{f.name}</p>
            </Col>

              <Col xs={3} md={4} className="">
              
                <span className="check-month">{f.three && <FaCheckCircle className="check" />}</span>
              </Col>

              <Col xs={3} md={4} className="">
               <span className="check-year">{f.year && <FaCheckCircle className="check check-year" />}</span>
              </Col>
              {index !== features.length - 1 && <hr />}
            </Row>
          ))}
    
    </Container>

</Container>
  );
};

export default HeaderPricing;
