import React from "react";
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

// const slideImages = ["images/c1.jpeg", "images/c2.jpeg", "images/c3.jpeg"];

const Slideshow = () => {
  const images = ["images/c1.jpeg", "images/c2.jpeg", "images/c3.jpeg"];

  const zoomInProperties = {
    indicators: true,
    scale: 1.1,
  };
  return (
    <div className="bg-hero h-screen pl-10 pr-10 ">
      <Zoom {...zoomInProperties}>
        {images.map((each, index) => (
          <div key={index} className="mt-32 pb-24 w-full">
            <img
              className="mx-auto rounded-xl shadow-2xl hover:shadow-indigo-500"
              style={{
                objectFit: "cover",
                width: "90%",
                height: "530px",
              }}
              src={each}
            />
          </div>
        ))}
      </Zoom>
    </div>
  );
};

export default Slideshow;
