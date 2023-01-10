import { useEffect } from "react";
import Home from "../pages/contact-us/Home";
import Subscribe from "../pages/contact-us/Subscribe";

const ContacUs = (props) =>{
    useEffect(() => {
        document.body.classList.add("services--page")
        document.body.classList.remove("career--page")
        document.body.classList.remove("blog--page")
        document.body.classList.remove("about--page")
        document.body.classList.remove("home--page")
        document.body.classList.remove("hauoli--page")
      }, [])
    return (
        <div className="mt-16 h-auto w-screen overflow-hidden">
            <Home/>
            <Subscribe/>
        </div>
    )
}

export default ContacUs;