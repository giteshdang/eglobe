import { GroupPeople, CreativeSvg, OutlineDashStaff, SubsCircleSvg, UserSvg, EmailSvg, EditSvg, SubsCircleDashSvg, CircleDashOrangeSvg } from "../../assets/svg"
import './style/Subscribe.scss'
const Subscribe = (props)=>{
    return (
        <div className="w-screen h-auto px-8 md:px-24 md:py-0 flex items-center justify-center my-16 md:my-0  overflow-hidden">
            <div className="md:grid-cols-2 items-center h-auto grid-cols-1 grid gap-16">
            <div className="col-span-1 relative w-full h-auto" >
                        <div className="absolute md:-left-12 -left-4 top-0">
                            <img className=" w-20 h-20 md:w-64 md:h-64" src={SubsCircleSvg} alt="" />
                        </div>
                            <div className="absolute img-dash right-2 bottom-2">
                            <img className="w-40 h-40 md:w-72 md:h-72" src={CircleDashOrangeSvg} alt="" />
                        </div>
                         <div className=" md:mb-28 mb-12 mt-8 md:mt-28   h-full w-full  flex items-center" data-aos="slide-right" data-aos-duration="3000">
                         <img
                            src="https://img.freepik.com/free-photo/financial-broker-explaning-business-data-his-client_8087-2667.jpg?size=626&ext=jpg"
                            className="z-10 object-cover"
                            alt=""
                            />
                         </div>
                         
                    </div>
                <div className="flex col-span-1 md:pl-24 items-start space-y-2 flex-col ">
                    <img src={OutlineDashStaff} alt="" data-aos="fade-right" data-aos-duration="3000"/>
                    <h1 className="tahoma-bold text-4xl  text-eglobe-green" data-aos="fade-left" data-aos-duration="3000">
                    Contact  {" "}
                        <span className="text-eglobe-orange">Us</span>
                    </h1>
                    <div className="inter-regular text-base" data-aos="fade-left" data-aos-duration="3000">We’d love to discuss how our services can help your business thrive!</div>
                    <div className="flex flex-col space-y-4 w-full" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="3000">
                    <div className="flex mt-4 flex-row pl-4 pr-2 border py-2  rounded-md border-white bg-form-input">
                            <input placeholder="Name" className="bg-opacity-0 outline-none flex-grow bg-yellow-400" />
                            <button className="px-2"><img src={UserSvg} alt="" /></button>
                        </div>
                        <div className="flex mt-3 flex-row pl-4 pr-2 border py-2  rounded-md border-white bg-form-input">
                            <input placeholder="Email" className="bg-opacity-0 outline-none flex-grow bg-yellow-400" />
                            <button className="px-2"><img src={EmailSvg} alt="" /></button>
                        </div>
                        <div className="relative mt-3 items-start pl-4 pr-4 border py-2  rounded-md border-white bg-form-input">
                            <textarea placeholder="Message" className="h-28 pr-6 items-start  w-full outline-none flex-grow bg-opacity-0 bg-yellow-400" />
                            <button className="absolute right-4 top-2"><img src={EditSvg} alt="" /></button>
                        </div>
                    </div>
                    <br />
                    <br />
                    <div className="flex justify-center items-center w-full" data-aos="fade-up"
     data-aos-duration="3000">
                    <button className="py-3 px-8 rounded-md bg-eglobe-green text-white inter-regular text-sm">
                        Send
                    </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Subscribe;