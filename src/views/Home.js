import Home from '../pages/home/Home'
import Portofolio  from '../pages/home/Portofolio'
import ProfesionalStaff from '../pages/home/Profesional-Staf'
import Service from '../pages/home/Service'
import OurClient from '../pages/home/OurClient'
import Article from '../pages/home/Article'
import Subscribe from '../pages/home/Subscribe'
import { useEffect } from 'react'

const HomeViews = (props)=>{
  useEffect(() => {
      document.body.classList.remove("services--page")
      document.body.classList.remove("career--page")
      document.body.classList.remove("blog--page")
      document.body.classList.remove("about--page")
      document.body.classList.add("home--page")
      document.body.classList.remove("hauoli--page")
    }, [])
      return(
        <>
        <Home/>
        <Portofolio />
        <ProfesionalStaff/>
        <Service/>
        <OurClient/>
        <Article/>
        <Subscribe/>
        </>
      )
}

export default HomeViews