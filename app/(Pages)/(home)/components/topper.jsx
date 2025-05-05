"use client";
import Tilt from "react-parallax-tilt";

const Topper = () => {
  return (
    <div className="home-topper">
      <Tilt className="box-1" glareEnable={true} glareMaxOpacity={0.1} gyroscope={true} transitionSpeed={300} tiltMaxAngleX={2} tiltMaxAngleY={2}></Tilt>
      <Tilt className="box-2" glareEnable={true} glareMaxOpacity={0.1} gyroscope={true} transitionSpeed={300} tiltMaxAngleX={2} tiltMaxAngleY={2}></Tilt>

      {/*<h1 className={`topper-text ${roboto.className}`}>Efficiency From</h1>*/}
      {/*<h1 className={`topper-text-2 ${roboto.className}`}>the Inside Out</h1>*/}

      <h1 className="topper-text">Efficiency From</h1>
      <h2 className="topper-text-2">the Inside Out</h2>
    </div>
  );
};

export default Topper;
