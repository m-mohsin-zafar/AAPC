"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import $ from "jquery";
import Tilt from "react-parallax-tilt";
import Link from "next/link";

const RecentPosts = ({ posts }) => {
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
          Recent Posts
        </h1>
      </div>
      <div className="flex-item-right" style={{ position: "relative", overflow: "hidden" }}>
        <div id="hotels">
          <div>
            {posts.map((item) => (
              <Link
                href={`/blog/${item.slug}`}
                key={item.slug}
                // className="flex-container width-full reverse flex-container-width"
                // className='single-blog-overview'
                className="single-blog-overview   width-full reverse flex-container-width"
                onClick={() => {
                  //   router.push(`/blog/${item.slug}`);
                }}
                style={{ marginTop: "5%", borderTop: "none", borderBottom: "none", textDecoration: "none" }}
              >
                <div className="single-blog-top">
                  <div className="project-left">
                    <div id="blog-left-content" className="project-left-content">
                      <Tilt glareEnable={true} glareMaxOpacity={0} gyroscope={true} transitionSpeed={300} tiltMaxAngleX={2} tiltMaxAngleY={2}>
                        <h2 dangerouslySetInnerHTML={{ __html: item.title }}></h2>
                      </Tilt>
                      {/* <br /> */}
                      <div className="single-blog-overview-author-container">
                        <h5 className="single-blog-overview-author">
                          Author:{" "}
                          <span>
                            {item.author.first_name} {item.author.last_name}
                          </span>
                        </h5>
                        <h5 className="single-blog-overview-author" style={{ float: "right" }}>
                          Published:{" "}
                          <span>
                            {new Date(item.date).toLocaleDateString("en-US", {
                              month: "long", // Use "short" for abbreviated month
                              day: "numeric",
                              year: "numeric",
                            })}
                          </span>
                        </h5>
                      </div>

                      {/*<h4>{item.excerpt}</h4>*/}
                    </div>
                  </div>
                  <div className="project-right">
                    <Tilt
                      glareEnable={true}
                      glareMaxOpacity={0.1}
                      gyroscope={true}
                      transitionSpeed={300}
                      tiltMaxAngleX={2}
                      tiltMaxAngleY={2}
                      className="project-right-pic"
                      style={{
                        background: `url(${item.featured_image})`,
                        backgroundSize: "cover",
                      }}
                    ></Tilt>
                  </div>
                </div>
                <h4 dangerouslySetInnerHTML={{ __html: item.excerpt }}></h4>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentPosts;
