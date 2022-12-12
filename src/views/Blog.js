
import ContentBlog from "../pages/blog/ContentBlog";
import Home from "../pages/blog/Home";

const Blog = (props) =>{
    return (
        <div className="mt-16 h-auto w-screen overflow-hidden">
            <Home/>
            <ContentBlog/>
        </div>
    )
}
export default Blog;