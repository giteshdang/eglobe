import {
  EmailWhiteSvg,
  LogoWhiteSvg,
  PhoneSvg,
  SendSvg,
  YellowLogoSvg,
} from "../../assets/svg";
import "./Footer.scss";
import { BackgroundServiceSvg } from "../../assets/svg";
const Footer = (props) => {
  return (
    <div
      style={{
        // backgroundImage: `url(${BackgroundServiceSvg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
        backgroundColor: "#087468",
      }}
      className="text-eglobe-orange flex flex-col"
    >
      <div className="div-curve w-screen"></div>
      <div className="px-8 md:px-24 mt-8 py-8  flex flex-col space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="flex flex-col space-y-2 col-span-1">
            <img
              src={YellowLogoSvg}
              className="w-40"
              alt=""
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-bottom"
              data-aos-duration="3000"
            />
            <div
              className="inter-regular text-eglobe-orange text-sm"
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-bottom"
              data-aos-duration="3000"
            >
              Unit 2403, Tung Wai Commercial Building, 109-111 Gloucester Road,
              Wanchai, Hong Kong
            </div>
            <div
              className="flex flex-row space-x-4 inter-regular text-white text-sm"
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-bottom"
              data-aos-duration="3000"
            >
              <div>
                <img src={PhoneSvg} alt="" />
              </div>
              <div>+1-978-489-8949</div>
            </div>
            <div
              className="flex flex-row space-x-4 inter-regular text-white text-sm"
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-bottom"
              data-aos-duration="3000"
            >
              <div>
                <img src={EmailWhiteSvg} alt="" />
              </div>
              <div>info@e-gconsulting.com</div>
            </div>
          </div>
          <div className="flex flex-col col-span-1  md:mt-4 text-white md:items-center">
            <div className="flex flex-col space-y-6">
              <div
                className="flex items-start"
                data-aos="fade-up"
                data-aos-anchor-placement="bottom-bottom"
                data-aos-duration="3000"
              >
                <div className="inter-bold text-lg text-eglobe-orange">
                  Uselink
                </div>
              </div>
              <div className="inter-regular text-sm flex flex-col space-y-2 items-start">
                <div
                  className="cursor-pointer hover:font-bold"
                  data-aos="fade-up"
                  data-aos-anchor-placement="bottom-bottom"
                  data-aos-duration="3000"
                >
                  Service
                </div>
                <div
                  className="cursor-pointer hover:font-bold"
                  data-aos="fade-up"
                  data-aos-anchor-placement="bottom-bottom"
                  data-aos-duration="3000"
                >
                  About Us
                </div>
                <div
                  className="cursor-pointer hover:font-bold"
                  data-aos="fade-up"
                  data-aos-anchor-placement="bottom-bottom"
                  data-aos-duration="3000"
                >
                  Blog
                </div>
                <div
                  className="cursor-pointer hover:font-bold"
                  data-aos="fade-up"
                  data-aos-anchor-placement="bottom-bottom"
                  data-aos-duration="3000"
                >
                  Career
                </div>
                <div
                  className="cursor-pointer hover:font-bold"
                  data-aos="fade-up"
                  data-aos-anchor-placement="bottom-bottom"
                  data-aos-duration="3000"
                >
                  Contact Us
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-2 md:mt-4">
            <div
              className="inter-bold text-lg text-eglobe-orange"
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-bottom"
              data-aos-duration="3000"
            >
              Newsletter
            </div>
            <div
              className="flex mt-4 flex-row px-2 border py-1 rounded-md border-white bg-form-input"
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-bottom"
              data-aos-duration="3000"
            >
              <input
                placeholder="Enter your email address"
                className="bg-opacity-0 outline-none flex-grow bg-transparent"
              />
              <button className="px-2">
                <img src={SendSvg} alt="" />
              </button>
            </div>
            <div className="flex flex-row items-center mt-2 space-x-2">
              <input type="checkbox" />
              <div
                className="text-white inter-regular text-sm"
                data-aos="fade-up"
                data-aos-anchor-placement="bottom-bottom"
                data-aos-duration="3000"
              >
                I have read and agree the privacy police
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            className="flex flex-row space-x-4 inter-regular text-white text-sm"
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-duration="3000"
          >
            © 2018 - 2021 by E-Globe Consulting Limited.
          </div>
          {/* <div className="flex flex-row space-x-4 inter-regular text-white text-sm">Terms and Service | Privacy Police </div> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
