import { Link } from "react-router-dom";
import greenHousePlanting from "../../images/greenHousePlanting.jpg";
import pickingProduce from "../../images/pickingProduce.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AboutUs = () => {
  return (
    <div className="section">
      <div className="aboutContainer">
        <div className="title">
          <h1>About Us</h1>
        </div>
        <div className="aboutContent">
          <div className="article">
            <h3>Join us in Gardening and trading with your neighbors</h3>
            <p>
              The founders at Love Thy Earth are seeking to programmatically solve various
              problems seen in America. The American lawn has long been seen as a thing to
              admire and show to neighbors. We believe there is nothing wrong with that!
              However, a huge portion of land that is available for food production is
              being wasted. Love Thy Earth was created to foster and encourage people to
              garden with large portions of their lawn space and trade with others in
              order to make use of the available land.
            </p>
            <div className="aboutUsButton">
              <a href="#">Read More</a>
            </div>
          </div>
        </div>
        <div className="image-section">
          <img src={pickingProduce}></img>
        </div>
        <div className="social">
          <a href="">
            <FontAwesomeIcon icon="fa-brands fa-facebook" className="i faceBookIcon" />
          </a>
          <a href="">
            <FontAwesomeIcon icon=" fa-brands fa-twitter" className="i twitterIcon" />
          </a>
          <a href="">
            <FontAwesomeIcon icon=" fa-brands fa-instagram" className="i instagramIcon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
