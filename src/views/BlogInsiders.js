
import { useEffect } from "react";
import BusinessInsiders from "../pages/blog/BusinessInsiders";

const Business = (props) =>{
    useEffect(() => {
        document.body.classList.remove("services--page")
        document.body.classList.remove("career--page")
        document.body.classList.remove("about--page")
        document.body.classList.add("blog--page")
        document.body.classList.remove("home--page")
        document.body.classList.remove("hauoli--page")
      }, [])
    return (
        <div className="h-auto w-screen overflow-hidden">
            <BusinessInsiders />
        </div>
    )
}
export default Business;