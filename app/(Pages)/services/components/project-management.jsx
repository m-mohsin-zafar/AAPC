"use client";
import { useEffect } from "react";
import $ from "jquery";
import Tilt from "react-parallax-tilt";
import Image from "next/image";

const ProjectManagement = () => {
  useEffect(() => {
    const handleScroll = () => {
      var wrapper = $("#service-text-section");
      var box = $("#project-management-title");

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
    <div className="flex-item-right" id="project-management" style={{ position: "relative" }}>
      <div
        className="flex-container service-section"
        style={{
          borderTop: "none",
          marginBottom: "0",
          paddingBottom: "0",
          width: "100%",
        }}
      >
        <div className="section-left-projects">
          <Tilt className="vendor-box left-service" glareEnable={true} glareMaxOpacity={0.1} gyroscope={true} transitionSpeed={300} tiltMaxAngleX={2} tiltMaxAngleY={2}>
            <div className="gold-bg"></div>
            <Image width={0} height={0} sizes="100vw" loading="lazy" alt="service-bg-img" src="/img/project-man-pic.png" />
            {/* <img
                loading="lazy"
                alt="service-bg-img"
                src="/img/project-man-pic.png"
              /> */}
            <h2
              style={{
                padding: "2vmax 2vmax 1vmax",
                position: "relative",
                zIndex: 2,
                fontSize: "2.5rem",
              }}
            >
              Architect of Record Filing <span className="parentheses">(AOR)</span>
            </h2>
            <h3
              style={{
                margin: "auto 2vmax",
                lineHeight: 2,
                position: "relative",
                paddingBottom: "2vmax",
                zIndex: 2,
              }}
            >
              Submission of official documents by the designated Architect of Record to regulatory authorities, ensuring compliance with building regulations.
            </h3>
          </Tilt>
          <Tilt className="vendor-box left-service" glareEnable={true} glareMaxOpacity={0.1} gyroscope={true} transitionSpeed={300} tiltMaxAngleX={2} tiltMaxAngleY={2}>
            <div className="gold-bg"></div>
            <Image width={0} height={0} sizes="100vw" loading="lazy" alt="service-bg-img" src="/img/project-man-pic.png" />
            {/* <img
                loading="lazy"
                alt="service-bg-img"
                src="/img/project-man-pic.png"
              /> */}
            <h2
              style={{
                padding: "2vmax 2vmax 1vmax",
                position: "relative",
                zIndex: 2,
                fontSize: "2.5rem",
              }}
            >
              Landmark Filing Sets <span className="parentheses">(Interior/Exterior Renovation)</span>
            </h2>
            <h3
              style={{
                margin: "auto 2vmax",
                lineHeight: 2,
                position: "relative",
                paddingBottom: "2vmax",
                zIndex: 2,
              }}
            >
              Creation and submission of documentation for obtaining approval from authorities for renovations in designated landmarked structures.
            </h3>
          </Tilt>
          <Tilt className="vendor-box left-service" glareEnable={true} glareMaxOpacity={0.1} gyroscope={true} transitionSpeed={300} tiltMaxAngleX={2} tiltMaxAngleY={2}>
            <div className="gold-bg"></div>
            <Image width={0} height={0} sizes="100vw" loading="lazy" alt="service-bg-img" src="/img/project-man-pic.png" />
            {/* <img
                loading="lazy"
                alt="service-bg-img"
                src="/img/project-man-pic.png"
              /> */}
            <h2
              style={{
                padding: "2vmax 2vmax 1vmax",
                position: "relative",
                zIndex: 2,
                fontSize: "2.5rem",
              }}
            >
              Construction Administration
            </h2>
            <h3
              style={{
                margin: "auto 2vmax",
                lineHeight: 2,
                position: "relative",
                paddingBottom: "2vmax",
                zIndex: 2,
              }}
            >
              Oversight and management of the construction phase to ensure adherence to design specifications.
            </h3>
          </Tilt>
        </div>

        <div className="section-right-projects">
          <Tilt className="vendor-box right-service" glareEnable={true} glareMaxOpacity={0.1} gyroscope={true} transitionSpeed={300} tiltMaxAngleX={2} tiltMaxAngleY={2}>
            <div className="gold-bg"></div>
            <Image width={0} height={0} sizes="100vw" loading="lazy" alt="service-bg-img" src="/img/project-man-pic.png" />
            {/* <img
                loading="lazy"
                alt="service-bg-img"
                src="/img/project-man-pic.png"
              /> */}
            <h2
              style={{
                padding: "2vmax 2vmax 1vmax",
                position: "relative",
                zIndex: 2,
                fontSize: "2.5rem",
              }}
            >
              Restorations and Fill Outs
            </h2>
            <h3
              style={{
                margin: "auto 2vmax",
                lineHeight: 2,
                position: "relative",
                paddingBottom: "2vmax",
                zIndex: 2,
              }}
            >
              Services involving the restoration of existing structures and completion of vacant spaces within a building.
            </h3>
          </Tilt>
          <Tilt className="vendor-box right-service" glareEnable={true} glareMaxOpacity={0.1} gyroscope={true} transitionSpeed={300} tiltMaxAngleX={2} tiltMaxAngleY={2}>
            <div className="gold-bg"></div>
            <Image width={0} height={0} sizes="100vw" loading="lazy" alt="service-bg-img" src="/img/project-man-pic.png" />
            {/* <img
                loading="lazy"
                alt="service-bg-img"
                src="/img/project-man-pic.png"
              /> */}
            <h1
              style={{
                padding: "2vmax 2vmax 1vmax",
                position: "relative",
                zIndex: 2,
              }}
            >
              Bidding
            </h1>
            <h3
              style={{
                margin: "auto 2vmax",
                lineHeight: 2,
                position: "relative",
                paddingBottom: "2vmax",
                zIndex: 2,
              }}
            >
              Facilitation of the contractor proposal submission process for construction or renovation projects.
            </h3>
          </Tilt>
        </div>
      </div>
    </div>
  );
};

export default ProjectManagement;
