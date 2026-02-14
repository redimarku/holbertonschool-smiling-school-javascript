import { Container, Row, Col, Button, Image, Spinner } from 'react-bootstrap'
import { useEffect, useState } from "react";
import axios from "axios";
import './index.css';

const Testimonial = () => {
    const [quotes, setQuotes] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const mockData = [
        {
            "id": 1,
            "pic_url": "https://smileschool-api.s3.amazonaws.com/profile_5.jpg",
            "name": "John Doe",
            "title": "Founder of SmileSchool",
            "text": "Those tutorials are concise and go straight to the point. I can’t think of a better place to learn smiling. And it’s so fun!"
        },
        {
            "id": 2,
            "pic_url": "https://smileschool-api.s3.amazonaws.com/profile_2.jpg",
            "name": "Nannie Lawrence",
            "title": "Best \"little smile\" 2017",
            "text": "ThoseLorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod. Lorem ipsum dolor sit amet, sed do eiusmod."
        },
        {
            "id": 3,
            "pic_url": "https://smileschool-api.s3.amazonaws.com/profile_4.jpg",
            "name": "Bob Fisher",
            "title": "Founder of New SmileSchool",
            "text": "Those tutorials are concise and go straight to the point. I can’t think of a better place to learn smiling. And it’s so fun!"
        },
        {
            "id": 4,
            "pic_url": "https://smileschool-api.s3.amazonaws.com/profile_3.jpg",
            "name": "Tim Lawrence",
            "title": "Founder of Fullstack",
            "text": "Those tutorials are concise and go straight to the point. I can’t think of a better place to learn smiling. And it’s so fun!"
        },
    ]

    useEffect(() => {
        async function loadData() {
            try {
                // const data = await axios.get("https://smileschool-api.hbtn.info/quotes");
                // if (data.status === 200) {
                //     setQuotes(data.data)
                // }

                setQuotes(mockData);
            } catch (error) {
                setError("We can not load data for the moment");
            }
        }

        loadData();
    }, []);

    // useEffect(() => {
    //     if (loading) {
    //         const timer = setTimeout(() => {
    //             setLoading(true);
    //         }, 200);
    //     }
    //     return clearTimeout
    // }, [loading])


    useEffect(()=>{
        // console.log("loading--");
        if(loading){
            const timer = setTimeout(()=>{
                setLoading(true);
            }, 200)
        }
        return () => {
      clearTimeout(timer);
    };
    },[loading])


    // console.log("Current index=====" + currentIndex)

    const currentSlide = quotes[currentIndex];
    const previous = () => {
        setCurrentIndex((prevState) => {
            let index = prevState + 1;
            if (index >= quotes.length) {
                index = 0;
            }
            return index;
        })
    }

    const next = () => {
        setCurrentIndex((prevState) => {
            let index = prevState + 1;
            if (index >= quotes.length) {
                index = 0;
            }
            return index;
        });
    }

    return (
        <div className='quote-slider'>

            {loading && 
                < div className="text-center">
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </div>
            }

            {
               !loading && currentSlide &&
                < Container >
                    <Row>
                        <Col lg={1}></Col>
                        <Col lg={3} md={4} sm={12} className="text-center">
                            <Image src={currentSlide.pic_url} roundedCircle className='img-quote' />
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                            <div className='quote-container'>
                                <p>&laquo;{currentSlide.text}</p>
                                <h3>{currentSlide.name}</h3>
                                <strong>{currentSlide.title}</strong>

                            </div>
                        </Col>
                    </Row>
                    <Button onClick={previous} className='arrow-left'>&lt;</Button>

                    <Button onClick={next } className='arrow-right'>&gt;</Button>
                </Container>
            }


        </div >
    )
}

export default Testimonial;