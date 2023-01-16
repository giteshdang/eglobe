import { useEffect } from "react";
import CareerContent from "../pages/career/CareerContent";
import Dream from "../pages/career/Dream";
import Home from "../pages/career/Home";
import Internship from "../pages/career/Internship";
import JoinParty from "../pages/career/JoinParty";

const Career = (props) =>{
    useEffect(() => {
        document.body.classList.remove("services--page")
        document.body.classList.add("career--page")
        document.body.classList.remove("blog--page")
        document.body.classList.remove("about--page")
        document.body.classList.remove("home--page")
        document.body.classList.remove("hauoli--page")
      }, [])
    return (
        <div className="mt-16 h-auto w-screen overflow-hidden">
            <Dream />
            <Internship />
            <JoinParty />
            {/* <Home/> */}
            {/* <CareerContent/> */}
        </div>
    )
}

export default Career;