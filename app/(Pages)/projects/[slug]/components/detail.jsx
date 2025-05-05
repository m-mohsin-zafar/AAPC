"use client";

import Link from "next/link";
import Image from "next/image";
import Tilt from "react-parallax-tilt";

const Detail = ({ project }) => {
  return (
    <div className="flex-container" style={{ position: "relative", borderTop: "none" }}>
      <div className="flex-item-left"></div>

      <div className="flex-item-right">
        <div
          id="carousel-thumbs"
          className="carousel slide"
          data-interval="false"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="row mx-0">
                {project.carouselmages.slice(0, 6).map((item, index) => (
                  <div
                    key={index}
                    id={`carousel-selector-${index}`}
                    className={`thumb col-4 col-sm-2 px-1 py-2 ${
                      index === 0 ? "selected" : ""
                    }`}
                    data-target="#myCarousel"
                    data-slide-to={index.toString()}
                  >
                    <Image
                      width={0}
                      height={0}
                      sizes="100vw"
                      loading="lazy"
                      src={item}
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="carousel-item">
              <div className="row mx-0">
                {project.carouselmages.length > 6 &&
                  project.carouselmages
                    .slice(6, project.carouselmages.length)
                    .map((item, index) => (
                      <div
                        key={index}
                        id={`carousel-selector-${index + 6}`}
                        className={`thumb col-4 col-sm-2 px-1 py-2 `}
                        data-target="#myCarousel"
                        data-slide-to={(index + 6).toString()}
                      >
                        <Image
                          width={0}
                          height={0}
                          sizes="100vw"
                          loading="lazy"
                          src={item}
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                    ))}

                <div className="col-2 px-1 py-2"></div>
                <div className="col-2 px-1 py-2"></div>
              </div>
            </div>
          </div>

          <Link
            href="#carousel-thumbs"
            className="carousel-control-prev"
            role="button"
            data-slide="prev"
            style={{ left: "-50px" }}
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </Link>

          <Link
            href="#carousel-thumbs"
            className="carousel-control-next"
            role="button"
            data-slide="next"
            style={{ right: "-50px" }}
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </Link>
        </div>
        {project?.about && <h3 className="about-text">{project.about}</h3>}

        {project?.aboutVideo && (
          <video style={{ width: "80%", padding: "5% 0" }} controls>
            <source src={project.aboutVideo} type="video/mp4" />
            <source src="movie.ogg" type="video/ogg" />
            Your browser does not support the video tag.
          </video>
        )}
        {project?.about2 && (
          <h3 className="about-text" style={{ textAlign: "right" }}>
            {project.about2}
          </h3>
        )}
        {project?.about2Video && (
          <video
            style={{
              position: "relative",
              width: "100%",
              padding: "5% 0 0",
              paddingLeft: "20%",
            }}
            controls
          >
            <source src={project.about2Video} type="video/mp4" />
            <source src="movie.ogg" type="video/ogg" />
            Your browser does not support the video tag.
          </video>
        )}

        <h2 style={{ margin: "5%" }}>Other Projects</h2>

        <div className="other-projects">
          {project.otherProjects.map((item, index) => (
            <div
              key={index}
              className="other-project-single"
              style={{
                background: `url('${item.image}')`,
                backgroundSize: "cover",
              }}
              onClick={() => {
                window.location.href = item.slug;
              }}
            >
              <Tilt
                glareEnable={true}
                glareMaxOpacity={0.1}
                gyroscope={true}
                transitionSpeed={300}
                tiltMaxAngleX={2}
                tiltMaxAngleY={2}
                style={{ height: "100%" }}
              >
                <h3>{item.title}</h3>
                <button className="button project-button">
                  <h1
                    style={{
                      rotate: "-45deg",
                    }}
                  >
                    ➛
                  </h1>
                </button>
              </Tilt>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Detail;
