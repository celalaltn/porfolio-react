import React, { useState, useEffect } from "react";
import NavigationOutlinedIcon from "@mui/icons-material/NavigationOutlined";
import "./style.css";

const ScrollToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="top-to-btm">
      {showTopBtn && (
        <button className="icon-position icon-style" onClick={goToTop}>
          <NavigationOutlinedIcon />
        </button>
      )}
    </div>
  );
};
export default ScrollToTop;
