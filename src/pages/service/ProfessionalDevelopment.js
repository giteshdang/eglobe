import serviceImg from "../../assets/png/service2.png"
import ProfdevNew from '../../assets/image/instruct_profdev.png'
import ballSvg from '../../assets/svg/icons/ball.svg'
const ProfessionalDevelopment = (props) =>{
    return (
        <div className="branding--section bg-red-100 grid grid-cols-1 md:grid-cols-2 gap-4 md:h-auto w-screen md:px-24 px-8 py-8 ">
            <div className="col-span-1 flex items-center justify-center">
                <img src={ProfdevNew} alt="" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" />
            </div>
            <div className="col-span-1 flex flex-col items-start justify-center">
                <h3 className="text-4xl tahoma-bold text-eglobe-red" data-aos='fade-left' data-aos-duration='3000'>Professional Development & Business Transformation</h3>
                <div className="mt-4 inter-regular text-md" data-aos='fade-left' data-aos-duration='3000'>
                The Covid-19 pandemic has proven that business development and transformation are necessary more than ever. We are here to provide you with the best advice and solution to your business’s changing needs to adapt to the fast-changing world.
                </div>
            </div>
        </div>
    )
}

export default ProfessionalDevelopment;