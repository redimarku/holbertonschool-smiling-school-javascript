import Header from "../Components/Header";
import FreeMembership from "../Components/FreeMembership";
import LatestVideos from "../Components/LatestVideos";
import Testimonial from "../Components/Testimonial";
import PopularTutorial from "../Components/PopularTutorial";


const Home = () =>{


    return(
        <>
        <Header />
        <Testimonial />
        <PopularTutorial />
        <FreeMembership />
        <LatestVideos />
    </>
    );
}

export default Home;


