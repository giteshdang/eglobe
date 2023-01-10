import { useEffect, useRef, useState } from "react";
// import { AnpersSvg, AujardSvg, BeekaboSvg, LidingSvg, MstSvg, OutlineDashPortofolio, SkksSvg, Agsl } from "../../assets/svg"
import {
  Agsl,
  Anpers,
  AuJardin,
  Beekaboo,
  Cilicon,
  Fresh,
  Godiva,
  Lerivage,
  PapaShark,
  Respack,
  OutlineDashPortofolio,
} from "../../assets/svg";
import "./style/OurClient.scss";
// import { nanoid } from "nanoid";
// import times from "lodash/times";
// import Marquee from "react-marquee-slider";

const OurClient = (props) => {
  // const [velocity, setVelocity] = useState(15);
  // const logo = [
  //     LidingSvg,
  //     MstSvg,
  //     BeekaboSvg,
  //     SkksSvg,
  //     AujardSvg,
  //     AnpersSvg,
  //     LidingSvg,
  //     MstSvg,
  //     BeekaboSvg,
  //     SkksSvg,
  //     AujardSvg,
  //     AnpersSvg,
  // ]
  // const [key, setKey] = useState(nanoid());

  // const onHover = () =>{
  //     setVelocity(0)
  // }
  // const onMouseLeave = () =>{
  //     setVelocity(15)
  // }

  // useEffect(() => {
  //     setKey(nanoid());
  //   }, []);

  return (
    <div className="md:h-auto w-screen md:px-24 px-8 py-24 ">
      <div className="flex flex-col space-y-2 items-center justify-center">
        <div className="flex flex-col items-start justify-start space-y-2 ">
          <img
            src={OutlineDashPortofolio}
            className="ml-2"
            alt=""
            data-aos="fade-up"
            data-aos-duration="3000"
          />
          <h1
            className="tahoma-bold text-5xl text-eglobe-green"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            Our <span className="text-eglobe-orange">Client</span>
          </h1>
        </div>
        <div
          className="inter-regular text-base font-normal"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          See how we’ve helped ambitious clients achieve extraordinary outcomes
        </div>
        <br />
        <br />
        </div>
        <div className="client--logos">
          <img className="" src={Agsl} alt="" />
          <img className="" src={Anpers} alt="" />
          <img className="" src={AuJardin} alt="" />
          <img className="" src={Beekaboo} alt="" />
          <img className="" src={Cilicon} alt="" />
          <img className="" src={Fresh} alt="" />
          <img className="" src={Godiva} alt="" />
          <img className="" src={Lerivage} alt="" />
          <img className="" src={PapaShark} alt="" />
          <img className="" src={Respack} alt="" />
        </div>
        {/* <Marquee  key={key} velocity={velocity}>
                {times(6, Number).map((id, i) => (
                    <div key={i} onMouseOver={()=>onHover()} onMouseLeave={()=>onMouseLeave()} className="flex items-center justify-center mx-4">
                        <img className={`col-span-1 transition ease-in-out cursor-pointer hover:-translate-y-2 hover:scale-120 duration-3000`} src={logo[id]} key={`logo-${id}`} alt="" />
                    </div>
                ))}
            </Marquee> */}
      </div>
  );
};

export default OurClient;
