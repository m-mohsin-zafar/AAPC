"use client";
import { useEffect } from "react";
import $ from "jquery";

const About = () => {
  useEffect(() => {
    const handleScroll = () => {
      var wrapper = $("#about-left");
      var box = $("#about-left-text");

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
    <div className="flex-container">
      <div className="flex-item-left" id="about-left">
        <h1 className="left-text" id="about-left-text">
          Who We Are
        </h1>
      </div>
      <div className="flex-item-right">
        <h2 className="section-title">
          About{" "}
          <b
            style={{
              color: "#FFDC32",
            }}
          >
            AAPC
          </b>
        </h2>
        <h3 className="about-text">
          AAPC operates in seamless collaboration with the NYC Department of Buildings (DOB) and other pertinent entities throughout the architectural process demonstrating a meticulous commitment to not only adhere to regulations but also navigate them with precision when intervening in established
          spaces. Our dynamic team stands out in addressing client challenges through innovative solutions, ensuring unwavering compliance with all codes and regulations mandated in New York City. Our pride in our craft is substantiated by years of experience and thorough code research, underpinning
          every decision we make.
        </h3>
        <br />
        <br />
      </div>
    </div>
  );
};

export default About;
