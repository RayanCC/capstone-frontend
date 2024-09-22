import { useRef } from "react";

const useScrolling = (images) => {
  const scrolling = useRef(null);

  const scrollLeft = () => {
    if (scrolling.current) {
      const scrollPosition = scrolling.current.scrollLeft; //current horizontal scroll position
      const scrollWidth = scrolling.current.scrollWidth; //total width of the scrollable content
      const clientWidth = scrolling.current.clientWidth; // width of the visible part of the scrolling area

      // Check if at the start
      if (scrollPosition <= 0) {
        scrolling.current.scrollLeft = scrollWidth - clientWidth;
        // Loop to the end
      } else {
        scrolling.current.scrollBy({ left: -200, behavior: "smooth" });
      }
    }
  };

  const scrollRight = () => {
    if (scrolling.current) {
      const scrollPosition = scrolling.current.scrollLeft;
      const scrollWidth = scrolling.current.scrollWidth;
      const clientWidth = scrolling.current.clientWidth;

      // Check if at the end
      if (scrollPosition + clientWidth >= scrollWidth) {
        scrolling.current.scrollLeft = 0;
        // Loop to the start
      } else {
        scrolling.current.scrollBy({ left: 200, behavior: "smooth" });
      }
    }
  };

  return { scrolling, scrollLeft, scrollRight };
};

export default useScrolling;
