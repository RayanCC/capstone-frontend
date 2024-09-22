import React from "react";
import "../BackToTopButton/backToTopButton.scss";

const BackToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button onClick={scrollToTop} className="backtotopbutton">
      Back To Top
    </button>
  );
};

export default BackToTopButton;
