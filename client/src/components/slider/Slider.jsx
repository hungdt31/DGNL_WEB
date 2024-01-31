import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import slideImg1 from "./DGNL.png";
import slideImg2 from "./PlayGame.png";
import slideImg3 from "./BlogInf.png";
const AutoplaySlider = withAutoplay(AwesomeSlider);
const Imgs = [slideImg1, slideImg2, slideImg3];
const slider = () => (
  <div className="flex justify-center">
    <AutoplaySlider
      play={true}
      cancelOnInteraction={false} // should stop playing on user interaction
      interval={7000}
    >
      {Imgs.map((Img) => (
        <div>
          <img src={Img} className="object-cover"/>
        </div>
      ))}
    </AutoplaySlider>
  </div>
);
export default slider;
