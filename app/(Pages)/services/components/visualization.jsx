"use client";
import { useEffect } from "react";
import $ from "jquery";
import Tilt from "react-parallax-tilt";
import Image from "next/image";

const Visualization = () => {
  useEffect(() => {
    const handleScroll = () => {
      var wrapper = $("#service-text-section");
      var box = $("#visualization-title");

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
    <div className="flex-item-right" id="visualization" style={{ position: "relative" }}>
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
            <Image width={0} height={0} sizes="100vw" loading="lazy" alt="service-bg-img" src="/img/visualization.png" />
            {/* <img
                loading="lazy"
                alt="service-bg-img"
                src="/img/visualization.png"
              /> */}
            <h2
              style={{
                padding: "2vmax 2vmax 1vmax",
                position: "relative",
                zIndex: 2,
                fontSize: "2.5rem",
              }}
            >
              Existing As-Built Plans
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
              Documentation of the actual construction post-completion for future reference.
            </h3>
          </Tilt>
          <Tilt className="vendor-box left-service" glareEnable={true} glareMaxOpacity={0.1} gyroscope={true} transitionSpeed={300} tiltMaxAngleX={2} tiltMaxAngleY={2}>
            <div className="gold-bg"></div>
            <Image width={0} height={0} sizes="100vw" loading="lazy" alt="service-bg-img" src="/img/visualization.png" />
            {/* <img
                loading="lazy"
                alt="service-bg-img"
                src="/img/visualization.png"
              /> */}
            <h2
              style={{
                padding: "2vmax 2vmax 1vmax",
                position: "relative",
                zIndex: 2,
                fontSize: "2.5rem",
              }}
            >
              Structural Coordination
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
              Integration and coordination of structural elements within the architectural design.
            </h3>
          </Tilt>
          <Tilt className="vendor-box left-service" glareEnable={true} glareMaxOpacity={0.1} gyroscope={true} transitionSpeed={300} tiltMaxAngleX={2} tiltMaxAngleY={2}>
            <div className="gold-bg"></div>
            <Image width={0} height={0} sizes="100vw" loading="lazy" alt="service-bg-img" src="/img/visualization.png" />
            {/* <img
                loading="lazy"
                alt="service-bg-img"
                src="/img/visualization.png"
              /> */}
            <h2
              style={{
                padding: "2vmax 2vmax 1vmax",
                position: "relative",
                zIndex: 2,
                fontSize: "2.5rem",
              }}
            >
              Mechanical System Coordination{" "}
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
              Integration and coordination of mechanical systems (e.g., HVAC) within the overall design.
            </h3>
          </Tilt>
          <Tilt className="vendor-box left-service" glareEnable={true} glareMaxOpacity={0.1} gyroscope={true} transitionSpeed={300} tiltMaxAngleX={2} tiltMaxAngleY={2}>
            <div className="gold-bg"></div>
            <Image width={0} height={0} sizes="100vw" loading="lazy" alt="service-bg-img" src="/img/visualization.png" />
            {/* <img
                loading="lazy"
                alt="service-bg-img"
                src="/img/visualization.png"
              /> */}
            <h2
              style={{
                padding: "2vmax 2vmax 1vmax",
                position: "relative",
                zIndex: 2,
                fontSize: "2.5rem",
              }}
            >
              Construction Fence, Shed, Scaffold
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
              Installation and management of temporary structures during construction.
            </h3>
          </Tilt>
          <Tilt className="vendor-box left-service" glareEnable={true} glareMaxOpacity={0.1} gyroscope={true} transitionSpeed={300} tiltMaxAngleX={2} tiltMaxAngleY={2}>
            <div className="gold-bg"></div>
            <Image width={0} height={0} sizes="100vw" loading="lazy" alt="service-bg-img" src="/img/visualization.png" />
            {/* <img
                loading="lazy"
                alt="service-bg-img"
                src="/img/visualization.png"
              /> */}
            <h2
              style={{
                padding: "2vmax 2vmax 1vmax",
                position: "relative",
                zIndex: 2,
                fontSize: "2.5rem",
              }}
            >
              Construction Documents
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
              Comprehensive set of drawings and specifications guiding construction or renovation.
            </h3>
          </Tilt>
          <Tilt className="vendor-box left-service" glareEnable={true} glareMaxOpacity={0.1} gyroscope={true} transitionSpeed={300} tiltMaxAngleX={2} tiltMaxAngleY={2}>
            <div className="gold-bg"></div>
            <Image width={0} height={0} sizes="100vw" loading="lazy" alt="service-bg-img" src="/img/visualization.png" />
            {/* <img
                loading="lazy"
                alt="service-bg-img"
                src="/img/visualization.png"
              /> */}
            <h2
              style={{
                padding: "2vmax 2vmax 1vmax",
                position: "relative",
                zIndex: 2,
                fontSize: "2.5rem",
              }}
            >
              Sprinkler and Standpipe Coordination
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
              Planning and coordination of sprinkler and standpipe systems for fire protection.
            </h3>
          </Tilt>
          <Tilt className="vendor-box left-service" glareEnable={true} glareMaxOpacity={0.1} gyroscope={true} transitionSpeed={300} tiltMaxAngleX={2} tiltMaxAngleY={2}>
            <div className="gold-bg"></div>
            <Image width={0} height={0} sizes="100vw" loading="lazy" alt="service-bg-img" src="/img/visualization.png" />
            {/* <img
                loading="lazy"
                alt="service-bg-img"
                src="/img/visualization.png"
              /> */}
            <h2
              style={{
                padding: "2vmax 2vmax 1vmax",
                position: "relative",
                zIndex: 2,
                fontSize: "2.5rem",
              }}
            >
              Acoustical Coordination
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
              Planning and coordination of acoustical elements within the building design.
            </h3>
          </Tilt>
          <Tilt className="vendor-box left-service" style={{ marginBottom: "10%" }} glareEnable={true} glareMaxOpacity={0.1} gyroscope={true} transitionSpeed={300} tiltMaxAngleX={2} tiltMaxAngleY={2}>
            <div className="gold-bg"></div>
            <Image width={0} height={0} sizes="100vw" loading="lazy" alt="service-bg-img" src="/img/visualization.png" />
            {/* <img
                loading="lazy"
                alt="service-bg-img"
                src="/img/visualization.png"
              /> */}
            <h2
              style={{
                padding: "2vmax 2vmax 1vmax",
                position: "relative",
                zIndex: 2,
                fontSize: "2.5rem",
              }}
            >
              ADA Compliance
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
              Ensuring design and construction comply with the Americans with Disabilities Act standards.
            </h3>
          </Tilt>
          <Tilt className="vendor-box left-service" style={{ marginBottom: "10%" }} glareEnable={true} glareMaxOpacity={0.1} gyroscope={true} transitionSpeed={300} tiltMaxAngleX={2} tiltMaxAngleY={2}>
            <div className="gold-bg"></div>
            <Image width={0} height={0} sizes="100vw" loading="lazy" alt="service-bg-img" src="/img/visualization.png" />
            {/* <img
                loading="lazy"
                alt="service-bg-img"
                src="/img/visualization.png"
              /> */}
            <h2
              style={{
                padding: "2vmax 2vmax 1vmax",
                position: "relative",
                zIndex: 2,
                fontSize: "2.5rem",
              }}
            >
              Vertical Transportation
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
              Planning and coordination of vertical transportation systems within the building.
            </h3>
          </Tilt>
        </div>
        <div className="section-right-projects">
          <Tilt className="vendor-box right-service" glareEnable={true} glareMaxOpacity={0.1} gyroscope={true} transitionSpeed={300} tiltMaxAngleX={2} tiltMaxAngleY={2}>
            <div className="gold-bg"></div>
            <Image width={0} height={0} sizes="100vw" loading="lazy" alt="service-bg-img" src="/img/visualization.png" />
            {/* <img
                loading="lazy"
                alt="service-bg-img"
                src="/img/visualization.png"
              /> */}
            <h2
              style={{
                padding: "2vmax 2vmax 1vmax",
                position: "relative",
                zIndex: 2,
                fontSize: "2.5rem",
              }}
            >
              Bidding Documents
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
              Comprehensive set of documents provided to potential bidders containing project specifications.
            </h3>
          </Tilt>
          <Tilt className="vendor-box right-service" glareEnable={true} glareMaxOpacity={0.1} gyroscope={true} transitionSpeed={300} tiltMaxAngleX={2} tiltMaxAngleY={2}>
            <div className="gold-bg"></div>
            <Image width={0} height={0} sizes="100vw" loading="lazy" alt="service-bg-img" src="/img/visualization.png" />
            {/* <img
                loading="lazy"
                alt="service-bg-img"
                src="/img/visualization.png"
              /> */}
            <h2
              style={{
                padding: "2vmax 2vmax 1vmax",
                position: "relative",
                zIndex: 2,
                fontSize: "2.5rem",
              }}
            >
              Plumbing Coordination
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
              Planning and coordination of plumbing systems within the building design.
            </h3>
          </Tilt>
          <Tilt className="vendor-box right-service" glareEnable={true} glareMaxOpacity={0.1} gyroscope={true} transitionSpeed={300} tiltMaxAngleX={2} tiltMaxAngleY={2}>
            <div className="gold-bg"></div>
            <Image width={0} height={0} sizes="100vw" loading="lazy" alt="service-bg-img" src="/img/visualization.png" />
            {/* <img
                loading="lazy"
                alt="service-bg-img"
                src="/img/visualization.png"
              /> */}
            <h2
              style={{
                padding: "2vmax 2vmax 1vmax",
                position: "relative",
                zIndex: 2,
                fontSize: "2.5rem",
              }}
            >
              Ansul System Coordination
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
              Planning and coordination of Ansul fire suppression systems within the building design.
            </h3>
          </Tilt>
          <Tilt className="vendor-box right-service" glareEnable={true} glareMaxOpacity={0.1} gyroscope={true} transitionSpeed={300} tiltMaxAngleX={2} tiltMaxAngleY={2}>
            <div className="gold-bg"></div>
            <Image width={0} height={0} sizes="100vw" loading="lazy" alt="service-bg-img" src="/img/visualization.png" />
            {/* <img
                loading="lazy"
                alt="service-bg-img"
                src="/img/visualization.png"
              /> */}
            <h2
              style={{
                padding: "2vmax 2vmax 1vmax",
                position: "relative",
                zIndex: 2,
                fontSize: "2.5rem",
              }}
            >
              Fire Department Applications
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
              Submission of applications to the fire department for necessary approvals and permits.
            </h3>
          </Tilt>
          <Tilt className="vendor-box right-service" glareEnable={true} glareMaxOpacity={0.1} gyroscope={true} transitionSpeed={300} tiltMaxAngleX={2} tiltMaxAngleY={2}>
            <div className="gold-bg"></div>
            <Image width={0} height={0} sizes="100vw" loading="lazy" alt="service-bg-img" src="/img/visualization.png" />
            {/* <img
                loading="lazy"
                alt="service-bg-img"
                src="/img/visualization.png"
              /> */}
            <h2
              style={{
                padding: "2vmax 2vmax 1vmax",
                position: "relative",
                zIndex: 2,
                fontSize: "2.5rem",
              }}
            >
              DOB Filling / Permit Drawings sets
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
              Submission of drawings to the Department of Buildings for permit approval.
            </h3>
          </Tilt>
          <Tilt className="vendor-box right-service" glareEnable={true} glareMaxOpacity={0.1} gyroscope={true} transitionSpeed={300} tiltMaxAngleX={2} tiltMaxAngleY={2}>
            <div className="gold-bg"></div>
            <Image width={0} height={0} sizes="100vw" loading="lazy" alt="service-bg-img" src="/img/visualization.png" />
            {/* <img
                loading="lazy"
                alt="service-bg-img"
                src="/img/visualization.png"
              /> */}
            <h2
              style={{
                padding: "2vmax 2vmax 1vmax",
                position: "relative",
                zIndex: 2,
                fontSize: "2.5rem",
              }}
            >
              Fire Alarm System Coordination
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
              Planning and coordination of fire alarm systems for early detection.
            </h3>
          </Tilt>
          <Tilt className="vendor-box right-service" glareEnable={true} glareMaxOpacity={0.1} gyroscope={true} transitionSpeed={300} tiltMaxAngleX={2} tiltMaxAngleY={2}>
            <div className="gold-bg"></div>
            <Image width={0} height={0} sizes="100vw" loading="lazy" alt="service-bg-img" src="/img/visualization.png" />
            {/* <img
                loading="lazy"
                alt="service-bg-img"
                src="/img/visualization.png"
              /> */}
            <h2
              style={{
                padding: "2vmax 2vmax 1vmax",
                position: "relative",
                zIndex: 2,
                fontSize: "2.5rem",
              }}
            >
              Use and Occupancy Filling Sets
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
              Submission of documentation for approval of the building&apos;s intended use and occupancy.
            </h3>
          </Tilt>
          <Tilt className="vendor-box right-service" style={{ marginBottom: "10%" }} glareEnable={true} glareMaxOpacity={0.1} gyroscope={true} transitionSpeed={300} tiltMaxAngleX={2} tiltMaxAngleY={2}>
            <div className="gold-bg"></div>
            <Image width={0} height={0} sizes="100vw" loading="lazy" alt="service-bg-img" src="/img/visualization.png" />
            {/* <img
                loading="lazy"
                alt="service-bg-img"
                src="/img/visualization.png"
              /> */}
            <h1
              style={{
                padding: "2vmax 2vmax 1vmax",
                position: "relative",
                zIndex: 2,
              }}
            >
              Refrigeration and Insulation
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
              Planning and coordination of refrigeration systems and insulation.
            </h3>
          </Tilt>
        </div>
      </div>
    </div>
  );
};

export default Visualization;
