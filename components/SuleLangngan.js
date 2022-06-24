import React, { useState, useEffect } from "react";

const SuleLangngan = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={
        isVisible
          ? " p-3 text-white font-medium text-xs leading-tight uppercase  transition duration-150 ease-in-out  bottom-2 right-2 fixed flex flex-col items-center hover:animate-bounce"
          : "hidden"
      }
    >
      <div class="w-16 overflow-hidden inline-block">
        <div class=" h-11 w-11 bg-red-600 rotate-45 transform origin-bottom-left"></div>
      </div>
      <h4 className=" text-black text-sm font-medium">SULE</h4>
      <h4 className=" text-black text-sm font-medium">LANGNGAN</h4>
    </button>
  );
};
export default SuleLangngan;
