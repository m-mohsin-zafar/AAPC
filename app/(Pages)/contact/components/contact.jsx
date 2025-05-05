"use client";
import { useEffect } from "react";
import $ from "jquery";

const Contact = () => {
  useEffect(() => {
    const handleScroll = () => {
      var wrapper = $("#contact-left");
      var box = $("#contact-left-text");

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
      <div id="contact-left" className="flex-item-left">
        <h1 id="contact-left-text" className="left-text">
          Get in Touch
        </h1>
      </div>
      <div className="flex-item-right" style={{ position: "relative" }}>
        <h2 id="contact-us-text" style={{ margin: "3vmax" }}>
          For more information, business opportunities or any enquiries: reach out below.
        </h2>
        <form action="https://formsubmit.co/admin@aapc.nyc" method="POST">
          <input type="hidden" name="_next" value="https://www.aapc.nyc" />
          <input type="hidden" name="_captcha" value="true" />
          <input type="text" name="_honey" style={{ display: "none" }} />

          <label for="name" style={{ display: "none" }}></label>
          <label for="subject" style={{ display: "none" }}></label>
          <label for="email" style={{ display: "none" }}></label>
          <label for="message" style={{ display: "none" }}></label>
          <input type="text" placeholder="Name" name="name" id="name" required />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <input style={{ width: "50%" }} type="text" placeholder="Subject" name="_subject" id="subject" required />
            <input style={{ width: "50%" }} type="email" placeholder="Email" name="email" id="email" required />
          </div>
          <textarea placeholder="Message" name="message" id="message" required></textarea>
          <button type="submit" className="button-contact">
            <h3>Send</h3>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
