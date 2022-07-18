import React from "react";
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

// const slideImages = ["images/c1.jpeg", "images/c2.jpeg", "images/c3.jpeg"];

const Slideshow = () => {
  const images = ["images/c1.jpeg", "images/c2.jpeg", "images/c3.jpeg"];

  const zoomInProperties = {
    indicators: true,
    // scale: 1.1,
  };
  return (
    <div className='p-10 w-full bg-gradient-to-r from-cyan-100 to-indigo-100'>
      <div className='mx-auto container w-10/12'>
        <Zoom {...zoomInProperties} className='rounded-3xl border bg-white p-5'>
          {images.map((each, index) => (
            <div key={index} className='object-fill'>
              <img
                className=' w-full h-52 md:h-72 lg:h-96'
                src={each}
                height='500px'
              />
            </div>
          ))}
        </Zoom>
      </div>
    </div>
  );
};

export default Slideshow;
