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
          background:
            "linear-gradient(127deg, rgba(176, 156, 59, .49) 0%, rgba(125, 105, 3, 0.28) 100%)",
          boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
          backdropFilter: "blur(12px)",
          marginLeft: "10%",
        }}
      ></Tilt>

      <div
        style={{
          position: "absolute",
          width: "45%",
          height: "60vh",
          background: "url('/img/service-top.jpg')",
          left: "15%",
          top: "15vh",
          boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
          backgroundSize: "cover",
        }}
      ></div>

      <div
        style={{
          position: "absolute",
          width: "45%",
          height: "60vh",
          background:
            "url('https://images.unsplash.com/photo-1604933762023-7213af7ff7a7?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          left: "15%",
          top: "15vh",
          boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
          backgroundSize: "cover",
        }}
      ></div>

      <div className="top-wrapper">
        <Tilt
          glareEnable={true}
          glareMaxOpacity={0.1}
          gyroscope={true}
          transitionSpeed={300}
          tiltMaxAngleX={2}
          tiltMaxAngleY={2}
          className="topper-title"
        >
          Blog Posts
        </Tilt>
        <div className="title-wrapper">
          <h3 className="topper-subtitle">What We Do</h3>
        </div>

        <h3 id="planning-top" className="topper-blurb">
          Explore our blog for the latest news and tips on everything
          architecture related.
        </h3>
      </div>
    </div>
  );
};

export default Topper;
