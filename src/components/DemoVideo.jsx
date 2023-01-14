import React, { useState, useRef } from "react";

import { BsPlayFill } from "react-icons/bs";
import { FaPause } from "react-icons/fa";

import demo_video from "../assets/videos/demo_video.mp4";
import demo_img from "../assets/image/demo-photo1.jpg";

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
    <section className="my-26">
      <div className="flex 2xl:h-[550px] h-[440px] gap-2">
        <div className="flex-1 rounded-xl overflow-hidden relative">
          <video loop autoPlay muted className="object-cover" ref={videoRef}>
            <source src={demo_video} type="video/mp4"></source>
          </video>
          <div
            className={`flex items-center justify-center absolute w-20 h-20 rounded-full z-10 left-[30px] top-[30px] opacity-60 ${
              videoPlay
                ? "bg-light text-3xl text-black"
                : "bg-dark text-xl text-light"
            } hover:scale-110 hover:opacity-100 cursor-pointer transition`}
            onClick={handlePlayPause}
          >
            {videoPlay ? <BsPlayFill /> : <FaPause />}
          </div>
        </div>
        <div className="ml-2 w-[400px] 2xl:h-[550px] xl:h-[440] rounded-xl overflow-hidden">
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
