import { useEffect, useRef, useState } from "react";
import { AnpersSvg, AujardSvg, BeekaboSvg, LidingSvg, MstSvg, OutlineDashPortofolio, SkksSvg } from "../../assets/svg"
import './OurClient.scss'
import { nanoid } from "nanoid";
import times from "lodash/times";
import Marquee from "react-marquee-slider";

const OurClient = (props)=>{
    const [velocity, setVelocity] = useState(15);
    const logo = [
        LidingSvg,
        MstSvg,
        BeekaboSvg,
        SkksSvg,
        AujardSvg,
        AnpersSvg,
        LidingSvg,
        MstSvg,
        BeekaboSvg,
        SkksSvg,
        AujardSvg,
        AnpersSvg,
    ]
    const [key, setKey] = useState(nanoid());

    const onHover = () =>{
        setVelocity(0)
    }
    const onMouseLeave = () =>{
        setVelocity(15)
    }
    
    useEffect(() => {
        setKey(nanoid());
      }, []);
    
    return (
        <div className="md:h-auto w-screen md:px-24 px-8 py-24 ">
            <div className="flex flex-col space-y-2 items-center justify-center">
           
            <div className="flex flex-col items-start justify-start space-y-2 ">
                <img src={OutlineDashPortofolio} className="ml-2" alt="" data-aos='fade-up' data-aos-duration='3000'/>
                <h1 className="tahoma-bold text-5xl" data-aos='fade-up' data-aos-duration='3000'>
                Our {" "}
                <span className="text-eglobe-orange">Client</span>
                </h1>
            </div>
            <div className="inter-regular text-base font-normal" data-aos='fade-up' data-aos-duration='3000'>See how we’ve helped ambitious clients achieve extraordinary outcomes</div>
            <br />
            <br />
            {/* <div className="grid-cols-3 items-center grid md:grid-cols-6 flex-wrap gap-8  md:gap-16">
                <img className="col-span-1" src={LidingSvg} alt="" />
                <img className="col-span-1" src={MstSvg} alt="" />
                <img className="col-span-1" src={BeekaboSvg} alt="" />
                <img className="col-span-1" src={SkksSvg} alt="" />
                <img className="col-span-1" src={AujardSvg} alt="" />
                <img className="col-span-1" src={AnpersSvg} alt="" />
            </div> */}
            <Marquee  key={key} velocity={velocity}>
                {times(6, Number).map((id, i) => (
                    <div key={i} onMouseOver={()=>onHover()} onMouseLeave={()=>onMouseLeave()} className="flex items-center justify-center mx-4">
                        <img className={`col-span-1 transition ease-in-out cursor-pointer hover:-translate-y-2 hover:scale-120 duration-3000`} src={logo[id]} key={`logo-${id}`} alt="" />
                    </div>
                ))}
            </Marquee>
            </div>
        </div>
    )

}

export default OurClient