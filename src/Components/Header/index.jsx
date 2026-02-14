import { Container, Row, Col } from 'react-bootstrap';
import './index.css';
import { mockData } from '../../assets/Mockdata';



const Header = () =>{

    return(
        <>
        <div className="header">
        <h1 className="schooled">Get schooled</h1>
        <ul className="categories">
            <li>SMILE</li>
            <li>GRIN</li>
            <li>LAUGH</li>
        </ul>
        <button className="register">REGISTER FOR FREE</button>

        <h4 className="learn"><span className="purple">Learn</span> from the pros</h4>

        
       <Container className="text-center pb-5">
  <Row>
    {mockData.map((user) => (
      <Col xs={6} md={3} className="student" key={user.id}>
        <img src={user.image} alt='' />
        <h6>{user.name}</h6>
        <p>{user.quote} <br />{user.year}</p>
        </Col>
    ))}
  </Row>
</Container>

        </div>
        </>
    )
}

export default Header;
