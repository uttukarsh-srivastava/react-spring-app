import { NavLink } from "react-router-dom";

// Components
import Footer from "../components/Footer";
import MissionVision from "../components/MissionVision";
import Testimonials from "../components/Testimonials";
import WhySchool from "../components/WhySchool";

const Home = () => {
    return ( 
        <>
            <div className="home">
                <p className="title"><span style={{color: '#f9ed08ff'}}>New Children Academy</span></p>
                <p className="info">We are delighted to have you visit our virtual home (New Children Academy) - a place where knowledge thrives, dreams soar, and friendships flourish. At school, we believe in cultivating an environment that fosters academic excellence, nurtures creativity, and embraces diversity.</p>
                <NavLink to='/about'>Explore</NavLink>
            </div>
            <MissionVision />
            <WhySchool />
            <Testimonials />
            <Footer />
        </>
    );
}
 
export default Home