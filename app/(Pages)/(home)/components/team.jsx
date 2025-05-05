"use client";
import { useEffect, useState } from "react";
import $ from "jquery";
import Tilt from "react-parallax-tilt";

const teams = [
  {
    message: "Allen Azarkian RA, AIA",
    title: "Principal Architect",
    desc: "Allen, a dynamic professional at the intersection of business and architecture, possesses a unique blend of academic prowess and practical experience, exemplified by his undergraduate degree in Finance and a master's in architecture.",
    pic: "url(/img/allen_azarkian_bw.jpg)",
  },
  {
    message: "Pierre E. Tairouz",
    title: "Design Team Director",
    desc: "Currently serving as the Design Team Director at our studios, Pierre brings his expertise to bear on high-end projects, overseeing construction, design development, client relationships, and project coordination. Pierre embodies a global perspective in his architectural endeavors. His multifaceted talents encompass not only design and project management but also languages, making him a truly exceptional architect and leader in the field.",
    pic: "url(/img/pierre_bw.jpg)",
  },
  {
    message: "Jillian Carlisle",
    title: "Architectural Lead",
    desc: "Jillian Carlisle brings expert technical acumen and great knowledge as an Architectural Lead to Azark with the goal of meeting full code and regulation compliance for every commercial project while maximizing design potential. Her work in Department of Buildings and Landmarks Preservation Commission requirements places her as an invaluable asset in Azark's revolutionary compliance-first approach to commercial development.",
    pic: "url(/img/jillian_bw.jpg)",
  },
];

const Team = () => {
  const [active, setActive] = useState(0);

  const toggleContent = () => {
    // setActive((prev) => (prev === 0 ? 1 : 0));
    if (active === teams.length - 1) {
      setActive(0);
    } else {
      setActive(active + 1);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      var wrapper = $("#services-left");
      var box = $("#services-left-text");

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

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.onload = function () {
        (function () {
          $.fn.card_slideshow = function (args) {
            this.each(function (index, slideshow_el) {
              var $this = $(slideshow_el),
                $container = $this.find(".slides-container"),
                $cards = $container.find(".slide-card"),
                $text_container = $this.find(".slides-text-container"),
                $text = $text_container.find(".side-text"),
                $indicator = $('<ul className="slides-indicator" />').appendTo(this),
                in_animation = false,
                defaults = {
                  speed: 200,
                  ease: "swing",
                };

              // parse defaults
              args = $.extend({}, defaults, args);

              // indicator points
              $indicator.html("<li></li>".repeat($cards.length)).find("li:first-child").addClass("active");

              // index attribute
              $($cards).each(function (index, element) {
                $(element).attr("data-index", index);
                $text.filter(":eq(" + index + ")").attr("data-index", index);
              });

              // enable first one
              $text.first().addClass("active");

              // go slide animation
              var next_slide = function () {
                var $current_card = $cards.filter(":first-child"),
                  next_index = parseInt($current_card.attr("data-index")) + 1;

                // start animation
                in_animation = true;

                // next index validation
                if (next_index >= $cards.length) {
                  next_index = 0;
                }

                // switch text
                $text.filter(".active").removeClass("active");
                $text.filter("[data-index=" + next_index + "]").addClass("active");

                // switch indicator
                $indicator.find("li.active").removeClass("active");
                $indicator.find("li:eq(" + next_index + ")").addClass("active");

                // fade out first/top card
                $current_card
                  .fadeOut(args.speed, args.ease, function () {
                    // move it way back to be the last item
                    $current_card.appendTo($container);
                    in_animation = false;
                  })
                  .fadeIn(args.speed, args.ease);
              };

              // on card click
              $cards.on("click", function (e) {
                e.preventDefault();
                // only slide when animation is complete
                if (false === in_animation) {
                  next_slide();
                }
              });
            });

            return this;
          };

          $(".slideshow").card_slideshow({
            speed: 150,
            ease: "swing",
          });
        })();

        var $card = $(".card");
        var lastCard = $(".card-list .card").length - 1;

        var biosection = document.getElementById("biosection");

        setInterval(changeTimer, 10000);

        function changeTimer() {
          if (!biosection.matches(":hover")) {
            var prependList = function () {
              if ($(".card").hasClass("activeNow")) {
                var $slicedCard = $(".card").slice(lastCard).removeClass("transformThis activeNow");
                $(".ul-card").prepend($slicedCard);
              }
            };
            $(".li-card").last().removeClass("transformPrev").addClass("transformThis").prev().addClass("activeNow");
            setTimeout(function () {
              prependList();
            }, 150);

            toggleContent();
          } else {
            console.log("worked");
          }
        }

        $(".next").click(function () {
          var prependList = function () {
            if ($(".card").hasClass("activeNow")) {
              var $slicedCard = $(".card").slice(lastCard).removeClass("transformThis activeNow");
              $(".ul-card").prepend($slicedCard);
            }
          };
          $(".li-card").last().removeClass("transformPrev").addClass("transformThis").prev().addClass("activeNow");
          setTimeout(function () {
            prependList();
          }, 150);
        });
      };
    }
  }, []);

  return (
    <div className="flex-container">
      <div className="flex-item-left" id="services-left">
        <h1 className="left-text" id="services-left-text">
          Our Team
        </h1>
      </div>
      <div className="flex-item-right" style={{ overflow: "hidden" }}>
        <div id="biosection" className="flex-container home-service">
          <div
            style={{
              flex: "30%",
            }}
          >
            <div className="container" style={{ margin: 0, padding: 0 }}>
              <div className="card-stack">
                <div className="ul-card card-list">
                  <Tilt
                    glareEnable={true}
                    glareMaxOpacity={0.1}
                    gyroscope={true}
                    transitionSpeed={300}
                    tiltMaxAngleX={2}
                    tiltMaxAngleY={2}
                    className="li-card card"
                    style={{
                      background: `${teams[active].pic} center/cover`,
                    }}
                  />
                </div>
                <a className="buttons button next" onClick={toggleContent}>
                  <h2 className="bio-button">Next</h2>
                </a>
              </div>
            </div>
          </div>
          <div style={{ flex: "70%" }}>
            <h2 id="testtitle">{teams[active].message}</h2>
            <p id="personTitle">{teams[active].title}</p>
            <h6 id="personDescription" className="services-subtext" style={{ color: "rgba(255, 255, 255, 0.65)" }}>
              {teams[active].desc}
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
