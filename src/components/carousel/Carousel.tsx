import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Image } from "@chakra-ui/react";
import Styles from './Carousel.module.css';
import cinqueterre from "../../assets/5terre.jpg";
import island from "../../assets/island.jpg";
import london from "../../assets/london.jpg";
import paris from "../../assets/paris.jpg";
import rome from "../../assets/rome.jpg";
import sydney from "../../assets/sydney.jpg";
import venice from "../../assets/venice.jpg";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    ease: 'linear',
    speed: 500,
    transition: 'slide',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
    ],
  };
  return (
    <Slider className={Styles.slider} {...settings}>
      <div className={Styles.imgwrapper}>
        <Image className={Styles.carousel} src={cinqueterre} alt="cinqueterre" />
      </div>
      <div className={Styles.imgwrapper}>
        <Image className={Styles.carousel} src={island} alt="island" />
      </div>
      <div className={Styles.imgwrapper}>
        <Image className={Styles.carousel} src={london} alt="london" />
      </div>
      <div className={Styles.imgwrapper}>
        <Image className={Styles.carousel} src={paris} alt="paris" />
      </div>
      <div className={Styles.imgwrapper}>
        <Image className={Styles.carousel} src={rome} alt="rome" />
      </div>
      <div className={Styles.imgwrapper}>
        <Image className={Styles.carousel} src={sydney} alt="sydney" />
      </div>
      <div className={Styles.imgwrapper}>
        <Image className={Styles.carousel} src={venice} alt="venice" />
      </div>
    </Slider>
  );
};

export default Carousel;
