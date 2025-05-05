"use client";
import Tilt from "react-parallax-tilt";

const Topper = () => {
  return (
    <div style={{ position: "relative", height: "90vh" }}>
      <Tilt
        glareEnable={true}
        glareMaxOpacity={0.1}
        gyroscope={true}
        transitionSpeed={300}
        tiltMaxAngleX={2}
        tiltMaxAngleY={2}
        style={{
          position: "absolute",
          width: "45%",
          height: "60vh",
          background: "linear-gradient(127deg, rgba(176, 156, 59, .49) 0%, rgba(125, 105, 3, 0.28) 100%)",
          boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
          backdropFilter: "blur(12px)",
          marginLeft: "10%",
        }}
      ></Tilt>

      {/*<div*/}
      {/*  style={{*/}
      {/*    position: "absolute",*/}
      {/*    width: "45%",*/}
      {/*    height: "60vh",*/}
      {/*    background: "url('/img/pierre-w-clients.jpg')",*/}
      {/*    left: "15%",*/}
      {/*    top: "15vh",*/}
      {/*    boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",*/}
      {/*    backgroundSize: "cover",*/}
      {/*  }}*/}
      {/*></div>*/}
      <img src="/img/pierre-yuree.jpg" id="topper-pic" alt="topper" />

      <div className="top-wrapper">
        {/*<Tilt*/}
        {/*  glareEnable={true}*/}
        {/*  glareMaxOpacity={0.1}*/}
        {/*  gyroscope={true}*/}
        {/*  transitionSpeed={300}*/}
        {/*  tiltMaxAngleX={2}*/}
        {/*  tiltMaxAngleY={2}*/}
        {/*  className="topper-title"*/}
        {/*>*/}
        {/*  Projects*/}
        {/*</Tilt>*/}
        <div className="title-wrapper">
          <h3 className="topper-subtitle">What We Do</h3>
        </div>

        <h3 id="planning-top" className="topper-blurb">
          AAPC, which stands for Azarkian Architecture P.C., is a dedicated and team With a comprehensive approach, they take pride in their work, not only focusing on the physical structures but also investing in the long-term success of their clients. Their ethos revolves around a holistic
          understanding of the built environment, ensuring that their expertise contributes to sustainable and forward-thinking solutions.{" "}
        </h3>
      </div>
    </div>
  );
};

export default Topper;
