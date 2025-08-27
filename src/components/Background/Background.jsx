import "./Background.css";
import video1 from "../../Assets/video1.mp4";
import image1 from "../../Assets/image1.png";
import image2 from "../../Assets/image2.png";
import image3 from "../../Assets/image3.png";

const Background = ({ playStatus, heroCount }) => {
  const images = [image1, image2, image3];

  if (playStatus) {
    return (
      <video className="background" autoPlay loop muted>
        <source src={video1} type="video/mp4" />
      </video>
    );
  } else {
    return <img src={images[heroCount]} className="background" alt="hero" />;
  }
};

export default Background;
