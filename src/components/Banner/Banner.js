import { Link } from "react-router-dom";
import { products } from "../../util/Constant";
import "../Banner/banner.scss";
import useScrolling from "./useScrolling";

const Banner = () => {
  const { scrolling, scrollLeft, scrollRight } = useScrolling();

  return (
    <div className="banner-section">
      <div className="main-banner">
        {products.map(({ src, alt, text, id }) => (
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
          {products.map(({ src, alt }) => (
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
