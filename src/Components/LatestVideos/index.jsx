import { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import './index.css';
import '../Header/index.css';
import { FaStar } from 'react-icons/fa';
import play from '../../images/play.png';
import axios from "axios";

const LatestVideos = () => {
  const [data, setPosts] = useState([]);

  // Fetch latest videos
  useEffect(() => {
    async function loadData() {
      try {
        const data = await axios.get("https://smileschool-api.hbtn.info/latest-videos");
        if (data.status === 200) {
          setPosts(data.data);
        }
      } catch (error) {
        console.error('Failed to fetch latest videos:', error);
      }
    }
    loadData();
  }, []);

  // Declaring array for stars
  const colors = { purple: "#C271FF", grey: "a9a9a9" };
  const stars = Array(5).fill(0);

  return (
    <>
      <h4 className="latest">
        <span className="purple">Latest </span>Videos
      </h4>

      <Container className="latest-video text-left pb-5">
        <Row>
          {data.map((el, index) => {
            return (
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
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default LatestVideos;
