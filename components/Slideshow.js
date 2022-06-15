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
    <div className="pb-10 pt-5 bg-hero">
      <div className="container mx-auto ">
        <Zoom {...zoomInProperties}>
          {images.map((each, index) => (
            <div key={index} className="">
              <img
                className="mx-auto object-cover w-full rounded-2xl"
                style={{
                  height: "530px",
                }}
                src={each}
              />
            </div>
          ))}
        </Zoom>
      </div>
    </div>
  );
};

export default Slideshow;
