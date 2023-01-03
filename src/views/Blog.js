
import { useEffect } from "react";
import ContentBlog from "../pages/blog/ContentBlog";
import Home from "../pages/blog/Home";

const Blog = (props) =>{
    useEffect(() => {
        document.body.classList.remove("services--page")
        document.body.classList.remove("career--page")
      }, [])
    return (
        <div className="mt-16 h-auto w-screen overflow-hidden">
            <Home/>
            <ContentBlog/>
        </div>
    )
}
export default Blog;