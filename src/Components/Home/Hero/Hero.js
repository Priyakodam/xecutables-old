import React, { useState, useRef } from 'react';
import video from "../Images/video.mp4";
// import { Fade } from 'react-reveal';
import { Carousel } from 'react-bootstrap';
import image1 from '../../About/Images/aboutus-4.jpg';
import cc5 from '../../About/Images/aboutus-1.jpg';
import part1 from '../../About/Images/aboutus-2.jpg';
import computer123 from '../../About/Images/aboutus-3.jpg';
import computer1 from '../../About/Images/aboutus-13.webp';
import applelaptop from '../../About/Images/aboutus-8.jpg'
import "./Hero.css"

const Hero = () => {

  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };
  return (
    <div className="video-background-container">
    {/* <div className="video-overlay"></div> */}
    {/* <video
      ref={videoRef}
      autoPlay
      loop
      muted
      playsInline
      src={video}
      className="video-background"
    >
      Your browser does not support the video tag.
    </video> */}
    <img className="video-background" src='https://s3.wns.com/S3_5/Images/GenericHeaderBanner/DesktopImg/19227/3120/Shared-Services_HD-1980x1080px.jpg'/>
    <div className='textcontainer' >
      {/* <div className="videored-dash" ></div> */}
      <div className="main-text">
        <span className="line1">Delivering and integrating solutions that are futuristic,</span>
        <span className="line2">  practical &amp; comprehensive</span>
      </div>
      <div className="sub-text">
        <span className="subline1">We provide always our best services to our clients and always try to</span>
        <span className="subline2">achieve our client's trust and satisfaction</span>
      </div>
    </div>
    {/* <button className="toggle-button" onClick={togglePlay}>
      {isPlaying ? '❚❚' : '▶'}
    </button> */}
  </div>
  )
}

export default Hero