import { Link } from "react-router-dom";
import "./Home.scss";
import image1 from "../../assets/image/join-party-img.png";

const JoinParty = (props) => {
  return (
    <div className="dream--section--blocks">
      <div className="dream--section--block row">
        <div className="col-12">
          <div className="dream--section--block--content p-0 text-eglobe-orange text-eglobe-light-bg text-center">
            <div className="block--img--item">
                <img src={image1} />
            </div>
            <h3 className="m-0">Join Our Party</h3>
            <p className="m-0 party--text">and let's have fun</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinParty;
