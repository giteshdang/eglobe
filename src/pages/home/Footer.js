import { EmailWhiteSvg, LogoWhiteSvg, PhoneSvg, SendSvg } from "../../assets/svg"

const Footer = (props) =>{
    return (
        <div className="px-8 md:px-24 mt-8 py-8 bg-eglobe-red flex flex-col space-y-16">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
           <div className="flex flex-col space-y-2 col-span-1">
                <img src={LogoWhiteSvg} className="w-40" alt="" data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom"/>
                <div className="inter-regular text-white text-sm" data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom">Unit 2403, Tung Wai Commercial Building, 109-111 Gloucester Road, Wanchai, Hong Kong</div>
                <div className="flex flex-row space-x-4 inter-regular text-white text-sm" data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom">
                    <div>
                        <img src={PhoneSvg} alt="" />
                    </div>
                    <div>+1-978-489-8949</div>
                </div>
                <div className="flex flex-row space-x-4 inter-regular text-white text-sm" data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom">
                <div>
                        <img src={EmailWhiteSvg} alt="" />
                    </div>
                    <div>
                    info@e-gconsulting.com</div></div>
            </div>
            <div className="flex flex-col col-span-1  md:mt-4 text-white md:items-center">
                <div className="flex flex-col space-y-6">
                <div className="flex items-start" data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom">
                    <div className="inter-bold text-base">Uselink</div>
                </div>
                <div className="inter-regular text-sm flex flex-col space-y-2 items-start">
                    <div className="cursor-pointer hover:font-bold" data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom">Service</div>
                    <div className="cursor-pointer hover:font-bold" data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom">About Us</div>
                    <div className="cursor-pointer hover:font-bold" data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom">Blog</div>
                    <div className="cursor-pointer hover:font-bold" data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom">Career</div>
                    <div className="cursor-pointer hover:font-bold" data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom">Contact Us</div>
                </div>
                </div>
            </div>
            <div className="flex flex-col space-y-2 md:mt-4">
            <div className="inter-bold text-base text-white" data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom">Newsletter</div>
                        <div className="flex mt-4 flex-row px-2 border py-1 rounded-md border-white bg-red-100" data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom">
                            <input className="bg-opacity-0 outline-none flex-grow bg-yellow-400" />
                            <button className="px-2"><img src={SendSvg} alt="" /></button>
                        </div>
                        <div className="flex flex-row items-center mt-2 space-x-2" data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom">
                            <input type="checkbox" />
                            <div className="text-white inter-regular text-sm">I have read and agree the privacy police</div>
                        </div>
            </div>
           </div>
           <div>

           <div className="flex flex-row space-x-4 inter-regular text-white text-sm" data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom">© 2018 - 2021 by E-Globe Consulting Limited.</div>
                <div className="flex flex-row space-x-4 inter-regular text-white text-sm" data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom">Terms and Service | Privacy Police </div>
           </div>
        </div>
    )
}

export default Footer