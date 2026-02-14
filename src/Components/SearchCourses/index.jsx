import axios from "axios";
import { useState, useEffect } from "react";
import { Container, Row, Col, Card, Form, Alert } from "react-bootstrap";
import { CiStar } from "react-icons/ci";
import "./index.css";
import { FaStar } from 'react-icons/fa';

const SearchCourses = () => {

    const [courses, setCourses] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [topic, setTopic] = useState("All");
    const [sortBy, setSortBy] = useState("most_popular")

    useEffect(() => {
        async function loadCourses() {
            try {
                const result = await axios.get("https://smileschool-api.hbtn.info/courses");
                if (result.status === 200) {
                    setCourses(result.data.courses);
                }
            } catch (error) {
                console.log("error---", error);
            }
        }
        loadCourses();
    }, []);

    const handleChange = (event) => {
        const value = event.target.value.trim().toLowerCase();
        setSearchTerm(value);
    }

    const handleTopic = (event) => {
        const value = event.target.value;
        setTopic(value);
    }

    const handleSortBy = (event) =>{
        const value = event.target.value;
        setSortBy(value);
    }


    console.log("----SortBy---", sortBy);

    const searchedCourses = courses.filter((course, index) => {
        const byKeyword = course.title.toLowerCase().includes(searchTerm);
        const byTopic = topic === "All" || course.topic.toLowerCase() === topic.toLowerCase();
        const byPopular = sortBy === "most_popular" ? course.star > 4 : true;
        const byViews = sortBy === "most_viewed" ? course.views > 800 : true;
        
        return byKeyword && byTopic && byPopular && byViews;
    });

      const colors = { purple: "#C271FF", grey: "a9a9a9" };
  const stars = Array(5).fill(0);
  

    return (
        <>
        
            <Container fluid>
                <div className="form-container">
                    <Form>
                    <Row className="mb-5 filter-container">

                        <Col md={4} xs={12} >
                            <Form.Label>KEYWORDS</Form.Label>
                            <Form.Control type="text" placeholder="Search by keywords" onChange={handleChange} />
                        </Col>
                        <Col md={4}  xs={12}>
                            <Form.Label>TOPIC</Form.Label>
                            <Form.Select onChange={handleTopic} value={topic}>
                                <option value="All">All</option>
                                <option value="Novice">Novice</option>
                                <option value="Intermediate">Intermediate</option>
                                <option value="Expert">Expert</option>
                            </Form.Select>
                        </Col>
                        <Col md={4} xs={12} >
                            <Form.Label>SORT BY</Form.Label>
                            <Form.Select onChange={handleSortBy} value={sortBy}>
                                <option value="most_popular">Most popular</option>
                                <option value="most_viewed">Most viewed</option>
                                <option value="most_recent">Most recent</option>
                            </Form.Select>
                        </Col>

                    </Row>
                </Form>
                </div>
                
                <Row className="mb-5 cards-search">
                    {
                        searchedCourses.length > 0 ?
                            searchedCourses.map((course, index) => {
                                return (
                                    <Col md={3} key={index} className="mb-5">
                                        <Card>
                                            <Card.Img variant="top" src={course.author_pic_url} />
                                            <Card.Body>
                                                <Card.Title>{course.author}</Card.Title>
                                                <Card.Text>{course.title}</Card.Text>
                                                <Container className="footer-latest-video">
                                                <Card.Img src={course.author_pic_url} />
                                                <h6>{course.author}</h6>
                                                </Container>
                                                {/* {Array.from({ length: course.star }).map((_, index) => (
                                                    <CiStar key={index} />
                                                ))} */}
                                                <Container className="rating">
                      {stars.map((_, starIndex) => (
                        <FaStar
                          key={starIndex}
                          size={20}
                          color={course.star > starIndex ? colors.purple : colors.grey}
                        />
                      ))}
                      <span>{course.duration}</span>
                    </Container>

                                            </Card.Body>
                                            
                                        </Card>
                                    </Col>
                                )
                            })
                            :
                            <Alert variant="danger">No Data</Alert>
                    }
                </Row>
            </Container>
        
        </>
    )
}

export default SearchCourses;