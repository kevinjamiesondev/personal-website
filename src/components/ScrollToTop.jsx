import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Temporarily disable smooth scrolling
    const html = document.documentElement;
    const prevScrollBehavior = html.style.scrollBehavior;
    html.style.scrollBehavior = "auto"; // instantly jump

    window.scrollTo(0, 0); // jump to top

    // Restore previous scroll behavior
    html.style.scrollBehavior = prevScrollBehavior;
  }, [pathname]);

  return null;
}
