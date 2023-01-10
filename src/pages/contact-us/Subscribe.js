import {
  GroupPeople,
  CreativeSvg,
  OutlineDashStaff,
  SubsCircleSvg,
  UserSvg,
  EmailSvg,
  EditSvg,
} from "../../assets/svg";
import buildingsyellow from "../../assets/svg/icons/buildingsyellow.svg";
import messageyellow from "../../assets/svg/icons/messageyellow.svg";
import phoneyellow from "../../assets/svg/icons/phoneyellow.svg";

const Subscribe = (props) => {
  return (
    <div className="w-screen md:h-screen relative px-8 md:px-0 md:py-0 flex items-center justify-center overflow-hidden contact--subscribe--section">
      <div className="md:grid-cols-5 items-center my-16 md:my-0  h-auto grid-cols-1 grid gap-16">
        <div className="flex col-span-1 md:col-span-2 md:pl-24 items-start space-y-2 flex-col ">
          <img
            src={OutlineDashStaff}
            alt=""
            data-aos="fade-right"
            data-aos-duration="3000"
          />
          <h1
            className="tahoma-bold text-4xl text-eglobe-green"
            data-aos="fade-right"
            data-aos-duration="3000"
          >
            Get in <span className="text-eglobe-orange">Touch</span>
          </h1>
          <div
            className="inter-regular text-base"
            data-aos="fade-right"
            data-aos-duration="3000"
          >
            We’d love to discuss how our services can help your business thrive!
          </div>
          <div className="flex flex-col space-y-4 w-full">
            <div
              className="flex mt-4 flex-row pl-4 pr-2 border py-2  rounded-md border-white bg-form-input"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <input
                placeholder="Name"
                className="bg-opacity-0 outline-none flex-grow bg-yellow-400"
              />
              <button className="px-2">
                <img src={UserSvg} alt="" />
              </button>
            </div>
            <div
              className="flex mt-3 flex-row pl-4 pr-2 border py-2  rounded-md border-white bg-form-input"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <input
                placeholder="Email"
                className="bg-opacity-0 outline-none flex-grow bg-yellow-400"
              />
              <button className="px-2">
                <img src={EmailSvg} alt="" />
              </button>
            </div>
            <div
              className="relative mt-3 items-start pl-4 pr-4 border py-2  rounded-md border-white bg-form-input"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <textarea
                placeholder="Message"
                className="h-28 pr-6 items-start  w-full outline-none flex-grow bg-opacity-0 bg-yellow-400"
              />
              <button className="absolute right-4 top-2">
                <img src={EditSvg} alt="" />
              </button>
            </div>
          </div>
          <br />
          <br />
          <div
            className="flex justify-center  items-center w-full"
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
          >
            <button className="py-3 px-8 rounded-md bg-eglobe-green text-white inter-regular text-sm">
              Send
            </button>
          </div>
        </div>
        <div className="relative col-span-1 h-full flex items-center justify-end md:col-span-3">
          <div className="absolute top-0 bg-eglobe-orange w-64 right-0 h-full"></div>
          <div
            className=" z-20 py-4 md:max-w-lg pl-4 border-dashed border-l border-y border-eglobe-green "
            data-aos="fade-left"
            data-aos-duration="3000"
          >
            <div className="px-8 flex flex-col gap-4 md:px-12 py-12 md:py-24 bg-eglobe-green">
              <div className="flex inter-regular text-white flex-row gap-2 items-start justify-start">
                <div>
                  <img
                    src={buildingsyellow}
                    className="w-12 h-12 object-fill"
                    alt=""
                  />
                </div>
                <div>
                  Unit 2403, Tung Wai Commercial Building, 109-111 Gloucester
                  Road, Wanchai, Hong Kong
                </div>
              </div>
              <div className="flex inter-regular text-white flex-row gap-2 items-start justify-start">
                <div>
                  <img
                    src={phoneyellow}
                    className="w-6 h-6 object-fill"
                    alt=""
                  />
                </div>
                <div>+1-978-489-8949</div>
              </div>
              <div className="flex inter-regular text-white flex-row gap-2 items-start justify-start">
                <div>
                  <img
                    src={messageyellow}
                    className="w-6 h-6 object-fill"
                    alt=""
                  />
                </div>
                <div>info@e-gconsulting.com</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
