import { useEffect } from "react";
import CareerContent from "../pages/career/CareerContent";
import Dream from "../pages/career/Dream";
import Home from "../pages/career/Home";

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
            <Home/>
            <CareerContent/>
        </div>
    )
}

export default Career;