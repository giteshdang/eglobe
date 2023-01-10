import { useState, useRef } from "react";
import Marquee, { Motion, randomIntFromInterval } from "react-marquee-slider";
import {
  BackgroundServiceSvg,
  OutlineDashStaff,
  TranslationSvg,
  V12D3DAnimation,
  V1ClientServiceRealTimeInterpretation,
  V1BrandingDesign,
  V1WritingTranslation,
  V1ProfessionalDevelopmentBusinessTransformation,
  V1TalentAcquisitinTraining
} from "../../assets/svg";
import "./style/Services.scss";

import times from "lodash/times";
import { nanoid } from "nanoid";

const Service = (props) => {
  const [key, setKey] = useState(nanoid());
  const [velocity, setVelocity] = useState(25);

  const onHover = () => {
    setVelocity(0);
  };
  const onMouseLeave = () => {
    setVelocity(25);
  };

  const data = [
    {
      img: V1WritingTranslation,
      desc: "Writing & Translation",
    },
    {
      img: V1BrandingDesign,
      desc: "Branding & Desig",
    },
    {
      img: V1TalentAcquisitinTraining,
      desc: "Talent Acquisition & Training",
    },
    {
      img: V1ClientServiceRealTimeInterpretation,
      desc: "Client Service & Real-Time Interpretation",
    },
    {
      img: V12D3DAnimation,
      desc: "2D/3D Design & Animation",
    },
    {
      img: V1ProfessionalDevelopmentBusinessTransformation,
      desc: "Professional Development & Business Transformation",
    },
  ];

  return (
    <div
      style={{
        // backgroundImage: `url(${BackgroundServiceSvg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
        backgroundColor: "#087468",
      }}
      className="h-auto  w-screen"
    >
      <div className="flex md:px-24 flex-col space-y-24 py-8 md:py-24 px-8">
        <div className="grid-cols-1 md:grid-cols-2 2xl:grid-cols-2 grid gap-16 xl:gap-40">
          <div className="grid grid-cols-1 col-span-1 md:col-span-2 md:grid-cols-2 2xl:col-span-1 2xl:grid-cols-1  gap-8 md:gap-24">
            <div className="col-span-1 flex flex-col space-y-2">
              <img
                src={OutlineDashStaff}
                className="w-40 h-6 object-fill"
                alt=""
                // data-aos="fade-right"
                // data-aos-duration="3000"
              />
              <h1
                className="tahoma-bold text-4xl text-white"
                // data-aos="fade-right"
                // data-aos-duration="3000"
              >
                <span className="text-eglobe-orange">Business</span> Services
                that lead the way to better business
              </h1>
            </div>
          </div>
        </div>
        <div className="flex h-64">
          <Marquee key={key} velocity={velocity} scatterRandomly minScale={0.7}>
            {times(6, Number).map((val, index) => {
              return (
                <div
                  onMouseOver={() => onHover()}
                  onMouseLeave={() => onMouseLeave()}
                  key={index}
                  className="flex flex-row w-96 h-12 items-center justify-center space-x-2 transition ease-in-out cursor-pointer hover:-translate-y-2 hover:scale-150 duration-3000"
                >
                  <img src={data[index].img} className="w-8 h-8" alt="" />
                  <div className="tahoma-bold text-lg text-eglobe-orange">
                    {data[index].desc}
                  </div>
                </div>
              );
            })}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Service;
