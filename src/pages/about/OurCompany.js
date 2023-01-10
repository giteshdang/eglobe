import {
  BackgroundServiceSvg,
  OutlineDashPortofolio,
  OutlineDashStaff,
  TranslationSvg,
} from "../../assets/svg";

const OurCompany = (props) => {
  return (
    <div
      className="md:h-auto w-screen md:px-24 px-8 py-24 "
      style={{
        backgroundColor: "#087468",
      }}
    >
      <div className="flex flex-col space-y-2 items-center justify-center">
        <div className="flex flex-col items-start justify-start space-y-2 ">
          <img src={OutlineDashPortofolio} className="ml-2" alt="" data-aos="fade-up" data-aos-duration="3000"/>
          <h1 className="tahoma-bold text-center text-5xl section--title" data-aos="fade-up" data-aos-duration="3000">
          <span className="text-eglobe-orange">Value</span> in Our Company is{" "}
            <br /> S.I.M.P.L.E
          </h1>
        </div>
        <div className="md:px-24">
          <ul class="steps steps-vertical company--lists" data-aos="fade-up" data-aos-duration="3000">
            <li data-content="S" class="step step-warning step-orange" >
              <div className="flex flex-col items-start justify-start transition ease-in-out delay-150 hover:-translate-y-1  hover:scale-y-110 duration-300 cursor-pointer">
                <div className="text-base text--eglobe-yellow font-bold">
                  Smart
                </div>
                <div className="hover:font-bold text-left">
                  Talented and diversified members worldwide consolidate their
                  knowledge and skillsets to institute the best experiences from
                  the company to customers.
                </div>
              </div>
            </li>
            <li data-content="I" class="step step-warning step-orange" >
              <div className="flex flex-col items-start justify-start transition ease-in-out delay-150 hover:-translate-y-1  hover:scale-y-110 duration-300 cursor-pointer">
                <div className="text-base text--eglobe-yellow font-bold">
                  Impactful
                </div>
                <div className="cursor-pointer hover:font-bold text-left">
                  Discover effective solutions to create impactful changes to
                  improve business performance and individual development.
                </div>
              </div>
            </li>
            <li data-content="M" class="step step-warning step-orange">
              <div className="flex flex-col items-start justify-start transition ease-in-out delay-150 hover:-translate-y-1  hover:scale-y-110 duration-300 cursor-pointer">
                <div className="text-base text--eglobe-yellow font-bold">
                  Modern
                </div>
                <div className="hover:font-bold text-left">
                  Adopt modern practices to facilitate convenience in the
                  business relationship while exploring rational and suitable
                  strategies.
                </div>
              </div>
            </li>
            <li data-content="P" class="step step-warning step-orange">
              <div className="flex flex-col items-start justify-start transition ease-in-out delay-150 hover:-translate-y-1  hover:scale-y-110 duration-300 cursor-pointer">
                <div className="text-base text--eglobe-yellow font-bold">
                  Personalized
                </div>
                <div className="hover:font-bold text-left">
                  Provide flexible and customized services that meet business or
                  individual needs to maximize the working outcome and
                  satisfaction.
                </div>
              </div>
            </li>
            <li data-content="L" class="step step-warning step-orange">
              <div className="flex flex-col items-start justify-start transition ease-in-out delay-150 hover:-translate-y-1  hover:scale-y-110 duration-300 cursor-pointer">
                <div className="text-base text--eglobe-yellow font-bold">
                  Logical
                </div>
                <div className="hover:font-bold text-left">
                  Establish a stable working relationship with clients without
                  prejudices and personal sentiments, using a careful and
                  responsible analysis of the available analysis
                </div>
              </div>
            </li>
            <li data-content="S" class="step step-warning step-orange">
              <div className="flex flex-col items-start justify-start transition ease-in-out delay-150 hover:-translate-y-1  hover:scale-y-110 duration-300 cursor-pointer">
                <div className="text-base text--eglobe-yellow font-bold">
                  Enrichment
                </div>
                <div className="hover:font-bold text-left">
                  Provide constant training to ensure our elite members
                  continuously thrive in learning and enhance their soft and
                  hard skills to create a prestigious community.
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OurCompany;
