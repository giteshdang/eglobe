import serviceImg from "../../assets/png/service2.png"
import BrandNew from '../../assets/image/instruct_brand.png'
import ballSvg from '../../assets/svg/icons/ball.svg'
const BrandingDesign = (props) =>{
    return (
        <div className="branding--section branding--section--style-1 flex-col flex md:flex-row-reverse md:h-auto w-screen md:px-24 px-8 py-8 gap-4">
            <div className="flex-1 flex items-center justify-center">
                <img src={BrandNew} alt="" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"/>
            </div>
            <div className="flex-1 flex flex-col items-start justify-center">
                <h3 className="text-4xl tahoma-bold text-eglobe-red" data-aos='fade-right' data-aos-duration='3000'>Branding & Design</h3>
                <div className="mt-4 inter-regular text-md" data-aos='fade-right' data-aos-duration='3000'>
                We believe that branding is the ‘soul’ of any business as it defines your mission & vision, products, and services. Our service provides a creative design of logos, brand books, brochures, and websites that align with your company’s branding strategy, targeted market, products, and services.
                </div>
            </div>
            
        </div>
    )
}

export default BrandingDesign;