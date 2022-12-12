import CareerContent from "../pages/career/CareerContent";
import Home from "../pages/career/Home";

const Career = (props) =>{
    return (
        <div className="mt-16 h-auto w-screen overflow-hidden">
            <Home/>
            <CareerContent/>
        </div>
    )
}

export default Career;