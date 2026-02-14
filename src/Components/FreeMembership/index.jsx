import { membership } from "../../assets/Mockdata";
import { Container, Row, Col } from "react-bootstrap";
import './index.css'
import '../Header/index.css'

const FreeMembership = ()=>{
    return(
        <>
        <div className="free-membership">
        <h2><span className="purple">Free</span> Membership</h2>
        
<Container className="lorem-ipsum text-center">
  <Row>
    {membership.map((item, index) => (
      <Col xs={12} md={3}  key={index}>
        <img src={item.image} alt='lorem-ipsum' />
        <h6>{item.name}</h6>
        <p>{item.text} <br />{item.text2}</p>
        </Col>
    ))}
  </Row>
</Container>

<button className="register">REGISTER FOR FREE</button>
</div>
          
        </>
    );
}

export default FreeMembership;