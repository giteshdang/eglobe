import { useState } from "react";
import { MenuSvg, NewLogoSvg, YellowLogoSvg } from "../../assets/svg";
import logo from "../../assets/svg/logo.svg";
import { Link } from "react-router-dom";
import { StyleSheet, css } from "aphrodite";
import { fadeInDown } from "react-animations";
import config from "../../config";

const HeaderWeb = (props) => {
  const [isActive, setIsActive] = useState("home");
  const [isToggle, setIsToggle] = useState(false);
  const handleSidebar = () => {
    setIsToggle(!isToggle);
  };
  const handleClickHome = () => {
    setIsActive("home");
  };

  const handleClickService = () => {
    setIsActive("service");
  };

  const handleClickAboutUs = () => {
    setIsActive("about");
  };

  const handleClickBlog = () => {
    setIsActive("blog");
  };

  const handleClickCareer = () => {
    setIsActive("career");
  };

  const handleClickContactUs = () => {
    setIsActive("contactus");
  };

  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className={`top-0 overflow-hidden left-0 right-0 z-50 fixed`}>
      <header
        className={`${css(
          styles.fadeInDown
        )}h-14 hidden md:block fixed z-40 top-0 right-0 left-0 w-full`}
      >
        <div className="grid grid-cols-2 gap-4 px-8 py-2">
          <div className="col-span-1 flex justify-start items-center">
            <img src={NewLogoSvg} className="h-12 site--logo" alt="" />
            <img src={YellowLogoSvg} className="yellow--logo" alt="" />
          </div>
          <div className="col-span-1 flex justify-end items-center site--nav">
            <div className="flex roboto-bold flex-row space-x-8 desktop-menu-list">
              <Link
                style={{ textDecoration: "none" }}
                to={`${config.basename}${"/"}`}
              >
                <div
                  className={`hover:text-eglobe-orange whitespace-nowrap  ${
                    isActive === "home"
                      ? "text-eglobe-orange"
                      : "text-eglobe-green"
                  }`}
                  onClick={() => handleClickHome()}
                >
                  Home
                </div>
              </Link>
              <Link
                style={{ textDecoration: "none" }}
                to={`${config.basename}${"/services"}`}
              >
                <div
                  className={`hover:text-eglobe-orange whitespace-nowrap ${
                    isActive === "service"
                      ? "text-eglobe-orange"
                      : "text-eglobe-green"
                  }`}
                  onClick={() => handleClickService()}
                >
                  Services
                </div>
              </Link>
              <Link
                style={{ textDecoration: "none" }}
                to={`${config.basename}${"/about"}`}
              >
                <div
                  className={`hover:text-eglobe-orange whitespace-nowrap ${
                    isActive === "about"
                      ? "text-eglobe-orange"
                      : "text-eglobe-green"
                  }`}
                  onClick={() => handleClickAboutUs()}
                >
                  About Us
                </div>
              </Link>
              <p
                style={{ textDecoration: "none", marginBottom: "0" }}
              >
                <div
                  className={`hover:text-eglobe-orange whitespace-nowrap ${
                    isActive === "blog"
                      ? "text-eglobe-orange"
                      : "text-eglobe-green"
                  }`}
                >
                  Blog
                </div>
                <div className="drop--menu--list">
                    <Link
                      style={{ textDecoration: "none" }}
                      to={`${config.basename}${"/blog-we-care"}`}
                    >
                      <div
                        className={`hover:text-eglobe-orange whitespace-nowrap`}
                        onClick={() => handleClickBlog()}
                      >
                        We Care
                      </div>
                    </Link>
                    <Link
                      style={{ textDecoration: "none" }}
                      to={`${config.basename}${"/blog-business-insiders"}`}
                    >
                      <div
                        className={`hover:text-eglobe-orange whitespace-nowrap`}
                        onClick={() => handleClickBlog()}
                      >
                        Business Insiders
                      </div>
                    </Link>
                  </div>
              </p>
              <Link
                style={{ textDecoration: "none" }}
                to={`${config.basename}${"/career"}`}
              >
                <div
                  className={`hover:text-eglobe-orange whitespace-nowrap ${
                    isActive === "career"
                      ? "text-eglobe-orange"
                      : "text-eglobe-green"
                  }`}
                  onClick={() => handleClickCareer()}
                >
                  Career
                </div>
              </Link>
              <Link
                style={{ textDecoration: "none" }}
                to={`${config.basename}${"/contact-us"}`}
              >
                <div
                  className={`hover:text-eglobe-orange whitespace-nowrap ${
                    isActive === "contactus"
                      ? "text-eglobe-orange"
                      : "text-eglobe-green"
                  }`}
                  onClick={() => handleClickContactUs()}
                >
                  Contact Us
                </div>
              </Link>
            </div>
          </div>
        </div>
      </header>
      <header className="h-14 block md:hidden fixed z-40 top-0 right-0 left-0 w-full">
        <div className="flex justify-between flex-row px-4 items-center py-2">
          <div className="col-span-1 flex justify-start items-center">
            <img src={logo} className="h-10" alt="" />
          </div>
          <div>
            <button onClick={() => handleSidebar()}>
              <img src={MenuSvg} alt="" />
            </button>
          </div>
        </div>
      </header>
      <main
        hidden={isToggle === true ? false : true}
        className=" md:flex flex-col md:flex-row md:min-h-screen w-full"
      >
        <div
          className="flex flex-col w-full md:w-64 text-gray-700 bg-white dark-mode:text-gray-200 dark-mode:bg-gray-800 flex-shrink-0"
          x-data="{ open: false }"
        >
          <div className="flex-shrink-0 px-8 py-4 flex flex-row items-center justify-between">
            <a
              href="#"
              className="text-lg font-semibold tracking-widest text-gray-900 uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline"
            >
              Flowtrail UI
            </a>
            <button
              onClick={() => handleSidebar()}
              className="rounded-lg md:hidden rounded-lg focus:outline-none focus:shadow-outline"
            >
              x
            </button>
          </div>
          <nav className="flex-grow md:block px-4 pb-4 md:pb-0 md:overflow-y-auto">
            <Link
              to={`${config.basename}${"/"}`}
              className="block px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-gray-200 rounded-lg dark-mode:bg-gray-700 dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
              href="#"
            >
              Home
            </Link>
            <Link
              to={`${config.basename}${"/services"}`}
              className="block px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
              href="#"
            >
              Services
            </Link>
            <Link
              to={`${config.basename}${"/about"}`}
              className="block px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
              href="#"
            >
              About
            </Link>
            <Link
              to={`${config.basename}${"/blog"}`}
              className="block px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
              href="#"
            >
              Blog
            </Link>
            <Link
              to={`${config.basename}${"/career"}`}
              className="block px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
              href="#"
            >
              Career
            </Link>
            <Link
              to={`${config.basename}${"/contact-us"}`}
              className="block px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
              href="#"
            >
              Contact US
            </Link>
          </nav>
        </div>
        <section
          onClick={() => handleSidebar()}
          className="h-screen w-screen bg-opacity-50 bg-black"
        ></section>
      </main>
    </div>
  );
};

const styles = StyleSheet.create({
  fadeInDown: {
    animationName: fadeInDown,
    animationDuration: "2s",
  },
});
export default HeaderWeb;
