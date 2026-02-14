import { useState, useEffect } from "react"
import { Container, Row, Col, Card, Button, Spinner } from "react-bootstrap";
import './index.css'
import { FaStar } from 'react-icons/fa';
import play from '../../images/play.png';
import axios from "axios";

const PopularTutorial = () => {
  const [data, setPosts] = useState([]);
  const [error, setError] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const [loading, setLoading] = useState(false);

  const visibleCards = 4;

  useEffect(() => {
    async function loadData() {
      try {
        const res = await axios.get(
          "https://smileschool-api.hbtn.info/popular-tutorials"
        );
        if(res.status === 200){
          setPosts(res.data);
        }
      } catch (error) {
        setError("We can not load data for the moment");
      }
    }
    loadData();
  }, []);

const previous = () => {
    setLoading(true);
    setTimeout(() => {
      setActiveIndex(prev => {
        let index = prev - 1;
        if (index < 0){
            index = 0;
        } 
       return index;
      });
      setLoading(false);
    }, 500); 
  };

  const next = () => {
    setActiveIndex((prevState) => {
      let index = prevState + 1;
      if (index > data.length - visibleCards) {
        index = 0; 
      }
      return index;
    });
  }

  const colors = { purple: "#C271FF", grey: "a9a9a9" };
  const stars = Array(5).fill(0);


  const visibleSlides = data.slice(activeIndex, activeIndex + 4);

//   console.log(activeIndex);
  return (
    <>
    <Container fluid className="latest-video">
     <h4 className="latest"><span className="purple">Popular</span> Tutorials</h4>
      <Container className="  p-5 ">
           {loading && (
            <div className="text-center">
                 <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>
        )}
        <Row>

          {!loading && visibleSlides.map((el, index) => (
            <Col xs={12} md={3} key={index}>
              <Card className="mb-5">
                <Container className="video-container">
                  <Card.Img src={el.thumb_url} />
                  <img src={play} alt="play-icon" />
                </Container>
                
                <Card.Body>
                  <Card.Title>{el.title}</Card.Title>
                  <Card.Text>{el['sub-title']}</Card.Text>

                  <Container className="footer-latest-video">
                    <Card.Img src={el.author_pic_url} />
                    <h6>{el.author}</h6>
                  </Container>

                  <Container className="rating">
                    {stars.map((_, starIndex) => (
                      <FaStar
                        key={starIndex}
                        size={20}
                        color={el.star > starIndex ? colors.purple : colors.grey}
                      />
                    ))}
                    <span>{el.duration}</span>
                  </Container>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
          <Button onClick={previous} className='left-btn-popular'>&lt;</Button>
        <Button onClick={next} className='right-btn-popular'>&gt;</Button>
        
      </Container>
      
      </Container>
    </>
  );
}

export default PopularTutorial;
