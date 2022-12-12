import Home from '../pages/home/Home'
import Portofolio  from '../pages/home/Portofolio'
import ProfesionalStaff from '../pages/home/Profesional-Staf'
import Service from '../pages/home/Service'
import OurClient from '../pages/home/OurClient'
import Article from '../pages/home/Article'
import Subscribe from '../pages/home/Subscribe'

const HomeViews = (props)=>{
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