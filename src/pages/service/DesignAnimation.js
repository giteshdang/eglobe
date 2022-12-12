import serviceImg from "../../assets/png/service2.png"
import ballSvg from '../../assets/svg/icons/ball.svg'
const DesignAnimation = (props) =>{
    return (
        <div className="bg-red-100 flex-col flex md:flex-row-reverse md:h-auto w-screen md:px-24 px-8 pb-8 pt-8 md:pb-24 gap-4">
            <div className="flex-1 flex items-center justify-center">
                <img src={serviceImg} alt="" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"/>
            </div>
            <div className="flex-1 flex flex-col items-start justify-center">
                <h3 className="text-4xl tahoma-bold text-eglobe-red" data-aos='fade-right' data-aos-duration='3000'>2D/3D Design and Animation</h3>
                <div className="mt-4 inter-regular text-md" data-aos='fade-right' data-aos-duration='3000'>
                    <p> The entertainment and advertisement world has grown exponentially in the last few years. To cater to our clients’ goals and needs, we have expanded our wings to provide 2D and 3D design and animation for marketing purposes as well as content production processes.</p>
                    <br/>
                    <p>We cater to your business transformation needs to stay competitive in the evershifting macroenvironment! </p>
                </div>
            </div>
            
        </div>
    )
}

export default DesignAnimation;