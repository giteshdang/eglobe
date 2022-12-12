import {CircleDashPinkSvg, CirclePinkSvg, CircleRedSvg, NewAboutImg} from '../../assets/svg'
import { fadeInRight, fadeInLeft } from 'react-animations';
import { StyleSheet, css } from 'aphrodite';
import serviceImg from "../../assets/png/service.png"
import './Home.scss'
import { useCallback, useEffect } from 'react';
const Home = (props) =>{
    const circle = useCallback(()=>{
      var Emblem = {
        init: function(el, str) {
          var element = document.querySelector(el);
          var text = str ? str : element.innerHTML;
          element.innerHTML = '';
          for (var i = 0; i < text.length; i++) {
            var letter = text[i];
            var span = document.createElement('span');
            var node = document.createTextNode(letter);
            var r = (360/text.length)*(i);
            var x = (Math.PI/text.length).toFixed(0) * (i);
            var y = (Math.PI/text.length).toFixed(0) * (i);
            span.appendChild(node);
            span.style.webkitTransform = 'rotateZ('+r+'deg) translate3d('+x+'px,'+y+'px,0)';
            span.style.transform = 'rotateZ('+r+'deg) translate3d('+x+'px,'+y+'px,0)';
            element.appendChild(span);
          }
        }
      };
      Emblem.init('.emblem');
    })
    useEffect(()=>{
      circle()
    },[circle])
    
    useEffect(() => {
      document.body.classList.remove("services--page")
    }, [])
    return(
      <div className="hero min-h-screen overflow-hidden">
      
      <img
        className="absolute top-420 md:top-24  left-40"
        src={CirclePinkSvg}
        alt=""
      />
      <img
        className="absolute img-dash top-420 md:top-24  left-0"
        src={CircleDashPinkSvg}
        alt=""
      />
       <div className=" flex-col hero-content lg:flex-row-reverse">
        <div className='relative flex-1 md:-mt-32' data-aos='fade-left' data-aos-duration='3000'>
        <img alt="" src={NewAboutImg} className="img-service" /> 
          <div className="emblem absolute top-0">E-Globe Consulting Group*E-Globe Consulting Group*</div>
          
        </div>
        
      <div className={`${css(styles.fadeInLeft)}  flex-1 md:mt-0`}>
        <h1 className="tahoma-bold text-5xl text-black">
        Find Your Dream Job in <br/>
        <span className='text-eglobe-yellow'>E-Globe</span> !
        </h1>
        <p className="inter-regular mb-5 mt-4 text-lg">
        We found our purposes through the impact we make on others. You, too, can find yours.
        </p>
        <button className="py-3 px-8 rounded-md bg-eglobe-red text-white inter-regular text-sm">
        Find Out
      </button>
    </div>
  </div>
</div>

    )
    
}

const styles = StyleSheet.create({
  fadeInLeft: {
    animationName: fadeInLeft,
    animationDuration: '3s'
  },
  fadeInRight: {
    animationName: fadeInRight,
    animationDuration: '3s'
  }
})

export default Home