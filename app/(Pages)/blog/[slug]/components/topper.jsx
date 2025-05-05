"use client";
import Tilt from "react-parallax-tilt";

const Topper = ({ post }) => {

  const formattedCreated = new Date(post.date).toLocaleDateString(
    "en-US",
    {
      month: "long", // Use "short" for abbreviated month
      day: "numeric",
      year: "numeric",
    }
  );


  return (
    <div>
      <Tilt
        glareEnable={true}
        glareMaxOpacity={0.1}
        gyroscope={true}
        transitionSpeed={300}
        tiltMaxAngleX={2}
        tiltMaxAngleY={2}
        className="tilt-width"
        style={{
          position: "absolute",
          // width: "45vmax",
          height: "60vmin",
          background:
            "linear-gradient(127deg, rgba(176, 156, 59, .49) 0%, rgba(125, 105, 3, 0.28) 100%)",
          boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
          backdropFilter: "blur(12px)",
          marginLeft: "10%",
          top: 0,
        }}
      ></Tilt>
      <div
        className="container"
        style={{ position: "relative", maxWidth: "1140px", height: "auto" }}
      >
        <div className="carousel-container row">
          <Tilt
            glareEnable={true}
            glareMaxOpacity={0}
            gyroscope={true}
            transitionSpeed={300}
            tiltMaxAngleX={2}
            tiltMaxAngleY={2}
            className="project-title"
            style={{ width: "fit-content" }}
          >
            <span dangerouslySetInnerHTML={{ __html: post.title }}/>
          </Tilt>

          <div id="myCarousel" className="carousel slide" data-ride="carousel" style={{padding: "0px"}}>
            <img src={post.featured_image} className="hotels-img" alt={post.title} />
          </div>

          <Tilt
            glareEnable={true}
            glareMaxOpacity={0}
            gyroscope={true}
            transitionSpeed={300}
            tiltMaxAngleX={2}
            tiltMaxAngleY={2}
          >
            <div className="stats">
              <h3>{post.author.first_name} {post.author.last_name}</h3>
              <h3 id="createdDate">Written: {formattedCreated}</h3>
              {/*{formattedCreated !== formattedUpdated && (*/}
              {/*  <h3 id="updatedDate">Updated: {formattedUpdated}</h3>*/}
              {/*)}*/}
            </div>
          </Tilt>
        </div>
      </div>
    </div>
  );
};

export default Topper;
