
import { useEffect } from "react";
import Portofolio from "../pages/home/Portofolio";

const Blog = (props) =>{
    useEffect(() => {
        document.body.classList.remove("services--page")
        document.body.classList.remove("career--page")
        document.body.classList.remove("about--page")
        document.body.classList.remove("blog--page")
        document.body.classList.remove("home--page")
        document.body.classList.add("hauoli--page")
      }, [])
    return (
        <div className="h-auto w-screen overflow-hidden">
            <Portofolio />
        </div>
    )
}
export default Blog;