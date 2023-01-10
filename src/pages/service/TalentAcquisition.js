import serviceImg from "../../assets/png/service2.png"
import TalentNew from '../../assets/image/instruct_talent.png'
import ballSvg from '../../assets/svg/icons/ball.svg'
const TalentAcquisition = (props) =>{
    return (
        <div className="branding--section bg-red-100 grid grid-cols-1 md:grid-cols-2 gap-4 md:h-auto w-screen md:px-24 px-8 py-8 ">
            <div className="col-span-1 flex items-center justify-center">
                <img src={TalentNew} alt="" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" />
            </div>
            <div className="col-span-1 flex flex-col items-start justify-center">
                <h3 className="text-4xl tahoma-bold text-eglobe-red" data-aos='fade-left' data-aos-duration='3000'>Talent Acquisition & Training</h3>
                <div className="mt-4 inter-regular text-md" data-aos='fade-left' data-aos-duration='3000'>
                Human assets are the significant root of the company. We can help you identify, acquire, and assess skilled workers to meet your organizational objectives. We develop your support to be the pillars of the company!
                </div>
            </div>
        </div>
    )
}

export default TalentAcquisition;