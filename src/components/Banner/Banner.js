// import { useRef } from "react";
import ThumbGreen from "../../assets/img/ThumbGreen.jpg";
import ThumbBlue from "../../assets/img/ThumbBlue.jpg";
import ThumbPink from "../../assets/img/ThumbPink.jpg";
import About from "../../assets/img/about.jpg";
import Coop from "../../assets/img/co-op.jpg";
import Contact from "../../assets/img/contact.jpg";
import Home from "../../assets/img/home.jpg";
import Shop from "../../assets/img/shop.jpg";
import "../Banner/banner.scss";
import Bannerscrolling from "./Bannerscrolling";

const Banner = () => {
  const images = [
    { src: ThumbGreen, alt: "banner1", text: "Welcome to Green" },
    { src: ThumbBlue, alt: "banner2", text: "Explore the Blue" },
    { src: ThumbPink, alt: "banner3", text: "Feel the Pink" },
    { src: About, alt: "banner4", text: "Classic" },
    { src: Coop, alt: "banner5", text: "Double the Color" },
    { src: Contact, alt: "banner6", text: "Play More" },
    { src: Home, alt: "banner7", text: "Home Sweet Home" },
    { src: Shop, alt: "banner8", text: "Shopping Pink" },
  ];
  const { scrolling, scrollLeft, scrollRight } = Bannerscrolling();

  return (
    <div className="banner-section">
      <div className="main-banner">
        {images.map(({ src, alt, text }) => (
          <div className="banner-item" key={alt}>
            <img src={src} alt={alt} className="banner-img" />
            <div className="banner-text">{text}</div>
          </div>
        ))}
      </div>

      <div className="scrolling-banner">
        <button className="scroll-button left" onClick={scrollLeft}>
          ←
        </button>
        <div className="scrolling-section" ref={scrolling}>
          {images.map(({ src, alt }) => (
            <div className="scrolling-item" key={alt}>
              <img src={src} alt={alt} className="scrolling-img" />
            </div>
          ))}
        </div>
        <button className="scroll-button right" onClick={scrollRight}>
          →
        </button>
      </div>
    </div>
  );
};

export default Banner;
