import serviceImg from "../../assets/png/service2.png"
import ballSvg from '../../assets/svg/icons/ball.svg'
const ClientServices = (props) =>{
    return (
        <div className="bg-red-100 flex-col flex md:flex-row-reverse md:h-auto w-screen md:px-24 px-8 py-8 gap-4">
            <div className="flex-1 flex items-center justify-center">
                <img src={serviceImg} alt="" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" />
            </div>
            <div className="flex-1 flex flex-col items-start justify-center" >
                <h3 className="text-4xl tahoma-bold text-eglobe-red" data-aos='fade-right' data-aos-duration='3000'>Client Services & Real-Time Interpretation</h3>
                <div className="mt-4 inter-regular text-md" data-aos='fade-right' data-aos-duration='3000'>
                Your business virtual assistant and interpreter are ready to serve at will! Our team can help you respond to email inquiries, maintain customer service relationships with clients abroad, and manage social media messages to any real-time interpretation (simultaneous, consecutive, side translation). We are here to be your communicator to break the language barrier.
                </div>
            </div>
            
        </div>
    )
}

export default ClientServices;