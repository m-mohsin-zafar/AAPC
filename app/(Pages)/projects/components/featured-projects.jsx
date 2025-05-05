"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import $ from "jquery";
import Tilt from "react-parallax-tilt";

const FeaturedProjects = () => {
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      var wrapper = $("#side");
      var box = $("#hotels-title");

      var offsetTop = -wrapper.offset().top + $(window).scrollTop() + 90;
      var offsetBottom = wrapper.offset().top - $(window).scrollTop() + wrapper.outerHeight() - box.outerHeight() - 90;

      if (offsetBottom > 0 && offsetTop < 0) {
        box.css({
          top: 0,
        });
      } else if (offsetBottom > 0 && offsetTop > 0) {
        box.css({
          top: offsetTop + "px",
        });
      } else {
        box.offset({
          top: $(window).scrollTop() + offsetBottom,
        });
      }
    };

    $(window).on("scroll", handleScroll);

    handleScroll();

    return () => {
      $(window).off("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex-container" style={{ position: "relative" }}>
      <div id="side" className="flex-item-left">
        <h1 className="left-text" id="hotels-title">
          Featured Projects
        </h1>
      </div>
      <div className="flex-item-right" style={{ position: "relative" }}>
        <div id="hotels">
          <div className="flex-container width-full flex-column flex-lg-row" style={{ display: "none", border: "none" }}>
            <div className="project-left">
              <Tilt className="project-left-pic" glareEnable={true} glareMaxOpacity={0.1} gyroscope={true} transitionSpeed={300} tiltMaxAngleX={2} tiltMaxAngleY={2}></Tilt>
            </div>
            <div className="project-right">
              <div className="project-right-content">
                <Tilt glareEnable={true} glareMaxOpacity={0} gyroscope={true} transitionSpeed={300} tiltMaxAngleX={2} tiltMaxAngleY={2}>
                  <h2>1412 Offices Floors</h2>
                </Tilt>
                <h5>Luxury Showrooms</h5>
                <h4>AAPC was entrusted with the responsibility of creating an office space that goes beyond mere elegance, excelling in both aesthetic appeal and functionality...</h4>
              </div>
            </div>
          </div>

          {/* GOTHAM HALL*/}
          <div
            className="flex-container width-full reverse"
            onClick={() => {
              typeof window !== "undefined" ? (window.location.href = "/projects/Gotham_Hall") : "";
            }}
            style={{ marginTop: "5%", border: "none" }}
          >
            <div className="project-left">
              <div className="project-left-content">
                <Tilt glareEnable={true} glareMaxOpacity={0} gyroscope={true} transitionSpeed={300} tiltMaxAngleX={2} tiltMaxAngleY={2}>
                  <h2>Gotham Hall</h2>
                </Tilt>
                <h5>Hospitality</h5>
                <h4>1356 Broadway stands as a building unlike any other, steeped in multiple layers of history. As a protected landmark, AAPC embraced the responsibility of restoring its interior, meticulously ensuring alignment with the building&apos;s rich history...</h4>
              </div>
            </div>
            <div className="project-right">
              <Tilt
                className="project-right-pic"
                style={{
                  background: "url('/project/content/gotham/1.JPEG')",
                  backgroundSize: "cover",
                }}
                glareEnable={true}
                glareMaxOpacity={0.1}
                gyroscope={true}
                transitionSpeed={300}
                tiltMaxAngleX={2}
                tiltMaxAngleY={2}
              ></Tilt>
            </div>
          </div>

          {/* H MART*/}
          <div
            className="flex-container width-full flex-column flex-lg-row"
            onClick={() => {
              typeof window !== "undefined" ? (window.location.href = "/projects/4428_55th_Ave") : "";
            }}
            style={{ border: "none" }}
          >
            <div className="project-left">
              <Tilt
                className="project-left-pic"
                style={{
                  background: "url('/project/content/44-28 55th ave/Render Edited.jpg')",
                  backgroundSize: "cover",
                }}
                glareEnable={true}
                glareMaxOpacity={0.1}
                gyroscope={true}
                transitionSpeed={300}
                tiltMaxAngleX={2}
                tiltMaxAngleY={2}
              ></Tilt>
            </div>
            <div className="project-right">
              <div className="project-right-content">
                <Tilt glareEnable={true} glareMaxOpacity={0} gyroscope={true} transitionSpeed={300} tiltMaxAngleX={2} tiltMaxAngleY={2}>
                  <h2>44-28 55th Ave</h2>
                </Tilt>
                <h5>Industrial</h5>
                <h4>Our team successfully lead the extension of a manufacturing facility situated at 44-28 55th Ave, Maspeth, Queens. The project posed unique challenges, not only due to the rigorous regulations...</h4>
              </div>
            </div>
          </div>

          {/* 480 7th Ave*/}
          <div
            className="flex-container width-full reverse"
            onClick={() => {
              typeof window !== "undefined" ? (window.location.href = "/projects/480_7th_Ave") : "";
            }}
            style={{ border: "none" }}
          >
            <div className="project-left">
              <div className="project-left-content">
                <Tilt glareEnable={true} glareMaxOpacity={0} gyroscope={true} transitionSpeed={300} tiltMaxAngleX={2} tiltMaxAngleY={2}>
                  <h2>480 7th Ave</h2>
                </Tilt>
                <h5>Retail</h5>
                <h4>The NYC retail experience is diverse and multifaceted, and for the AAPC team, the challenge at 480 7th Ave was one we enthusiastically embraced. Combining multiple programs within this project, which included two retail floors...</h4>
              </div>
            </div>
            <div className="project-right">
              <Tilt
                className="project-right-pic"
                style={{
                  background: "url('/project/content/480 7th ave/2.jpg')",
                  backgroundSize: "cover",
                }}
                glareEnable={true}
                glareMaxOpacity={0.1}
                gyroscope={true}
                transitionSpeed={300}
                tiltMaxAngleX={2}
                tiltMaxAngleY={2}
              ></Tilt>
            </div>
          </div>

          {/* 525 7th Ave*/}
          <div
            className="flex-container width-full flex-column flex-lg-row"
            onClick={() => {
              typeof window !== "undefined" ? (window.location.href = "/projects/525_7th_Ave") : "";
            }}
            style={{ border: "none" }}
          >
            <div className="project-left">
              <Tilt
                className="project-left-pic"
                style={{
                  background: "url('/project/content/525 7th ave/2.jpg')",
                  backgroundSize: "cover",
                }}
                glareEnable={true}
                glareMaxOpacity={0.1}
                gyroscope={true}
                transitionSpeed={300}
                tiltMaxAngleX={2}
                tiltMaxAngleY={2}
              ></Tilt>
            </div>
            <div className="project-right">
              <div className="project-right-content">
                <Tilt glareEnable={true} glareMaxOpacity={0} gyroscope={true} transitionSpeed={300} tiltMaxAngleX={2} tiltMaxAngleY={2}>
                  <h2>525 7th Ave</h2>
                </Tilt>
                <h5>Offices</h5>
                <h4>Elegance and high quality were the dual focal points guiding the development of the executive offices situated at 525 7th Ave. For the AAPC team, it was imperative to not only infuse a sense of sophistication...</h4>
              </div>
            </div>
          </div>

          {/*712 W 12th */}
          <div
            className="flex-container width-full reverse"
            onClick={() => {
              typeof window !== "undefined" ? (window.location.href = "/projects/712_W_125th") : "";
            }}
            style={{ display: "none" }}
          >
            <div className="project-left">
              <div className="project-left-content">
                <Tilt glareEnable={true} glareMaxOpacity={0} gyroscope={true} transitionSpeed={300} tiltMaxAngleX={2} tiltMaxAngleY={2}>
                  <h2>712 w 125th</h2>
                </Tilt>
                <h5>Restaurant</h5>
                <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut porta metus. Quisque justo ipsum, auctor id lorem ut, hendrerit eleifend enim. Cras eleifend lorem sit amet odio consectetur tempus.</h4>
              </div>
            </div>
            <div className="project-right">
              <Tilt
                className="project-right-pic"
                style={{
                  background: "url('/project/content/712w125/4.JPG')",
                  backgroundSize: "cover",
                }}
                glareEnable={true}
                glareMaxOpacity={0.1}
                gyroscope={true}
                transitionSpeed={300}
                tiltMaxAngleX={2}
                tiltMaxAngleY={2}
              ></Tilt>
            </div>
          </div>
          <div
            className="flex-container width-full reverse"
            onClick={() => {
              typeof window !== "undefined" ? (window.location.href = "/projects/113_Franklin") : "";
            }}
            style={{ marginBottom: "0", border: "none" }}
          >
            <div className="project-left">
              <div className="project-left-content">
                <Tilt glareEnable={true} glareMaxOpacity={0} gyroscope={true} transitionSpeed={300} tiltMaxAngleX={2} tiltMaxAngleY={2}>
                  <h2>113 Franklin</h2>
                </Tilt>
                <h5>Restaurant</h5>
                <h4>The 113 Franklin project involves extensive interior renovations and the meticulous process of legalizing the changes through detailed sets and close collaboration with the interior design team. The focus is not only on transforming the physical space...</h4>
              </div>
            </div>
            <div className="project-right">
              <Tilt
                className="project-right-pic"
                style={{
                  background: "url('/project/content/113 Franklin/IMG_6182.jpeg')",
                  backgroundSize: "cover",
                }}
                glareEnable={true}
                glareMaxOpacity={0.1}
                gyroscope={true}
                transitionSpeed={300}
                tiltMaxAngleX={2}
                tiltMaxAngleY={2}
              ></Tilt>
            </div>
          </div>

          {/*Cad & the Dandy*/}
          <div
            className="flex-container width-full flex-column flex-lg-row"
            onClick={() => {
              typeof window !== "undefined" ? (window.location.href = "/projects/130_W_57th_St") : "";
            }}
            style={{ border: "none" }}
          >
            <div className="project-left">
              <Tilt
                className="project-left-pic"
                style={{
                  background: "url('/project/content/130 W 57th Cad Dandy/Cad3.jpg')",
                  backgroundSize: "cover",
                }}
                glareEnable={true}
                glareMaxOpacity={0.1}
                gyroscope={true}
                transitionSpeed={300}
                tiltMaxAngleX={2}
                tiltMaxAngleY={2}
              ></Tilt>
            </div>
            <div className="project-right">
              <div className="project-right-content">
                <Tilt glareEnable={true} glareMaxOpacity={0} gyroscope={true} transitionSpeed={300} tiltMaxAngleX={2} tiltMaxAngleY={2}>
                  <h2>130 W 57th St</h2>
                </Tilt>
                <h5>Retail</h5>
                <h4>Azark Inc. completed the renovation of a luxury retail space for Cad & The Dandy, a custom suit retailer, located in an ionic landmark which used to be the home of great artists like Woody Allen and others...</h4>
              </div>
            </div>
          </div>

          {/* Happy Tails */}
          <div
            className="flex-container width-full reverse"
            onClick={() => {
              typeof window !== "undefined" ? (window.location.href = "/projects/120_Duane_St") : "";
            }}
            style={{ marginTop: "5%", border: "none" }}
          >
            <div className="project-left">
              <div className="project-left-content">
                <Tilt glareEnable={true} glareMaxOpacity={0} gyroscope={true} transitionSpeed={300} tiltMaxAngleX={2} tiltMaxAngleY={2}>
                  <h2>120 Duane St</h2>
                </Tilt>
                <h5>Retail</h5>
                <h4>A comprehensive set of construction development drawings was produced by AAPC, covering floor plans, elevations, sections, and intricate details for all areas of the facility. The seamless collaboration of our companies allowed Happy Tails officially opened its doors in...</h4>
              </div>
            </div>
            <div className="project-right">
              <Tilt
                className="project-right-pic"
                style={{
                  background: "url('/project/content/120 Duane/Happy1.jpg')",
                  backgroundSize: "cover",
                }}
                glareEnable={true}
                glareMaxOpacity={0.1}
                gyroscope={true}
                transitionSpeed={300}
                tiltMaxAngleX={2}
                tiltMaxAngleY={2}
              ></Tilt>
            </div>
          </div>
          {/* Colbeh */}
          <div
            className="flex-container width-full flex-column flex-lg-row"
            onClick={() => {
              typeof window !== "undefined" ? (window.location.href = "/projects/75_N_Station_Plaza") : "";
            }}
            style={{ border: "none" }}
          >
            <div className="project-left">
              <Tilt
                className="project-left-pic"
                style={{
                  background: "url('/project/content/75 N Station Plaza/Col1.jpg')",
                  backgroundSize: "cover",
                }}
                glareEnable={true}
                glareMaxOpacity={0.1}
                gyroscope={true}
                transitionSpeed={300}
                tiltMaxAngleX={2}
                tiltMaxAngleY={2}
              ></Tilt>
            </div>
            <div className="project-right">
              <div className="project-right-content">
                <Tilt glareEnable={true} glareMaxOpacity={0} gyroscope={true} transitionSpeed={300} tiltMaxAngleX={2} tiltMaxAngleY={2}>
                  <h2>75 N Station Plaza</h2>
                </Tilt>
                <h5>Ballroom</h5>
                <h4>Azarkian Architecture P.C. and ArkCo Corp. provided material upgrades and enhancements for the Ballroom and Bathroom areas with a mirrored ceiling in....</h4>
              </div>
            </div>
          </div>
        </div>
        {/*    keep all project within this ^ div */}
      </div>
    </div>
  );
};

export default FeaturedProjects;
