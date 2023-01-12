import { Link } from "react-router-dom";
import "./Home.scss";
import image1 from "../../assets/image/career-1.png";

const Dream = (props) => {
  return (
    <div className="dream--section--blocks">
      <div className="dream--section--block row">
        <div className="col-xs-12 col-md-4">
          <div className="dream--section--block--content bg--eglobe--light">
            <h3>Find your dream job in E-Globe!</h3>
            <p>
              We found our purposes through the impact we make on others. You,
              too, can find yours.
            </p>
            <p>*Brife explanation*</p>
            <div className="join--btn">
              <Link to="#">Join Now</Link>
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-md-4">
          <div className="dream--section--block--two--row">
            <div className="dreem--section--image dream--section--block--content long--height--block">
              <img src={image1} alt="Image" />
            </div>
            <div className="dream--section--block--content short--height--block bg--eglobe--light--green" style={{"marginTop" : "1.5rem"}}>
              <h3>Benefits:</h3>
              <ul>
                <li>Annual Outing</li>
                <li>Free training</li>
                <li>Connection with people from many countries</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-md-4">
          <div className="dream--section--block--two--row">
            <div className="text-center dream--section--block--content short--height--block bg--eglobe--light--blue">
              <h3>Vacancy</h3>
            </div>
            <div className="dreem--section--image dream--section--block--content long--height--block" style={{"marginTop" : "1.5rem"}}>
              <img src={image1} alt="Image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dream;
