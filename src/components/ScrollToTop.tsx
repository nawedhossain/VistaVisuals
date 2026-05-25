import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
       // Smooth scroll to top
      behavior: "instant",
    });
  }, [pathname]);

  return null;
}
