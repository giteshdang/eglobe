import serviceImg from "../../assets/png/service2.png"
import TranslateNew from '../../assets/image/instruct_translate.png'
import ballSvg from '../../assets/svg/icons/ball.svg'
const WritingTranslation = (props) =>{
    return (
        <div className="branding--section bg-red-100 grid grid-cols-1 md:grid-cols-2 gap-4 md:h-auto w-screen md:px-24 px-8 pt-8 pb-8 md:pt-24 ">
            <div className="col-span-1 flex items-center justify-center">
                <img src={TranslateNew} alt="" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"/>
            </div>
            <div className="col-span-1 flex flex-col items-start justify-center">
                <h3 className="text-4xl tahoma-bold text-eglobe-red" data-aos='fade-left' data-aos-duration='3000'>Writing & Translation</h3>
                <div className="mt-4 inter-regular text-md" data-aos='fade-left' data-aos-duration='3000'>
                Professional writing is necessary for all types of businesses. Our staff, who are highly competent and experienced in language and writing, can confidently be your hand to narrate the best story in helping your business succeed.
                </div>
                <div className="flex items-start flex-row gap-4 mt-3" data-aos='fade-left' data-aos-duration='3000'>
                    <div className="flex-none" >
                        <img src={ballSvg} alt="" />
                    </div>
                    <div className="flex-grow text-md">
                    Analyze your intended audience of business-related communications and adapt appropriate writing or translating style to achieve the best results.
                    </div>
                </div>
                <div className="flex items-start flex-row gap-4 mt-2 text-md" data-aos='fade-left' data-aos-duration='3000'>
                    <div className="flex-none">
                        <img src={ballSvg} alt="" />
                    </div>
                    <div className="flex-grow">
                    Recognize and correct grammatical, style, and usage errors in any existing documents.
                    </div>
                </div>
                <div className="flex items-start flex-row gap-4 mt-2 text-md" data-aos='fade-left' data-aos-duration='3000'>
                    <div className="flex-none">
                        <img src={ballSvg} alt="" />
                    </div>
                    <div className="flex-grow">
                    Improve your company’s credibility and reputation to any partner by sending clear, effective written/translated documents.
                    </div>
                </div>
                <div className="flex items-start flex-row gap-4 mt-2 text-md" data-aos='fade-left' data-aos-duration='3000'>
                    <div className="flex-none">
                        <img src={ballSvg} alt="" />
                    </div>
                    <div className="flex-grow">
                    Convert your ideas to persuasive business writing through our fingers to assist you in the project bidding process, pitching project proposals, or implementation.i
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WritingTranslation;