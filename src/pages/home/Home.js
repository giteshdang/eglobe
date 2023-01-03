import {
  CircleDashGreenSvg,
  CircleGreenSvg,
  HeroImgSvg,
  GlassSvg,
  PersonSvg,
  GlassWithPersonSvg,
} from "../../assets/svg";
import { fadeInRight, fadeInLeft } from "react-animations";
import { StyleSheet, css } from "aphrodite";
import "./style/Home.scss";
import anime from "animejs";
import { createRef, useEffect, useRef } from "react";

const Home = (props) => {
  const useArrayRef = () => {
    const refs = [];
    return [refs, (el) => el && refs.push(el)];
  };
  const [elements, ElementRef] = useArrayRef();
  const [inners, InnersRef] = useArrayRef();
  useEffect(() => {
    console.log(elements);
    const total = elements.length - 1;
    const innerOffset = 100;
    const watchTime = 3000;
    const duration = 3000;
    const tilt = -5;
    const gap = 60;
    const depth = 60;
    const factor = 1; // -1 to go from right to left
    const ease = "spring(0.5, 100, 3, 0)";
    const tl = anime.timeline({
      easing: ease,
      loop: true,
    });
    let firstHalf = [],
      secHalf = [],
      setObj = [],
      transforms = [],
      innerFH = [],
      innerSH = [],
      setInners = [],
      innerTransforms = [];

    for (let i = 0; i <= total / 2; i++) {
      transforms.push({
        translateX: factor * gap * i,
        rotateY: -factor * tilt * i,
        translateZ: -depth * i,
      });
      innerTransforms.push({
        translateX: Number(((factor * i * 2 * innerOffset) / total).toFixed(2)),
      });
    }

    for (let i = total / 2; i < total; i++) {
      transforms.push({
        translateX: -factor * gap * (total - i),
        rotateY: factor * tilt * (total - i),
        translateZ: -depth * (total - i),
      });
      innerTransforms.push({
        translateX: Number(
          ((-factor * (total - i) * 2 * innerOffset) / total).toFixed(2)
        ),
      });
    }

    const el = document.querySelector(".hero-glass-img");
    
    el.addEventListener("mousemove", (e) => {
      el.style.backgroundPositionX = e.offsetX + "px";
      el.style.backgroundPositionY = e.offsetY + "px";
    });

    elements.forEach((el, index) => {
      if (index === 0) {
        setObj = transforms[total];
        setInners = innerTransforms[total];
      } else {
        setObj = transforms[index - 1];
        setInners = innerTransforms[index - 1];
      }
      anime.set(el, setObj);
      anime.set(inners[index], setInners);
    });

    transforms.forEach((el, index) => {
      el.delay = watchTime;
      el.duration = duration;
      innerTransforms[index].delay = watchTime;
      innerTransforms[index].duration = duration;
    });

    transforms[total / 2 + 1].easing = "spring(0, 100, 100, 0)";
    innerTransforms[total / 2 + 1].easing = "spring(0, 100, 100, 0)";

    elements.forEach((el, index) => {
      firstHalf = transforms.slice(0, index);
      secHalf = transforms.slice(index, total + 1);
      firstHalf.forEach((el) => secHalf.push(el));
      tl.add(
        {
          targets: el,
          keyframes: secHalf,
        },
        0
      );

      // ----------------------------

      innerFH = innerTransforms.slice(0, index);
      innerSH = innerTransforms.slice(index, total + 1);
      innerFH.forEach((el) => innerSH.push(el));
      tl.add(
        {
          targets: inners[index],
          keyframes: innerSH,
        },
        0
      );
    });
  }, [elements, InnersRef]);

  return (
    <div className="hero min-h-screen overflow-hidden relative pb-24">
      <img
        className="absolute bottom-420 md:bottom-20 left-40"
        src={CircleGreenSvg}
        alt=""
      />
      <img
        className="absolute img-dash bottom-420 md:bottom-0  left-0"
        src={CircleDashGreenSvg}
        alt=""
      />
      <div className="hero-content container flex-wrap mt-24 w-full">
        
        <div className="wrapper">
          <div className="rotating-cards hidden">
            <div ref={ElementRef} className="rotating-cards__el">
              <div
                ref={InnersRef}
                style={{
                  backgroundImage:
                    "url(https://images.pexels.com/photos/1367269/pexels-photo-1367269.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500)",
                }}
              ></div>
            </div>
            <div ref={ElementRef} className="rotating-cards__el">
              <div
                ref={InnersRef}
                style={{
                  backgroundImage:
                    "url(https://images.pexels.com/photos/9301825/pexels-photo-9301825.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500)",
                }}
              ></div>
            </div>
            <div ref={ElementRef} className="rotating-cards__el">
              <div
                ref={InnersRef}
                style={{
                  backgroundImage:
                    "url(https://images.pexels.com/photos/7794010/pexels-photo-7794010.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500)",
                }}
              ></div>
            </div>
          </div>
          <div className="hero-img relative">
            <img src={HeroImgSvg} alt="" />
            <div className="hero-glass-img absolute inset-0" style={{backgroundImage: `url(${GlassSvg})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center center', backgroundSize: '20rem'}}>
              {/* <img src={PersonSvg} alt="" className="absolute w-16" /> */}
            </div>
          </div>
        </div>
        
        {/* <img alt="" src="https://picsum.photos/id/1005/600/600" className="max-w-md mt-16 rounded-lg shadow-2xl" />  */}
        <div
          className={`${css(styles.fadeInLeft)} mt-32 md:mt-0 hero-content-text`}
          data-aos="fade-right"
          data-aos-duration="3000"
        >
          <h1 className="tahoma-bold text-5xl">
            Your business growth is{" "}
            <span className="text-eglobe-orange">our priority.</span>
          </h1>
          <p className="inter-regular mb-5 mt-4 text-lg">
            E-globe Consulting is an all-in-one business solution focusing on a
            growth mindset. We believe that a business is successful when it
            continually grows and differentiates itself from the competition.
            Our job is to aid you through this growth journey all the way
            through until you thrive.
          </p>
          <button className="py-3 px-8 rounded-md bg-eglobe-green text-white inter-regular text-sm">
            Get Start Now
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = StyleSheet.create({
  fadeInLeft: {
    animationName: fadeInLeft,
    animationDuration: "3s",
  },
  fadeInRight: {
    animationName: fadeInRight,
    animationDuration: "3s",
  },
});

export default Home;
