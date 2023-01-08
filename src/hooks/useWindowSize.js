import { useState, useEffect } from "react";

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState(3);

  useEffect(() => {
    function handleResize() {
      setWindowSize(window.innerWidth < 540 || window.innerWidth < 768 ? 2 : 3);
    }

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
};

export default useWindowSize;
