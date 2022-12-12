import {ComingSoonSvg} from '../../assets/svg'

const ContentBlog = (props) =>{
    return (
        // <div className="p-8 md:p-16 gap-16 flex flex-row">
        //     <div className="w-64 md:block hidden">
        //         <SidebarBlog/>
        //     </div>
        //     <div className="flex-grow">
        //         <ContainerBlog/>
        //     </div>
        // </div>
        <div className="p-8 items-center w-full justify-center md:p-8  gap-8 flex flex-col">
            <img src={ComingSoonSvg} className="md:w-1/2 xl:w-1/3" alt="" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" />
            <p className='mt-8 font-bold text-4xl text-eglobe-red' data-aos='fade-up' data-aos-duration='3000'>We're Launching Soon!</p>
            <p data-aos='fade-up' data-aos-duration='3000'>Our Website is under construction. We'll be here soon with our new awesome site</p>
        </div>
    )
}

export default ContentBlog;