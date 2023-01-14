import { Link } from "react-router-dom";
import "./Home.scss";
import image1 from "../../assets/image/career-1.png";

const Internship = (props) => {
  return (
    <div className="dream--section--blocks">
      <div className="dream--section--block row">
        <div className="col-xs-12 col-md-5">
          <div className="dream--section--block--content bg-eglobe-green text--eglobe-yellow-light">
            <h3>Internship Collabration</h3>
          </div>
        </div>
        <div className="col-xs-12 col-md-7">
          <div className="dream--section--block--content bg-eglobe-orange text--eglobe-yellow-light">
            <h3>Why us?</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Internship;
