import {
  CircleDashYellowSvg,
  CircleYellowSvg,
  CircleRedSvg,
  NewServiceImg,
} from "../../assets/svg";
import { fadeInRight, fadeInLeft } from "react-animations";
import { StyleSheet, css } from "aphrodite";
import serviceImg from "../../assets/png/service.png";
import "./Home.scss";
import { useCallback, useEffect } from "react";
const Home = (props) => {
  const circle = useCallback(() => {
    var Emblem = {
      init: function (el, str) {
        var element = document.querySelector(el);
        var text = str ? str : element.innerHTML;
        element.innerHTML = "";
        for (var i = 0; i < text.length; i++) {
          var letter = text[i];
          var span = document.createElement("span");
          var node = document.createTextNode(letter);
          var r = (360 / text.length) * i;
          var x = (Math.PI / text.length).toFixed(0) * i;
          var y = (Math.PI / text.length).toFixed(0) * i;
          span.appendChild(node);
          span.style.webkitTransform =
            "rotateZ(" + r + "deg) translate3d(" + x + "px," + y + "px,0)";
          span.style.transform =
            "rotateZ(" + r + "deg) translate3d(" + x + "px," + y + "px,0)";
          element.appendChild(span);
        }
      },
    };
    Emblem.init(".emblem");
  });
  useEffect(() => {
    circle();
  }, [circle]);
  useEffect(() => {
    document.body.classList.add("services--page")
  }, [])
  return (
    <div className="hero min-h-screen overflow-hidden">
      <img
        className="absolute top-420 md:top-24  left-40"
        src={CircleYellowSvg}
        alt=""
      />
      <img
        className="absolute img-dash top-420 md:top-24  left-0"
        src={CircleDashYellowSvg}
        alt=""
      />
      <div className=" flex-col hero-content lg:flex-row-reverse">
        <div
          className="relative flex-1 md:-mt-32"
          data-aos="fade-left"
          data-aos-duration="3000"
        >
          <img alt="" src={NewServiceImg} className="img-service" />
          <div className="emblem absolute top-0">
            E-Globe Consulting Group*E-Globe Consulting Group*
          </div>
        </div>

        <div className={`${css(styles.fadeInLeft)} flex-1 md:mt-0`}>
          <h1 className="tahoma-bold text-5xl text-eglobe-orange">Services</h1>
          <p className="inter-regular mb-5 mt-4 text-lg">
            E-globe offers a variety of services with the sole purpose of
            assisting you to become top of mind in your industry. Our team
            consists of proficient professionals who will dedicate themselves to
            forging the highest quality of work for each segment in your
            organization.
          </p>
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
