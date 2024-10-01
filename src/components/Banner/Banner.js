// import { useRef } from "react";
import { Link } from "react-router-dom";
import ThumbGreen from "../../assets/img/ThumbGreen.jpg";
import ThumbBlue from "../../assets/img/ThumbBlue.jpg";
import ThumbPink from "../../assets/img/ThumbPink.jpg";
import About from "../../assets/img/about.jpg";
import Coop from "../../assets/img/co-op.jpg";
import Contact from "../../assets/img/contact.jpg";
import Home from "../../assets/img/home.jpg";
import Shop from "../../assets/img/shop.jpg";
import "../Banner/banner.scss";
import useScrolling from "./useScrolling";

export const images = [
  {
    id: "1",
    src: ThumbGreen,
    alt: "banner1",
    text: "Welcome to Green",
    price: "10",
    description: "This is Green Plush",
    Brand: "Blue-Family",
    Colour: "Green",
    Dimensions: "5D x 5W x 5H",
    Filledwith: "Pure Cotton",
  },
  {
    id: "2",
    src: ThumbBlue,
    alt: "banner2",
    text: "Explore the Blue",
    price: "11",
    description: "This is Blue Plush",
    Brand: "Blue-Family",
    Colour: "Blue",
    Dimensions: "5D x 5W x 5H",
    Filledwith: "Pure Cotton",
  },
  {
    id: "3",
    src: ThumbPink,
    alt: "banner3",
    text: "Feel the Pink",
    price: "12",
    description: "This is Pink Plush",
    Brand: "Blue-Family",
    Colour: "Pink",
    Dimensions: "5D x 5W x 5H",
    Filledwith: "Pure Cotton",
  },
  {
    id: "4",
    src: About,
    alt: "banner4",
    text: "Classic",
    price: "13",
    description: "This is About Plush",
    Brand: "Blue-Family",
    Colour: "Red",
    Dimensions: "5D x 5W x 5H",
    Filledwith: "Pure Cotton",
  },
  {
    id: "5",
    src: Coop,
    alt: "banner5",
    text: "Double the Color",
    price: "14",
    description: "This is Coop Plush",
    Brand: "Blue-Family",
    Colour: "Blue And Green",
    Dimensions: "5D x 5W x 5H",
    Filledwith: "Pure Cotton",
  },
  {
    id: "6",
    src: Contact,
    alt: "banner6",
    text: "Play More",
    price: "15",
    description: "This is DoubleColor Plush",
    Brand: "Blue-Family",
    Colour: "Mint",
    Dimensions: "5D x 5W x 5H",
    Filledwith: "Pure Cotton",
  },
  {
    id: "7",
    src: Home,
    alt: "banner7",
    text: "Home Sweet Home",
    price: "16",
    description: "This is SweetHome Plush",
    Brand: "Blue-Family",
    Colour: "BrownBlue",
    Dimensions: "5D x 5W x 5H",
    Filledwith: "Pure Cotton",
  },
  {
    id: "8",
    src: Shop,
    alt: "banner8",
    text: "Shopping Pink",
    price: "17",
    description: "This is Shop Plush",
    Brand: "Blue-Family",
    Colour: "DarkPink",
    Dimensions: "5D x 5W x 5H",
    Filledwith: "Pure Cotton",
  },
];
const Banner = () => {
  const { scrolling, scrollLeft, scrollRight } = useScrolling();

  return (
    <div className="banner-section">
      <div className="main-banner">
        {images.map(({ src, alt, text, id }) => (
          <div className="banner-item" key={alt}>
            <Link to={`/item/${id}`}>
              <img src={src} alt={alt} className="banner-img" />
              <div className="banner-text">{text}</div>
            </Link>
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
