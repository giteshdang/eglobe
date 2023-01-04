
import { useEffect } from "react";
import ContentBlog from "../pages/blog/ContentBlog";
import Home from "../pages/blog/Home";

const Blog = (props) =>{
    useEffect(() => {
        document.body.classList.remove("services--page")
        document.body.classList.remove("career--page")
        document.body.classList.add("blog--page")
      }, [])
    return (
        <div className="h-auto w-screen overflow-hidden">
            <Home/>
            {/* <ContentBlog/> */}
        </div>
    )
}
export default Blog;