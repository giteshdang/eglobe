import { ComingSoonSvg, SendSvg } from "../../assets/svg";
import tumb1 from "../../assets/svg/career/tumb1.svg";
import tumb2 from "../../assets/svg/career/tumb2.svg";
import tumb3 from "../../assets/svg/career/tumb3.svg";
import tumb4 from "../../assets/svg/career/tumb4.svg";
import empty from "../../assets/svg/undraw_empty.svg";
import location from "../../assets/svg/career/location.svg";
import suitcase from "../../assets/svg/career/suitcase.svg";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CareerContent = (props) => {
  const data = [
    // {
    //   title: "Junior 3D Animator",
    //   location: "Jakarta, Indonesia",
    //   type: "Full Time - Work from Office ",
    //   image: tumb1,
    // },
    // {
    //   title: "Human Resources Executive/Assistant",
    //   location: "Kuala Lumpur, Malausia",
    //   type: "Full Time - Work from Office ",
    //   image: tumb2,
    // },
    // {
    //   title: "Marketing",
    //   location: "All Country",
    //   type: "Internship- Work from Home ",
    //   image: tumb3,
    // },
    // {
    //   title: "Software Engineer",
    //   location: "Bangkok, Thailand",
    //   type: "Full Time - Work from Office ",
    //   image: tumb4,
    // },
  ];
  
  return (
    // <div className="p-8 inter-regular md:p-16 flex flex-col">
    //   <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-24">
    //     <div className="grid col-span-1 grid-cols-2 gap-4">
    //       <div class="col-span-1">
    //         <select
    //           class="px-4 w-full border py-1 appearance-none h-10 rounded-md border-white bg-red-100"
    //           aria-label="Default select example"
    //         >
    //           <option selected disabled>
    //             Choose Location
    //           </option>
    //           {/* <option value="1">One</option>
    //           <option value="2">Two</option>
    //           <option value="3">Three</option> */}
    //         </select>
    //       </div>
    //       <div class="col-span-1">
    //         <select
    //           class="px-4 w-full border py-1 appearance-none h-10 rounded-md border-white bg-red-100"
    //           aria-label="Default select example"
    //         >
    //           <option selected disabled>
    //             Choose Type
    //           </option>
    //           {/* <option value="1">One</option>
    //           <option value="2">Two</option>
    //           <option value="3">Three</option> */}
    //         </select>
    //       </div>
    //     </div>
    //     <div className="col-span-1 flex justify-end">
    //       <div className="flex w-full md:w-1/2 h-10 flex-row px-2 border py-1 rounded-md border-white bg-red-100">
    //         <input placeholder="Search your job" className="bg-opacity-0 outline-none flex-grow bg-yellow-400" />
    //         <button className="px-2">
    //           <FontAwesomeIcon icon={faSearch} />
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    //   {
    //     data.length === 0 ?
    //     (<>
    //       <div className="mt-8 mb-8 w-full md:mt-24 md:mb-24 flex flex-col items-center justify-center">
    //         <img src={empty} alt="" class="w-40" />
    //         <p class="text-base mt-4">
    //           Data Not Found
    //         </p>
    //       </div>
    //     </>) :
    //     (<>
    //       <div className="mt-8 grid col-span-1 md:grid-cols-2 gap-8">
    //     {data.map((val) => {
    //       return (
    //         <div className="col-span-1 p-2  border-dashed border rounded-lg border-eglobe-red">
    //           <div className="p-4 rounded-lg  bg-eglobe-red grid gap-8 grid-cols-3">
    //             <div className="flex  items-left justify-left col-span-1">
    //               <img src={val.image} alt="" />
    //             </div>
    //             <div className="flexflex-col col-span-2">
    //               <div className="text-lg md:text-2xl text-eglobe-yellow h-24 font-bold ">
    //                 {val.title}
    //               </div>
    //               <div className=" text-white items-center text-md md:text-base flex flex-row gap-2">
    //                 <img src={location} alt="" /> <div>{val.location}</div>
    //               </div>
    //               <div className="mt-2 flex-row items-center text-md md:text-base flex gap-2 text-white">
    //                 <div>
    //                   <img src={suitcase} alt="" />{" "}
    //                 </div>
    //                 <div>{val.type}</div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       );
    //     })}
    //   </div>
    //     </>)
    //   }
    // </div>
    <div className="p-8 items-center w-full justify-center md:p-8  gap-8 flex flex-col">
            <img src={ComingSoonSvg} className="md:w-1/2 xl:w-1/3" alt="" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" />
            <p className='mt-8 font-bold text-4xl text-eglobe-green' data-aos='fade-up' data-aos-duration='3000'>We're Launching Soon!</p>
            <p data-aos='fade-up' data-aos-duration='3000'>Our Website is under construction. We'll be here soon with our new awesome site</p>
        </div>
  );
};

export default CareerContent;
