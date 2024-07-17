import { useEffect } from "react";

export function useNavigationScroll() {
  useEffect(() => {
    let nav = document.querySelector(".navbar");

    window.onscroll = () => {
      if (window.scrollY > 60) {
        nav.classList.add("navbar-scrolled");
      } else {
        nav.classList.remove("navbar-scrolled");
      }
    };

    // const handleScroll = event =>
    // {
    //     if(window.scrollY > 60) { nav.classList.add("navbar-scrolled"); }
    //     else { nav.classList.remove("navbar-scrolled"); }
    // }

    // window.addEventListener('scroll', handleScroll);
  });
}
