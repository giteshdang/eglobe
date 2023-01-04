import Home from "../pages/about/Home";
import ProfesionalStaff from "../pages/about/Profesional-Staf";
import OurClient from "../pages/about/OurClient";
import Portofolio from "../pages/about/Portofolio";
import OurCompany from "../pages/about/OurCompany";
import { useEffect } from "react";

const About = (props) =>{
    useEffect(() => {
        document.body.classList.remove("services--page")
        document.body.classList.remove("career--page")
        document.body.classList.remove("blog--page")
      }, [])
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