import React, { useState, useRef } from "react";

import { BsPlayFill } from "react-icons/bs";
import { FaPause } from "react-icons/fa";

import demo_video from "../assets/videos/demo_video.mp4";
import demo_img from "../assets/image/demo_pic.jpg";

const DemoVideo = () => {
  const [videoPlay, setVideoPlay] = useState(true);
  const videoRef = useRef();

  const handlePlayPause = () => {
    if (videoPlay == true) {
      setVideoPlay((prevState) => !prevState);
      videoRef.current.pause();
    } else {
      setVideoPlay((prevState) => !prevState);
      videoRef.current.play();
    }
  };

  return (
    <section className="my-26 overflow-hidden">
      <div className="flex max-md:flex-col max-md:max-h-fit 2xl:h-[550px] xl:h-[440px] gap-2">
        <div
          className="flex-1  rounded-xl overflow-hidden relative max-md:w-screen"
          data-aos="fade-up"
          data-offset="400"
        >
          <video loop autoPlay muted className="object-cover" ref={videoRef}>
            <source src={demo_video} type="video/mp4"></source>
          </video>
          <div
            className={`flex items-center justify-center absolute w-20 h-20 max-md:w-14 max-md:h-14 rounded-full z-10 left-[30px] top-[30px] max-md:left-[10px] max-md:top-[10px] ${
              videoPlay ? "bg-light text-dark" : "bg-dark text-light"
            } hover:opacity-100 cursor-pointer transition-all duration-300 ease-in`}
            onClick={handlePlayPause}
          >
            {videoPlay ? <FaPause size={20} /> : <BsPlayFill size={30} />}
          </div>
        </div>
        <div
          className="ml-2 w-[400px] 2xl:h-[550px] xl:h-[440px] max-md:w-screen max-md:ml-0 rounded-xl overflow-hidden"
          data-aos="fade-up"
          data-aos-duration="1200"
          data-offset="500"
        >
          <img
            src={demo_img}
            alt="demo image"
            className="w-full h-full object-cover "
          />
        </div>
      </div>
    </section>
  );
};

export default DemoVideo;
