import { useEffect, useMemo, useState } from "react";
import { OutlineDashPortofolio, FramePortofolioSVG } from "../../assets/svg"

import { StyleSheet, css } from 'aphrodite';
import { fadeInDown } from "react-animations";
import ReactPlayer from 'react-player'

const Portofolio = (props) =>{
  const [isStyle, setStyle] = useState(false)
  const {scrollPosition, offsetTop} = props

 useEffect(()=>{
   console.log(isStyle === false && scrollPosition === offsetTop);
  if(scrollPosition <= offsetTop){
      
    // document.getElementById("title-portofolio").classList.add(css(styles.fadeInDown));
  }
 }, [isStyle])
  
    return(
        <div className=" md:h-auto mt-16 items-center flex flex-col md:mt-24 w-screen  overflow-hidden px-8 md:px-24">
        <div id="title-portofolio" className={` w-auto items-start flex flex-col flex-wrap`} data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" data-aos-duration='3000'>
          <img src={OutlineDashPortofolio} className="ml-2" alt="" />
          <div className="tahoma-bold text-5xl mt-2">
            <span className="text-black">Our </span>
            <span className="text-eglobe-orange">Portfolio</span>
          </div>
        </div>
        <div className="grid-cols-1 w-full  grid  md:gap-8 gap-4 mt-8 md:mt-16" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="3000">
          <ReactPlayer width={'100%'}
  url={'https://streamable.com/dgz3q4'}
/>
        </div>
      </div>
    )
}
const styles =  StyleSheet.create({
  fadeInDown: {
    animationName: fadeInDown,
    animationDuration: '3s'
  },
})
export default Portofolio