import Home from "../pages/about/Home";
import ProfesionalStaff from "../pages/about/Profesional-Staf";
import OurClient from "../pages/about/OurClient";
import Portofolio from "../pages/about/Portofolio";
import OurCompany from "../pages/about/OurCompany";

const About = (props) =>{
    return (
        <div className="mt-16 h-auto w-screen overflow-hidden">
            <Home/>
            <ProfesionalStaff/>
            <OurCompany/>
            <OurClient/>
            <Portofolio/>
        </div>
    )
}

export default About;