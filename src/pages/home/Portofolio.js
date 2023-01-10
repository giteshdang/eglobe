import { useEffect, useMemo, useState } from "react";
import { OutlineDashPortofolio, FramePortofolioSVG } from "../../assets/svg";

import { StyleSheet, css } from "aphrodite";
import { fadeInDown } from "react-animations";
import ReactPlayer from "react-player";

import HauoliLogo from "../../assets/image/Webpage__Hauoli-Studio.png";
import PortOne from "../../assets/image/port-1.png";
import PortTwo from "../../assets/image/port-2.png";
import PortThree from "../../assets/image/port-3.png";
import PortFour from "../../assets/image/port-4.png";
import PortFoot from "../../assets/image/foot.jpg";
import { Link } from "react-router-dom";
import config from "../../config";
import "./style/Portofolio.scss";
import "./style/Home.scss";

const Portofolio = (props) => {
  const [isStyle, setStyle] = useState(false);
  const { scrollPosition, offsetTop } = props;

  useEffect(() => {
    console.log(isStyle === false && scrollPosition === offsetTop);
    if (scrollPosition <= offsetTop) {
      document
        .getElementById("title-portofolio")
        .classList.add(css(styles.fadeInDown));
    }
  }, [isStyle]);

  return (
    <div className="md:h-auto items-center flex flex-col w-screen portfolio--section">
      <div className="px-8 md:px-24 portfolio--first--section">
        <div className="port--img-1">
          <img src={PortOne} alt="" />
        </div>
        <div
          id="title-portofolio"
          className={`portfolio--logo--image mx-auto w-auto items-start flex flex-col flex-wrap`}
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="3000"
        >
          {/* <img src={OutlineDashPortofolio} className="ml-2" alt="" />
          <div className="tahoma-bold text-5xl mt-2">
            <span className="text-eglobe-green">Our </span>
            <span className="text-eglobe-orange">Portfolio</span>
          </div> */}
          <img src={HauoliLogo} alt="Hauoli Logo" />
          <div className="port--btn">
            <Link 
              className="port--btn--link"
              to={`${config.basename}${"/hau-oli-page"}`}
            >
              Visit Our Imaginative Gallery
            </Link>
          </div>
          <div className="portofolio--description">
            <p>
              <span>Lorem</span> Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type.
            </p>
          </div>
        </div>
        <div className="port--img-2">
          <img src={PortTwo} alt="" />
        </div>
      </div>

      <div className="px-8 md:px-24 portfolio--second--section">
        <div className="port--img-3">
          <img src={PortThree} alt="" />
        </div>
        <div className="client--comments--list">
          <div className="port--foot-1">
            <img src={PortFoot} alt="" />
          </div>
          <div className="port--foot-2">
            <img src={PortFoot} alt="" />
          </div>
          <div className="client--comment ml-auto">
            <div className="client--logo">
              <p>Client logo</p>
            </div>
            <div className="client--comment--text">
              <p>Inset client's comment</p>
            </div>
          </div>
          <div className="client--comment mr-auto">
            <div className="client--logo">
              <p>Client logo</p>
            </div>
            <div className="client--comment--text">
              <p>Inset client's comment</p>
            </div>
          </div>
        </div>
        <div className="port--img-4">
          <img src={PortFour} alt="" />
        </div>
      </div>
    </div>
  );
};
const styles = StyleSheet.create({
  fadeInDown: {
    animationName: fadeInDown,
    animationDuration: "3s",
  },
});
export default Portofolio;
