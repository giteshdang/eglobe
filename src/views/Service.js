import { useEffect } from "react";
import BrandingDesign from "../pages/service/BrandingDesign";
import ClientServices from "../pages/service/ClientServices";
import DesignAnimation from "../pages/service/DesignAnimation";
import Home from "../pages/service/Home";
import OurClient from "../pages/service/OurClient";
import ProfessionalDevelopment from "../pages/service/ProfessionalDevelopment";
import TalentAcquisition from "../pages/service/TalentAcquisition";
import WritingTranslation from "../pages/service/WritingTranslation";

const Service = (props)=>{
    useEffect(() => {
        document.body.classList.add("services--page")
        document.body.classList.remove("career--page")
      }, [])
    return (
        <div className="mt-16 h-auto w-screen overflow-hidden">
            <Home/>
            <WritingTranslation/>
            <BrandingDesign/>
            <TalentAcquisition/>
            <ClientServices/>
            <ProfessionalDevelopment/>
            <DesignAnimation/>
            <OurClient/>
        </div>
    )
}

export default Service;